"use client";
import { ParentFeedbackData } from "@/data/constants";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ParentFeedbackSection = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const statsRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });
    statsRef.current.forEach((el) => {
      if (!el) return;
      const finalValue = parseInt(el.dataset.value || "0");
      gsap.fromTo(
        { val: 0 },
        { val: 0 },
        {
          val: finalValue,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: function () {
            el.innerText = Math.floor(
              (this.targets()[0] as any).val
            ).toLocaleString();
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
  const StarRating = ({ stars }: { stars: number }) => (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={`text-lg ${
            index < stars ? "text-yellow-400" : "text-gray-300"
          }`}
        >
          <Star size={18} />
        </span>
      ))}
    </div>
  );
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Phụ huynh nói gì về EduMeal
        </h2>

        <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed">
          Chia sẻ từ phụ huynh về trải nghiệm sử dụng EduMeal để theo dõi bữa ăn
          và hoạt động của con
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ParentFeedbackData.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <p className="italic text-gray-700 mb-4">
                  "{testimonial.text}"
                </p>
                <h4 className="font-semibold">{testimonial.author.name}</h4>
                <p className="text-sm text-gray-500">
                  {testimonial.author.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div
              ref={(el) => {
                if (el) statsRef.current[0] = el;
              }}
              data-value="1000"
              className="text-3xl font-bold text-orange-500 mb-2"
            >
              0
            </div>
            <div className="text-gray-600">Phụ huynh tin tưởng</div>
          </div>
          <div className="text-center">
            <div
              ref={(el) => {
                el && (statsRef.current[1] = el);
              }}
              data-value="99"
              className="text-3xl font-bold text-orange-500 mb-2"
            >
              0
            </div>
            <div className="text-gray-600">Mức độ hài lòng</div>
          </div>
          <div className="text-center">
            <div
              ref={(el) => {
                el && (statsRef.current[2] = el);
              }}
              data-value="5"
              className="text-3xl font-bold text-orange-500 mb-2"
            >
              0
            </div>
            <div className="text-gray-600">Đánh giá trung bình</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentFeedbackSection;
