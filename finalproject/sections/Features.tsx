"use client";

import { features } from "@/data/constants";
import { CircleCheckBig, SearchCheck } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

  gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      featuresRef.current.forEach((feature, index) => {
        if (feature) {
          const isEven = index % 2 === 0;
          const contentEl = feature.querySelector(".feature-content");
          const imageEl = feature.querySelector(".feature-image");

          gsap.set([contentEl, imageEl], {
            x: isEven ? -100 : 100,
            opacity: 0,
          });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: feature,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            })
            .to(contentEl, {
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            })
            .to(
              imageEl,
              {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
              },
              "-=0.4"
            );
        }
      });

      gsap.to(".floating-element", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
            Tính năng nổi bật
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-pink-600 mx-auto rounded-full" />
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Khám phá những tính năng độc đáo được thiết kế để nâng cao trải
            nghiệm của bạn
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 transform -translate-x-1/2 opacity-50"></div>

          <div className="space-y-24">
            {features.map((f, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={f.title}
                  ref={(el) => {
                    if (el) featuresRef.current[index] = el;
                  }}
                  className="relative group"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-16 items-center ${
                      !isEven ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    <div
                      className={`feature-content relative z-10 ${
                        !isEven ? "lg:col-start-2" : ""
                      }`}
                    >
                      <div className="space-y-8">
                        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-bold rounded-full border border-blue-200">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
                          Tính năng {index + 1}
                        </div>

                        <h3 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                          {f.title}
                        </h3>

                        <p className="text-xl text-gray-600 leading-relaxed">
                          {f.desc}
                        </p>

                        {f.features && (
                          <div className="mt-8 grid md:grid-cols-2 gap-6">
                            {f.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                              >
                                <div className="flex items-center space-x-4">
                                  <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                                      <CircleCheckBig className="w-6 h-6 text-white" />
                                    </div>
                                  </div>

                                  <h5 className="text-lg font-bold text-gray-800">
                                    {feature}
                                  </h5>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="pt-6">
                          <button className="group/btn relative overflow-hidden inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl transform transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 hover:scale-105">
                            <span className="relative z-10">Tìm hiểu thêm</span>
                            <SearchCheck className="relative z-10 w-5 h-5 ml-3 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:rotate-12" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div
                      className={`feature-image relative ${
                        !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                      }`}
                    >
                      <div className="relative group/image perspective-1000">
                        <div className="absolute -inset-12 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl blur-2xl opacity-50"></div>

                        <div
                          className={`floating-element absolute -top-6 ${
                            isEven ? "-right-6" : "-left-6"
                          } w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-80 rotate-12`}
                        ></div>
                        <div
                          className={`floating-element absolute -bottom-8 ${
                            isEven ? "-left-8" : "-right-8"
                          } w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-70`}
                        ></div>

                        <div className="feature-image relative flex justify-center">
                          <div className="image-container relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 transform-gpu w-full max-w-[600px]">
                            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
                              <Image
                                src={f.image}
                                alt={f.title}
                                className="object-cover w-full h-full"
                                fill
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
