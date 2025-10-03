"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Heart, Award } from "lucide-react";
import { missionData, statsData, teamMembers } from "@/data/constants";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const teamCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Mission cards animation
      gsap.from(missionCardsRef.current, {
        scrollTrigger: {
          trigger: missionCardsRef.current[0],
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Team cards animation
      gsap.from(teamCardsRef.current, {
        scrollTrigger: {
          trigger: teamCardsRef.current[0],
          start: "top 80%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
      });

      // Stats animation with counter
      statsRef.current.forEach((stat) => {
        if (!stat) return;
        const value = stat.querySelector(".stat-number");
        if (!value) return;

        const endValue = parseInt(value.getAttribute("data-value") || "0");

        gsap.from(value, {
          scrollTrigger: {
            trigger: stat,
            start: "top 85%",
          },
          textContent: 0,
          duration: 2,
          ease: "power1.out",
          snap: { textContent: 1 },
          onUpdate: function () {
            const current = Math.ceil(this.targets()[0].textContent);
            value.textContent = current.toString();
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Về EduMeal</h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Nền tảng kết nối phụ huynh với bữa ăn học đường của con
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Chúng tôi là ai
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div
                key={index}
                ref={(el) => {
                  statsRef.current[index] = el;
                }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  <span className="stat-number" data-value={stat.value}>
                    0
                  </span>
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Đội ngũ của chúng tôi
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Những con người tâm huyết đứng sau EduMeal
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                ref={(el) => {
                  teamCardsRef.current[index] = el;
                }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
                  {member.avatar}
                </div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
