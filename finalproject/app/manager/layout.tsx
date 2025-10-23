"use client";
import React, { useState } from "react";
import {
  Building,
  Home,
  Users,
  BookOpen,
  Bell,
  Settings,
  LogOut,
  Search,
  Menu,
  ChevronDown,
  School,
  User,
  FileText,
  Calendar,
  BarChart3,
  MessageSquare,
  DollarSign,
  Upload,
  UserPlus,
  Download,
  ClipboardList,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
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
            <div className="h-8 w-8 rounded-md bg-blue-500 flex items-center justify-center">
              <Building size={18} className="text-white" />
            </div>
            {isSidebarOpen && (
              <span className="font-bold text-xl ml-3">Manager Portal</span>
            )}
          </div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:text-blue-500 transition-colors"
          >
            {isSidebarOpen ? <Menu size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="p-4">
          <div className="mb-4">
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
                  href="/manager"
                  className={`flex items-center ${
                    isSidebarOpen ? "justify-start px-4" : "justify-center"
                  } py-3 rounded-lg ${
                    isActive("/manager")
                      ? "bg-blue-50 text-blue-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Home size={20} />
                  {isSidebarOpen && <span className="ml-3">Trang chủ</span>}
                </Link>
              </li>
              <li>
                <Link
                  href="/manager/statistics"
                  className={`flex items-center ${
                    isSidebarOpen ? "justify-start px-4" : "justify-center"
                  } py-3 rounded-lg ${
                    isActive("/manager/statistics")
                      ? "bg-blue-50 text-blue-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <BarChart3 size={20} />
                  {isSidebarOpen && (
                    <span className="ml-3">Thống kê nội bộ</span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p
              className={`text-xs font-medium text-gray-400 mb-2 ${
                !isSidebarOpen && "text-center"
              }`}
            >
              {isSidebarOpen ? "QUẢN LÝ TÀI KHOẢN" : ""}
            </p>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() =>
                    setIsAccountDropdownOpen(!isAccountDropdownOpen)
                  }
                  className={`flex items-center w-full ${
                    isSidebarOpen ? "justify-between px-4" : "justify-center"
                  } py-3 rounded-lg ${
                    pathname.startsWith("/manager/staff") ||
                    pathname.startsWith("/manager/parents")
                      ? "bg-blue-50 text-blue-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center">
                    <Users size={20} />
                    {isSidebarOpen && (
                      <span className="ml-3">Quản lý tài khoản</span>
                    )}
                  </div>
                  {isSidebarOpen && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        isAccountDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown con */}
                {isAccountDropdownOpen && isSidebarOpen && (
                  <ul className="ml-8 mt-2 space-y-1">
                    <li>
                      <Link
                        href="/manager/staff"
                        className={`flex items-center px-3 py-2 text-sm rounded-lg ${
                          pathname.startsWith("/manager/staff")
                            ? "bg-blue-50 text-blue-500"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <UserPlus size={16} className="mr-2" />
                        Tài khoản nhân viên
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/manager/parents"
                        className={`flex items-center px-3 py-2 text-sm rounded-lg ${
                          pathname.startsWith("/manager/parents")
                            ? "bg-blue-50 text-blue-500"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <Users size={16} className="mr-2" />
                        Tài khoản phụ huynh
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/manager/students"
                  className={`flex items-center ${
                    isSidebarOpen ? "justify-start px-4" : "justify-center"
                  } py-3 rounded-lg ${
                    isActive("/manager/students")
                      ? "bg-blue-50 text-blue-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Upload size={20} />
                  {isSidebarOpen && <span className="ml-3">Nhập học sinh</span>}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p
              className={`text-xs font-medium text-gray-400 mb-2 ${
                !isSidebarOpen && "text-center"
              }`}
            >
              {isSidebarOpen ? "QUẢN LÝ HỌC TẬP" : ""}
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/manager/classes"
                  className={`flex items-center ${
                    isSidebarOpen ? "justify-start px-4" : "justify-center"
                  } py-3 rounded-lg ${
                    isActive("/manager/classes")
                      ? "bg-blue-50 text-blue-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <BookOpen size={20} />
                  {isSidebarOpen && (
                    <span className="ml-3">Quản lý lớp học</span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/manager/notifications"
                  className={`flex items-center ${
                    isSidebarOpen ? "justify-start px-4" : "justify-center"
                  } py-3 rounded-lg ${
                    isActive("/manager/notifications")
                      ? "bg-blue-50 text-blue-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Bell size={20} />
                  {isSidebarOpen && <span className="ml-3">Gửi thông báo</span>}
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <p
              className={`text-xs font-medium text-gray-400 mb-2 ${
                !isSidebarOpen && "text-center"
              }`}
            >
              {isSidebarOpen ? "TÀI CHÍNH" : ""}
            </p>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/manager/billing"
                  className={`flex items-center ${
                    isSidebarOpen ? "justify-start px-4" : "justify-center"
                  } py-3 rounded-lg ${
                    isActive("/manager/billing")
                      ? "bg-blue-50 text-blue-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <DollarSign size={20} />
                  {isSidebarOpen && (
                    <span className="ml-3">Hóa đơn & Nhân viên</span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/manager/invoices"
                  className={`flex items-center ${
                    isSidebarOpen ? "justify-start px-4" : "justify-center"
                  } py-3 rounded-lg ${
                    isActive("/manager/invoices")
                      ? "bg-blue-50 text-blue-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {isSidebarOpen && (
                    <span className="ml-3">Báo cáo hóa đơn</span>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  href="/manager/finance"
                  className={`flex items-center ${
                    isSidebarOpen ? "justify-start px-4" : "justify-center"
                  } py-3 rounded-lg ${
                    isActive("/manager/finance")
                      ? "bg-blue-50 text-blue-500"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Download size={20} />
                  {isSidebarOpen && (
                    <span className="ml-3">Xuất báo cáo tài chính</span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* Main content */}
      <div
        className={`flex-1 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-20">
          <div className="px-6 py-4 flex justify-between items-center">
            {/* Search Input */}
            <div className="flex-1">
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            {/* Notification + User Icon */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative bg-gray-100 rounded-lg p-2 text-gray-600 hover:bg-gray-200 cursor-pointer">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </div>

              {/* User Icon + Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowAccountMenu((prev) => !prev)}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="font-medium text-blue-600">NH</span>
                  </div>
                  {isSidebarOpen && (
                    <>
                      <div className="hidden md:block text-left">
                        <p className="font-medium text-sm">Nguyễn Hoàng</p>
                        <p className="text-xs text-gray-500">
                          Trường Tiểu học A
                        </p>
                      </div>
                      <ChevronDown
                        size={16}
                        className="text-gray-500 hidden md:block"
                      />
                    </>
                  )}
                </button>

                {/* Dropdown Menu */}
                {showAccountMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <Link
                      href="/manager/account"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                    >
                      <User size={16} className="mr-2" />
                      Thông tin cá nhân
                    </Link>
                    <Link
                      href="/manager/settings"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                    >
                      <Settings size={16} className="mr-2" />
                      Cài đặt
                    </Link>
                    <button
                      onClick={() => {
                        /* Logic đăng xuất */
                      }}
                      className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut size={16} className="mr-2" />
                      Đăng xuất
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        {/* Main content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
