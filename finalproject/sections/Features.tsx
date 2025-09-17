"use client";
import { features } from "@/data/constants";
import { SearchCheck } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const featureRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      featureRef.current.forEach((feature: any, index) => {
        if (feature) {
          const isEven = index % 2 === 0;
          const contentEL = feature.querySelector(".feature-content");
          const imageEl = feature.querySelector(".feature-image");
          gsap.set([contentEL, imageEl], {
            x: isEven ? -100 : 100,
            opacity: 0,
          });
        }
      });
    });
  });
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tính năng nổi bật
          </h2>
          <div className="w-24 h-1 bg-gradient-to-br from-blue-500 to-pink-600 mx-auto rounded-full" />
        </div>
        <div className="space-y-32">
          {features.map((f, index) => (
            <div
              key={f.title}
              className={`group relative ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "md:grid-cols-2" : ""
                }`}
              >
                <div
                  className={`space-y-8 ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-br from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold rounded-full">
                      Tính năng
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                      {f.title}
                    </h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                  <div className="pt-4">
                    <button className="group/btn inline-flex items-center px-8 py-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300">
                      Tìm hiểu thêm
                      <SearchCheck className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
                <div
                  className={`relatvie ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="relative group/image">
                    <div className="relative bg-white rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-22">
                      <div className="relative w-full h-80 md:h-96 rounded-full overflow-hidden">
                        <Image
                          src={f.image}
                          alt={f.title}
                          className="object-contain w-full h-full transition-transform duration-700 group-hover:scale-105"
                          fill
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {index < features.length - 1 && (
                  <div className="absolute left-1/2 -bottom-16 w-px h-16 bg-gradient-to-b from-gray-300 to-transparent  transform -translate-x-1/2"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
