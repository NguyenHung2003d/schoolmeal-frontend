'use client'
import React from "react";
import {
  Home,
  BookOpen,
  Calendar,
  Image,
  FileText,
  BarChart2,
  LogOut,
  Settings,
  User,
  Bell,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface TeacherLayoutProps {
  children: React.ReactNode;
}
export function TeacherLayout({ children }: TeacherLayoutProps) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-orange-500 text-white fixed h-full">
        <div className="p-4 border-b border-orange-400">
          <h1 className="text-xl font-bold">Teacher Portal</h1>
          <p className="text-sm text-orange-200">Hệ thống quản lý học sinh</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <Link
                href="/teacher"
                className={`flex items-center px-4 py-3 rounded-lg ? 'bg-white text-orange-500' : 'hover:bg-orange-600'}`}
              >
                <Home size={20} className="mr-3" />
                <span>Trang chủ</span>
              </Link>
            </li>
            <li>
              <Link
                href="/teacher/classes"
                className={`flex items-center px-4 py-3 rounded-lg ${
                  isActive("/teacher/classes")
                    ? "bg-white text-orange-500"
                    : "hover:bg-orange-600"
                }`}
              >
                <BookOpen size={20} className="mr-3" />
                <span>Tạo lớp học</span>
              </Link>
            </li>
            <li>
              <Link
                href="/teacher/meals"
                className={`flex items-center px-4 py-3 rounded-lg ${
                  isActive("/teacher/meals")
                    ? "bg-white text-orange-500"
                    : "hover:bg-orange-600"
                }`}
              >
                <Calendar size={20} className="mr-3" />
                <span>Lịch bữa ăn</span>
              </Link>
            </li>
            <li>
              <Link
                href="/teacher/attendance"
                className={`flex items-center px-4 py-3 rounded-lg ${
                  isActive("/teacher/attendance")
                    ? "bg-white text-orange-500"
                    : "hover:bg-orange-600"
                }`}
              >
                <FileText size={20} className="mr-3" />
                <span>Xem lớp học</span>
              </Link>
            </li>
            <li>
              <Link
                href="/teacher/reports"
                className={`flex items-center px-4 py-3 rounded-lg ${
                  isActive("/teacher/reports")
                    ? "bg-white text-orange-500"
                    : "hover:bg-orange-600"
                }`}
              >
                <BarChart2 size={20} className="mr-3" />
                <span>Báo cáo bữa ăn</span>
              </Link>
            </li>
            <li>
              <Link
                href="/teacher/gallery"
                className={`flex items-center px-4 py-3 rounded-lg ${
                  isActive("/teacher/gallery")
                    ? "bg-white text-orange-500"
                    : "hover:bg-orange-600"
                }`}
              >
                <Image size={20} className="mr-3" />
                <span>Quản lý ảnh</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Main content */}
      <div className="ml-64 flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Dashboard Giáo viên
          </h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell size={20} className="text-gray-600 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-orange-50 p-2 rounded-lg">
              <div className="bg-orange-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                <span className="font-bold">LA</span>
              </div>
              <div>
                <p className="font-medium text-sm">Cô Lan Anh</p>
                <p className="text-xs text-gray-500">Giáo viên chủ nhiệm</p>
              </div>
            </div>
          </div>
        </header>
        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
