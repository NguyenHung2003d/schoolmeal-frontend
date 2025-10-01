"use client";
import React, { useState } from "react";
import {
  Calendar,
  AlertCircle,
  Plus,
  Pencil,
  Eye,
  Search,
  Filter,
  Trash2,
  Image as ImageIcon,
  MessageCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import {
  dessertItems,
  pastMenuItems,
  upcomingMenuItems,
} from "@/data/constants";
import Link from "next/link";
import { WeeklyMenu, WeeklyMenuByDay } from "@/types";

export function MenuTab() {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Function to navigate between weeks
  const navigateWeek = (direction: "prev" | "next") => {
    alert(
      `Đang tải thực đơn ${direction === "prev" ? "tuần trước" : "tuần sau"}...`
    );
  };
  // Function to organize menu items by day
  const getWeeklyMenu = (): WeeklyMenuByDay => {
    const weekDays = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"];
    const weeklyMenu = {} as WeeklyMenuByDay;

    weekDays.forEach((day) => {
      weeklyMenu[day] = {
        main: null,
        dessert: null,
        date: "",
      };
    });

    upcomingMenuItems.forEach((item) => {
      if (item.day && weeklyMenu[item.day]) {
        weeklyMenu[item.day].main = item;
        weeklyMenu[item.day].date = item.date;
      }
    });

    dessertItems.forEach((item) => {
      if (item.day && weeklyMenu[item.day]) {
        weeklyMenu[item.day].dessert = item;
      }
    });

    return weeklyMenu;
  };

  const weeklyMenu = getWeeklyMenu();
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý thực đơn</h1>
        <Link
          href="/kitchen-staff/menu/create"
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
        >
          <Plus size={18} className="mr-2" />
          <span>Tạo thực đơn mới</span>
        </Link>
      </div>
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="border-b border-gray-200">
          <nav className="flex">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "upcoming"
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Thực đơn sắp tới
            </button>
            <button
              onClick={() => setActiveTab("desserts")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "desserts"
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Tráng miệng
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-4 text-sm font-medium ${
                activeTab === "past"
                  ? "border-b-2 border-orange-500 text-orange-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Thực đơn đã qua
            </button>
          </nav>
        </div>
        {/* Search and filter */}
        <div className="p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Tìm kiếm món ăn..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
          <div className="flex items-center space-x-2">
            <select className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option value="all">Tất cả danh mục</option>
              <option value="main">Món chính</option>
              <option value="dessert">Tráng miệng</option>
            </select>
            <button className="p-2 text-gray-500 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>
      </div>
      {/* Weekly Menu View - Only shown when activeTab is 'upcoming' */}
      {activeTab === "upcoming" && (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-800 flex items-center">
              <Calendar className="mr-2" size={20} />
              Thực đơn tuần (23/10 - 27/10/2023)
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={() => navigateWeek("prev")}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => navigateWeek("next")}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          {/* Weekly menu table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-1/6">
                    Ngày
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-2/5">
                    Món chính
                  </th>
                  <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200 w-2/5">
                    Tráng miệng
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(weeklyMenu).map(([day, meals], index) => (
                  <tr
                    key={day}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-4 px-4 border-b border-gray-200">
                      <div className="font-medium text-gray-800">{day}</div>
                      <div className="text-sm text-gray-500">{meals.date}</div>
                    </td>
                    {/* Main dish */}
                    <td className="py-4 px-4 border-b border-gray-200">
                      {meals.main ? (
                        <div className="flex">
                          <div className="w-16 h-16 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                            <img
                              src={meals.main.image}
                              alt={meals.main.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800">
                              {meals.main.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {meals.main.ingredients.join(", ")}
                            </div>
                            {meals.main.allergies.length > 0 && (
                              <div className="flex items-center mt-1">
                                <AlertCircle
                                  size={12}
                                  className="text-red-500 mr-1"
                                />
                                <span className="text-xs text-red-600">
                                  Dị ứng: {meals.main.allergies.join(", ")}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-start ml-2">
                            <button className="p-1 text-blue-500 hover:bg-blue-50 rounded transition-colors">
                              <Eye size={16} />
                            </button>
                            <button className="p-1 text-orange-500 hover:bg-orange-50 rounded transition-colors">
                              <Pencil size={16} />
                            </button>
                            <button className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center text-gray-500">
                          <Plus size={16} className="mr-1" />
                          <span className="text-sm">Thêm món chính</span>
                        </div>
                      )}
                    </td>
                    {/* Dessert */}
                    <td className="py-4 px-4 border-b border-gray-200">
                      {meals.dessert ? (
                        <div className="flex">
                          <div className="w-16 h-16 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                            <img
                              src={meals.dessert.image}
                              alt={meals.dessert.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-800">
                              {meals.dessert.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {meals.dessert.ingredients.join(", ")}
                            </div>
                            {meals.dessert.allergies.length > 0 && (
                              <div className="flex items-center mt-1">
                                <AlertCircle
                                  size={12}
                                  className="text-red-500 mr-1"
                                />
                                <span className="text-xs text-red-600">
                                  Dị ứng: {meals.dessert.allergies.join(", ")}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-start ml-2">
                            <button className="p-1 text-blue-500 hover:bg-blue-50 rounded transition-colors">
                              <Eye size={16} />
                            </button>
                            <button className="p-1 text-orange-500 hover:bg-orange-50 rounded transition-colors">
                              <Pencil size={16} />
                            </button>
                            <button className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center text-gray-500">
                          <Plus size={16} className="mr-1" />
                          <span className="text-sm">Thêm tráng miệng</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Legend and info */}
          <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-100">
            <div className="flex items-center text-sm text-orange-700">
              <AlertCircle size={16} className="mr-2" />
              <span>
                Lưu ý: Thực đơn có thể thay đổi dựa trên tình trạng kho nguyên
                liệu và yêu cầu đặc biệt.
              </span>
            </div>
          </div>
        </div>
      )}
      {/* Original Grid View - Only shown when not on 'upcoming' tab */}
      {activeTab === "desserts" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dessertItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-white/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Thành phần: {item.ingredients.join(", ")}
                </p>
                {item.allergies.length > 0 && (
                  <div className="flex items-center mb-3">
                    <AlertCircle size={14} className="text-red-500 mr-1" />
                    <span className="text-xs text-red-600">
                      Dị ứng: {item.allergies.join(", ")}
                    </span>
                  </div>
                )}
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Calories: {item.nutritionalInfo.calories}</span>
                    <span>Protein: {item.nutritionalInfo.protein}g</span>
                    <span>Carbs: {item.nutritionalInfo.carbs}g</span>
                  </div>
                </div>
                <div className="flex justify-end space-x-1 mt-3">
                  <button className="p-1 text-blue-500 hover:bg-blue-50 rounded transition-colors">
                    <Eye size={18} />
                  </button>
                  <button className="p-1 text-orange-500 hover:bg-orange-50 rounded transition-colors">
                    <Pencil size={18} />
                  </button>
                  <button className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "past" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastMenuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <span className="bg-white/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Thành phần: {item.ingredients.join(", ")}
                </p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-gray-50 p-2 rounded-lg text-center">
                    <p className="text-xs text-gray-500">Đánh giá</p>
                    <p className="font-medium text-sm flex items-center justify-center">
                      {item.feedback.rating}
                      <svg
                        className="w-3 h-3 text-yellow-400 ml-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg text-center">
                    <p className="text-xs text-gray-500">Bình luận</p>
                    <p className="font-medium text-sm">
                      {item.feedback.comments}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg text-center">
                    <p className="text-xs text-gray-500">Thừa thãi</p>
                    <p className="font-medium text-sm">
                      {item.feedback.wastage}
                    </p>
                  </div>
                </div>
                <div className="flex justify-end space-x-1 mt-3">
                  <button className="p-1 text-blue-500 hover:bg-blue-50 rounded transition-colors">
                    <Eye size={18} />
                  </button>
                  <button className="p-1 text-orange-500 hover:bg-orange-50 rounded transition-colors">
                    <MessageCircle size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
