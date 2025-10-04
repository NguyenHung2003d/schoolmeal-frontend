"use client";
import { useState } from "react";
import {
  Home,
  School,
  Users,
  Bell,
  FileText,
  Settings,
  Search,
  Menu,
  ChevronDown,
  User,
  UserPen,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg fixed h-full transition-all duration-300`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-orange-500 flex items-center justify-center">
              <User size={18} className="text-white" />
            </div>
            {isSidebarOpen && (
              <span className="ml-3 font-bold text-xl">Admin Panel</span>
            )}
          </div>
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          <Link
            href="/admin"
            className={`flex items-center py-3 rounded-lg ${
              isActive("/admin")
                ? "bg-orange-50 text-orange-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Home size={20} />
            {isSidebarOpen && <span className="ml-3">Tổng quát</span>}
          </Link>
          <Link
            href="/admin/schools"
            className={`flex items-center py-3 rounded-lg ${
              isActive("/admin/schools")
                ? "bg-orange-50 text-orange-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <School size={20} />
            {isSidebarOpen && <span className="ml-3">Quản lý trường</span>}
          </Link>
          <Link
            href="/admin/accounts"
            className={`flex items-center py-3 rounded-lg ${
              isActive("/admin/accounts")
                ? "bg-orange-50 text-orange-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Users size={20} />
            {isSidebarOpen && <span className="ml-3">Tài khoản</span>}
          </Link>
          <Link
            href="/admin/update-account"
            className={`flex items-center py-3 rounded-lg ${
              isActive("/admin/notifications")
                ? "bg-orange-50 text-orange-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <UserPen size={20} />
            {isSidebarOpen && <span className="ml-3">Cập nhật thông tin trang web</span>}
          </Link>
          <Link
            href="/admin/notifications"
            className={`flex items-center py-3 rounded-lg ${
              isActive("/admin/notifications")
                ? "bg-orange-50 text-orange-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Bell size={20} />
            {isSidebarOpen && <span className="ml-3">Thông báo</span>}
          </Link>
          <Link
            href="/admin/reports"
            className={`flex items-center py-3 rounded-lg ${
              isActive("/admin/reports")
                ? "bg-orange-50 text-orange-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FileText size={20} />
            {isSidebarOpen && <span className="ml-3">Báo cáo</span>}
          </Link>
          <Link
            href="/admin/settings"
            className={`flex items-center py-3 rounded-lg ${
              isActive("/admin/settings")
                ? "bg-orange-50 text-orange-500"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Settings size={20} />
            {isSidebarOpen && <span className="ml-3">Cài đặt</span>}
          </Link>
        </nav>
      </div>

      {/* Main content */}
      <div
        className={`flex-1 ${isSidebarOpen ? "ml-64" : "ml-20"} transition-all`}
      >
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-10 p-4 flex justify-between items-center">
          <div className="relative max-w-md w-full">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-orange-500"
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
          <div className="flex items-center space-x-4">
            <Bell size={20} className="text-gray-600" />
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 font-medium">LC</span>
              </div>
              <ChevronDown size={16} className="text-gray-500" />
            </div>
          </div>
        </header>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
