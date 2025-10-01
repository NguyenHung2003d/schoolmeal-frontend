"use client";

import {
  Bell,
  ChefHat,
  BarChart3,
  Utensils,
  Package,
  AlertCircle,
  Plus,
  Search,
  Menu,
  Home,
  Settings,
  LogOut,
  Users,
  ShoppingCart,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function KitchenStaffLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg fixed h-full transition-all duration-300 z-30`}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-100">
          <div
            className={`flex items-center ${
              !isSidebarOpen && "justify-center w-full"
            }`}
          >
            <div className="bg-orange-500 p-2 rounded-lg">
              <ChefHat size={isSidebarOpen ? 24 : 20} className="text-white" />
            </div>
            {isSidebarOpen && (
              <h1 className="ml-3 font-bold text-xl text-gray-800">EduMeal</h1>
            )}
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:text-orange-500 transition-colors"
          >
            {isSidebarOpen ? <Menu size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className="py-4">
          <nav className="px-2">
            <div className={`mb-4 ${isSidebarOpen ? "px-4" : "px-0"}`}>
              <p
                className={`text-xs font-medium text-gray-400 mb-2 ${
                  !isSidebarOpen && "text-center"
                }`}
              >
                {isSidebarOpen ? "TỔNG QUAN" : ""}
              </p>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/kitchen-staff"
                    className={`flex items-center ${
                      isSidebarOpen ? "justify-start" : "justify-center"
                    } py-2 px-3 rounded-lg ${
                      isActive("/kitchen-staff")
                        ? "bg-orange-50 text-orange-500 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Home size={20} />
                    {isSidebarOpen && <span className="ml-3">Trang chủ</span>}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-staff/reports"
                    className={`flex items-center ${
                      isSidebarOpen ? "justify-start" : "justify-center"
                    } py-2 px-3 rounded-lg ${
                      isActive("/kitchen-staff/reports")
                        ? "bg-orange-50 text-orange-500 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <BarChart3 size={20} />
                    {isSidebarOpen && <span className="ml-3">Thống kê</span>}
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`mb-4 ${isSidebarOpen ? "px-4" : "px-0"}`}>
              <p
                className={`text-xs font-medium text-gray-400 mb-2 ${
                  !isSidebarOpen && "text-center"
                }`}
              >
                {isSidebarOpen ? "QUẢN LÝ" : ""}
              </p>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/kitchen-staff/menu"
                    className={`flex items-center ${
                      isSidebarOpen ? "justify-start" : "justify-center"
                    } py-2 px-3 rounded-lg ${
                      isActive("/kitchen-staff/menu")
                        ? "bg-orange-50 text-orange-500 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Utensils size={20} />
                    {isSidebarOpen && <span className="ml-3">Thực đơn</span>}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-staff/students"
                    className={`flex items-center ${
                      isSidebarOpen ? "justify-start" : "justify-center"
                    } py-2 px-3 rounded-lg ${
                      isActive("/kitchen-staff/students")
                        ? "bg-orange-50 text-orange-500 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Users size={20} />
                    {isSidebarOpen && <span className="ml-3">Học sinh</span>}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-staff/inventory"
                    className={`flex items-center ${
                      isSidebarOpen ? "justify-start" : "justify-center"
                    } py-2 px-3 rounded-lg ${
                      isActive("/kitchen-staff/inventory")
                        ? "bg-orange-50 text-orange-500 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <Package size={20} />
                    {isSidebarOpen && (
                      <span className="ml-3">Kho nguyên liệu</span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-staff/purchase-plan"
                    className={`flex items-center ${
                      isSidebarOpen ? "justify-start" : "justify-center"
                    } py-2 px-3 rounded-lg ${
                      isActive("/kitchen-staff/purchase-plan")
                        ? "bg-orange-50 text-orange-500 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <ShoppingCart size={20} />
                    {isSidebarOpen && (
                      <span className="ml-3">Kế hoạch mua sắm</span>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-staff/allergies"
                    className={`flex items-center ${
                      isSidebarOpen ? "justify-start" : "justify-center"
                    } py-2 px-3 rounded-lg ${
                      isActive("/kitchen-staff/allergies")
                        ? "bg-orange-50 text-orange-500 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <AlertCircle size={20} />
                    {isSidebarOpen && (
                      <>
                        <span className="ml-3">Dị ứng</span>
                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                          3
                        </span>
                      </>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kitchen-staff/feedback"
                    className={`flex items-center ${
                      isSidebarOpen ? "justify-start" : "justify-center"
                    } py-2 px-3 rounded-lg ${
                      isActive("/kitchen-staff/feedback")
                        ? "bg-orange-50 text-orange-500 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <MessageCircle size={20} />
                    {isSidebarOpen && (
                      <>
                        <span className="ml-3">Phản hồi & Đánh giá</span>
                        <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">
                          2
                        </span>
                      </>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
            <div className={`mb-4 ${isSidebarOpen ? "px-4" : "px-0"}`}>
              <p
                className={`text-xs font-medium text-gray-400 mb-2 ${
                  !isSidebarOpen && "text-center"
                }`}
              >
                {isSidebarOpen ? "HỆ THỐNG" : ""}
              </p>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className={`flex items-center ${
                      isSidebarOpen ? "justify-start" : "justify-center"
                    } py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100`}
                  >
                    <Settings size={20} />
                    {isSidebarOpen && <span className="ml-3">Cài đặt</span>}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`flex items-center ${
                      isSidebarOpen ? "justify-start" : "justify-center"
                    } py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100`}
                  >
                    <LogOut size={20} />
                    {isSidebarOpen && <span className="ml-3">Đăng xuất</span>}
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {isSidebarOpen && (
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="font-medium text-orange-600">NT</span>
              </div>
              <div className="ml-3">
                <p className="font-medium text-sm">Nguyễn Thị Tâm</p>
                <p className="text-xs text-gray-500">Quản lý bếp</p>
              </div>
            </div>
          </div>
        )}
      </aside>
      {/* Main content */}
      <div
        className={`flex-1 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-20">
          <div className="px-6 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Quản lý bữa trưa
              </h1>
              <p className="text-sm text-gray-500">
                {new Date().toLocaleDateString("vi-VN", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-2 text-gray-600 hover:bg-gray-200 cursor-pointer">
                  <Search size={20} />
                </div>
              </div>
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-2 text-gray-600 hover:bg-gray-200 cursor-pointer">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </div>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
                <Plus size={18} className="mr-2" />
                <span>Thêm mới</span>
              </button>
            </div>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}
