'use client'
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
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface ManagerLayoutProps {
  children: React.ReactNode;
}
export default function ManagerLayout({ children }: ManagerLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
                href="/manager/accounts"
                className={`flex items-center ${
                  isSidebarOpen ? "justify-start px-4" : "justify-center"
                } py-3 rounded-lg ${
                  isActive("/manager/accounts")
                    ? "bg-blue-50 text-blue-500"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Users size={20} />
                {isSidebarOpen && (
                  <span className="ml-3">Quản lý tài khoản</span>
                )}
              </Link>
            </li>
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
                {isSidebarOpen && <span className="ml-3">Quản lý lớp học</span>}
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
                {isSidebarOpen && <span className="ml-3">Thông báo</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/manager/reports"
                className={`flex items-center ${
                  isSidebarOpen ? "justify-start px-4" : "justify-center"
                } py-3 rounded-lg ${
                  isActive("/manager/reports")
                    ? "bg-blue-50 text-blue-500"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <FileText size={20} />
                {isSidebarOpen && <span className="ml-3">Báo cáo</span>}
              </Link>
            </li>
            <li>
              <Link
                href="/manager/settings"
                className={`flex items-center ${
                  isSidebarOpen ? "justify-start px-4" : "justify-center"
                } py-3 rounded-lg ${
                  isActive("/manager/settings")
                    ? "bg-blue-50 text-blue-500"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Settings size={20} />
                {isSidebarOpen && <span className="ml-3">Cài đặt</span>}
              </Link>
            </li>
          </ul>
          <div className="mt-8 pt-4 border-t border-gray-100">
            <Link
              href="/"
              className={`flex items-center ${
                isSidebarOpen ? "justify-start px-4" : "justify-center"
              } py-3 rounded-lg text-gray-600 hover:bg-gray-100`}
            >
              <LogOut size={20} />
              {isSidebarOpen && <span className="ml-3">Đăng xuất</span>}
            </Link>
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
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-2 text-gray-600 hover:bg-gray-200 cursor-pointer">
                  <Bell size={20} />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer group relative">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="font-medium text-blue-600">NH</span>
                </div>
                <div className="hidden md:block">
                  <p className="font-medium text-sm">Nguyễn Hoàng</p>
                  <p className="text-xs text-gray-500">Trường Tiểu học A</p>
                </div>
                <ChevronDown
                  size={16}
                  className="text-gray-500 hidden md:block"
                />
                {/* Dropdown menu */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 invisible group-hover:visible z-10">
                  <div className="py-1">
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                    >
                      <User size={16} className="mr-2" />
                      Thông tin cá nhân
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                    >
                      <Settings size={16} className="mr-2" />
                      Cài đặt
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                    >
                      <LogOut size={16} className="mr-2" />
                      Đăng xuất
                    </a>
                  </div>
                </div>
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
