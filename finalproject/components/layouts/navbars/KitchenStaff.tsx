"use client";

import { Bell, ChefHat } from "lucide-react";

interface KitchenStaffNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function KitchenStaffNavbar({
  activeTab,
  setActiveTab,
}: KitchenStaffNavbarProps) {
  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-orange-500 p-2 rounded-lg mr-3">
              <ChefHat size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                EduMeal - Quản lý bếp
              </h1>
              <p className="text-gray-600">{today}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-orange-200 flex items-center justify-center mr-2">
                <span className="font-medium text-orange-800">NT</span>
              </div>
              <span className="font-medium">Nguyễn Thị Tâm</span>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-white rounded-xl shadow-sm mb-6 border border-gray-200 flex overflow-x-auto">
        {[
          { key: "overview", label: "Tổng quan" },
          { key: "menu", label: "Quản lý thực đơn" },
          { key: "inventory", label: "Kho nguyên liệu" },
          { key: "allergies", label: "Quản lý dị ứng" },
          { key: "reports", label: "Báo cáo" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`px-6 py-4 font-medium ${
              activeTab === tab.key
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-600 hover:text-orange-500"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </>
  );
}
