"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { WEEKLY_MENU_DATA } from "@/data/weeklyMenuData";
import { DayMenu, MealItem } from "@/types";

const MenuByDay = () => {
  const [selectedDay, setSelectedDay] = useState<string>(
    WEEKLY_MENU_DATA[0]?.day || "monday"
  );
  const [expandedMeal, setExpandedMeal] = useState<string | null>(null);

  const selectedDayData = WEEKLY_MENU_DATA.find(
    (day) => day.day === selectedDay
  );

  const dayColors = {
    monday: "from-blue-500 to-indigo-600",
    tuesday: "from-emerald-500 to-teal-600",
    wednesday: "from-purple-500 to-violet-600",
    thursday: "from-amber-500 to-orange-600",
    friday: "from-rose-500 to-pink-600",
    saturday: "from-cyan-500 to-sky-600",
    sunday: "from-red-500 to-rose-600",
  };

  const mealIcons = {
    breakfast: "🌅",
    lunch: "🍽️",
    snack: "🍎",
  };

  const mealNames = {
    breakfast: "Bữa sáng",
    lunch: "Bữa trưa",
    snack: "Xế chiều",
  };

  return (
    <section className="mt-[150px] mb-12 px-4">
      {/* Header với gradient động */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-400/20 blur-3xl rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4 relative z-10">
          Thực đơn tuần này
        </h2>
        <p className="text-gray-600 text-lg relative z-10">
          Khám phá những món ăn ngon mỗi ngày
        </p>
      </div>

      {/* Day selector với thiết kế mới */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-6 text-center">
            Chọn ngày trong tuần
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {WEEKLY_MENU_DATA.map((day: DayMenu) => (
              <button
                key={day.day}
                onClick={() => setSelectedDay(day.day)}
                className={`
                  relative p-4 rounded-2xl font-bold text-sm transition-all duration-300 transform hover:scale-105 
                  ${
                    selectedDay === day.day
                      ? `bg-gradient-to-br ${
                          dayColors[day.day as keyof typeof dayColors]
                        } text-white shadow-xl scale-105`
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md"
                  }
                `}
              >
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-2xl">
                    {day.day === "monday" && "🌟"}
                    {day.day === "tuesday" && "⭐"}
                    {day.day === "wednesday" && "💫"}
                    {day.day === "thursday" && "✨"}
                    {day.day === "friday" && "🎉"}
                    {day.day === "saturday" && "🌈"}
                    {day.day === "sunday" && "🌞"}
                  </span>
                  <span className="font-bold text-xs">{day.dayVn}</span>
                  <span className="text-xs opacity-75 capitalize">
                    {day.day}
                  </span>
                </div>
                {selectedDay === day.day && (
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu display với animation */}
      {selectedDayData && (
        <div className="max-w-7xl mx-auto">
          <div
            className={`bg-gradient-to-r ${
              dayColors[selectedDay as keyof typeof dayColors]
            } rounded-3xl p-8 mb-8 shadow-2xl`}
          >
            <div className="text-center text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {selectedDayData.dayVn}
              </h3>
              <p className="text-lg opacity-90 capitalize">
                Menu cho {selectedDayData.day}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(["breakfast", "lunch", "snack"] as const).map((mealType) => {
              const meal: MealItem = selectedDayData[mealType];
              const isExpanded = expandedMeal === `${selectedDay}-${mealType}`;

              return (
                <div
                  key={mealType}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                >
                  {/* Meal type badge */}
                  <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-bold text-gray-800 flex items-center gap-2">
                      <span className="text-lg">{mealIcons[mealType]}</span>
                      {mealNames[mealType]}
                    </span>
                  </div>

                  {/* Image container */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={meal.image}
                      alt={meal.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold text-gray-800 leading-tight">
                      {meal.name}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {meal.description}
                    </p>

                    {meal.nutrition && (
                      <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-2xl">
                        <span className="text-orange-500">🌟</span>
                        <span className="text-sm font-medium text-orange-700">
                          {meal.nutrition}
                        </span>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex gap-3 pt-2">
                      <Button
                        onClick={() =>
                          setExpandedMeal(
                            isExpanded ? null : `${selectedDay}-${mealType}`
                          )
                        }
                        className="flex-1 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-bold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        {isExpanded ? "Thu gọn" : "Xem chi tiết"}
                      </Button>
                    </div>

                    {/* Expanded content */}
                    {isExpanded && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-2xl animate-in slide-in-from-top-2 duration-300">
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-700">
                              Thời gian:
                            </span>
                            <span className="text-sm text-gray-600">
                              {mealType === "breakfast" && "6:30 - 8:00"}
                              {mealType === "lunch" && "11:30 - 13:00"}
                              {mealType === "snack" && "15:00 - 16:00"}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-gray-700">
                              Phù hợp:
                            </span>
                            <span className="text-sm text-gray-600">
                              Trẻ em 3-6 tuổi
                            </span>
                          </div>
                          <div className="pt-2">
                            <Button className="w-full bg-gradient-to-r from-green-400 to-emerald-600 hover:from-green-500 hover:to-emerald-700 text-white font-bold py-2 rounded-xl">
                              Đặt món ngay
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none rounded-3xl"></div>
                </div>
              );
            })}
          </div>

          {/* Weekly summary */}
          <div className="mt-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-indigo-800 mb-4">
                📊 Tóm tắt dinh dưỡng tuần
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/80 rounded-2xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">
                    Thực phẩm tự nhiên
                  </div>
                </div>
                <div className="bg-white/80 rounded-2xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">21</div>
                  <div className="text-sm text-gray-600">Bữa ăn/tuần</div>
                </div>
                <div className="bg-white/80 rounded-2xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">5⭐</div>
                  <div className="text-sm text-gray-600">
                    Đánh giá chất lượng
                  </div>
                </div>
                <div className="bg-white/80 rounded-2xl p-4 shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">🏆</div>
                  <div className="text-sm text-gray-600">Chuẩn quốc tế</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MenuByDay;
