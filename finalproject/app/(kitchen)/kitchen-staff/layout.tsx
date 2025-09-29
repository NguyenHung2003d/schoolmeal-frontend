"use client";

import {
  Bell,
  ChefHat,
  BarChart3,
  Utensils,
  Package,
  AlertCircle,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KitchenStaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const tabs = [
    {
      key: "overview",
      label: "Tổng quan",
      href: "/kitchen-staff/overview",
      icon: BarChart3,
    },
    {
      key: "menu",
      label: "Quản lý thực đơn",
      href: "/kitchen-staff/menu",
      icon: Utensils,
    },
    {
      key: "inventory",
      label: "Kho nguyên liệu",
      href: "/kitchen-staff/inventory",
      icon: Package,
    },
    {
      key: "allergies",
      label: "Quản lý dị ứng",
      href: "/kitchen-staff/allergies",
      icon: AlertCircle,
    },
    {
      key: "reports",
      label: "Báo cáo",
      href: "/kitchen-staff/reports",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
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
        </div>
      </header>

      {/* Main content */}
      <div className="container mx-auto px-4 py-6">
        {/* Dashboard navigation */}
        <div className="bg-white rounded-xl shadow-sm mb-6 border border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Link
                  key={tab.key}
                  href={tab.href}
                  className={`px-6 py-4 font-medium flex items-center ${
                    pathname === tab.href
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  <Icon size={18} className="mr-2" />
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
