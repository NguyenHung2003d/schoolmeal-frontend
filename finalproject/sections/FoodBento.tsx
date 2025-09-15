"use client";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FOOD_ITEMS } from "@/data/constants";

const FoodTray: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const veggie = FOOD_ITEMS.find((i) => i.category === "vegetable");
  const asparagus = FOOD_ITEMS.find((i) => i.title.includes("măng tây"));
  const soup = FOOD_ITEMS.find((i) => i.category === "soup");
  const dessert = FOOD_ITEMS.find(
    (i) => i.category === "dessert" && !i.title.includes("trái cây")
  );
  const rice = FOOD_ITEMS.find((i) => i.category === "rice");
  const fish = FOOD_ITEMS.find((i) => i.title.includes("cá"));
  const egg = FOOD_ITEMS.find(
    (i) =>
      i.title.toLowerCase().includes("trứng") ||
      i.title.toLowerCase().includes("egg")
  );
  const fruit = FOOD_ITEMS.find(
    (i) =>
      i.category === "dessert" && i.title.toLowerCase().includes("trái cây")
  );

  const getAnimationClass = (delay: number) => {
    return `transition-all duration-700 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
    }`;
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-16 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-amber-50 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-60 right-20 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/3 w-48 h-48 bg-red-200/20 rounded-full blur-3xl animate-float-slow"></div>

        <div className="absolute top-32 right-1/4 text-4xl opacity-20 animate-float-bounce">
          🍎
        </div>
        <div className="absolute top-80 left-1/4 text-3xl opacity-20 animate-wiggle">
          🥕
        </div>
        <div className="absolute bottom-60 right-1/3 text-4xl opacity-60 animate-rotate-slow text-orange-600 drop-shadow-lg">
          🍚
        </div>
        <div className="absolute top-1/2 left-10 text-2xl opacity-30 animate-sway text-orange-600 drop-shadow-lg">
          🥢
        </div>
        <div className="absolute bottom-32 right-10 text-3xl opacity-15 animate-float-bounce delay-1000">
          🍜
        </div>
      </div>

      <div className="relative z-10 text-center mb-16 animate-fade-in-up">
        <div className="inline-block relative">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-orange-600 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4 drop-shadow-lg animate-gradient-x">
            Khay Cơm Học Sinh
          </h1>

          <div className="absolute -top-6 -right-12 text-4xl animate-bounce-gentle">
            🍽️
          </div>
          <div className="absolute -top-8 -left-12 text-3xl animate-twinkle">
            ✨
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-2xl animate-spin-slow">
            ⭐
          </div>
        </div>

        <p className="text-xl md:text-2xl text-orange-800 font-semibold mt-4 mb-6 animate-fade-in-up delay-300">
          Bữa ăn dinh dưỡng cho học sinh
        </p>

        <div className="relative w-32 h-2 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 mx-auto rounded-full shadow-lg animate-shimmer">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 rounded-full animate-pulse-gentle"></div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Tray shadow base */}
        <div className="absolute inset-0 bg-gray-800/20 rounded-3xl blur-xl transform translate-y-8 scale-105"></div>

        {/* Main tray container */}
        <div className="relative bg-gradient-to-br from-gray-100 via-gray-50 to-white rounded-3xl p-6 shadow-2xl border-8 border-gray-200/80 backdrop-blur-sm">
          {/* Inner tray rim */}
          <div className="absolute inset-4 rounded-2xl border-2 border-gray-300/50 shadow-inner"></div>

          {/* Tray compartment dividers */}
          <div className="absolute inset-6 grid grid-cols-4 grid-rows-3 gap-4">
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-4 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-gray-200/30 rounded-lg"
                ></div>
              ))}
            </div>
          </div>
          <div
            ref={gridRef}
            className="relative z-10 grid grid-cols-4 grid-rows-3 gap-4 h-[600px] w-full"
          >
            {/* Dessert */}
            {dessert && (
              <div className="row-start-1 col-start-1 relative rounded-xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={dessert.image}
                  alt={dessert.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Veggie (span 2) */}
            {veggie && (
              <div className="row-start-1 col-span-2 col-start-2 relative rounded-xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={veggie.image}
                  alt={veggie.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Asparagus */}
            {asparagus && (
              <div className="row-start-1 col-start-4 relative rounded-xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={asparagus.image}
                  alt={asparagus.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Fruit */}
            {fruit && (
              <div className="row-start-2 col-start-1 relative rounded-xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={fruit.image}
                  alt={fruit.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Rice (Main) */}
            {rice && (
              <div className="row-start-2 col-span-2 col-start-2 relative rounded-xl overflow-hidden bg-white shadow-2xl border-4 border-green-400">
                <Image
                  src={rice.image}
                  alt={rice.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Món chính
                </div>
              </div>
            )}

            {/* Egg */}
            {egg && (
              <div className="row-start-2 col-start-4 relative rounded-xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={egg.image}
                  alt={egg.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Soup (2 ô cuối row 3) */}
            {soup && (
              <div className="row-start-3 col-span-2 col-start-3 relative rounded-xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={soup.image}
                  alt={soup.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Fish */}
            {fish && (
              <div className="row-start-3 col-start-2 relative rounded-xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={fish.image}
                  alt={fish.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Optional: Soup thứ 2 bên trái */}
            {soup && (
              <div className="row-start-3 col-start-1 relative rounded-xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={soup.image}
                  alt={soup.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodTray;
