"use client";

import {
  allergyAlerts,
  dashboardStats,
  lowStockItems,
  menuItems,
  recentUpdates,
  upcomingMeals,
} from "@/data/constants";
import {
  Calendar,
  Utensils,
  Package,
  AlertCircle,
  MessageCircle,
  Filter,
  Clock,
  ChevronRight,
  ArrowUpRight,
  Eye,
  Pencil,
  AlertTriangle,
} from "lucide-react";

export default function OverviewTab() {
  return (
    <>
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 mb-1">Tổng số bữa ăn</p>
              <h3 className="text-3xl font-bold">
                {dashboardStats.totalMeals}
              </h3>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Utensils size={24} className="text-orange-500" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <span className="text-green-500 font-medium">+12%</span> so với hôm
            qua
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 mb-1">Yêu cầu đặc biệt</p>
              <h3 className="text-3xl font-bold">
                {dashboardStats.specialRequests}
              </h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <MessageCircle size={24} className="text-blue-500" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <span className="text-orange-500 font-medium">+3</span> yêu cầu mới
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 mb-1">Cảnh báo dị ứng</p>
              <h3 className="text-3xl font-bold">{dashboardStats.allergies}</h3>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertCircle size={24} className="text-red-500" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <span className="text-red-500 font-medium">Cần chú ý</span> cho bữa
            trưa
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-500 mb-1">Tình trạng kho</p>
              <h3 className="text-3xl font-bold">
                {dashboardStats.inventory}%
              </h3>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Package size={24} className="text-green-500" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <span className="text-yellow-500 font-medium">3 mặt hàng</span> sắp
            hết
          </div>
        </div>
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Upcoming meals */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Bữa ăn hôm nay</h2>
                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-orange-500">
                    <Calendar size={18} />
                  </button>
                  <button className="text-gray-500 hover:text-orange-500">
                    <Filter size={18} />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              {upcomingMeals.map((meal, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row md:items-center justify-between py-4 ${
                    index !== upcomingMeals.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <Clock size={18} className="text-orange-500" />
                      </div>
                      <div>
                        <h3 className="font-medium">{meal.type}</h3>
                        <p className="text-sm text-gray-500">{meal.time}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 md:gap-8">
                    <div>
                      <p className="text-sm text-gray-500">Đăng ký</p>
                      <p className="font-medium">{meal.registered} suất</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Đã chuẩn bị</p>
                      <p className="font-medium">{meal.prepared} suất</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Yêu cầu đặc biệt</p>
                      <p className="font-medium text-orange-500">
                        {meal.special} suất
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Trạng thái</p>
                      <p
                        className={`font-medium ${
                          meal.status === "Đang chuẩn bị"
                            ? "text-blue-500"
                            : "text-gray-500"
                        }`}
                      >
                        {meal.status}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="flex items-center text-orange-500 hover:text-orange-600">
                      <span className="mr-1">Chi tiết</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu items */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Món ăn cần chuẩn bị</h2>
                <button className="flex items-center text-orange-500 hover:text-orange-600 text-sm font-medium">
                  Xem tất cả
                  <ArrowUpRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tên món
                    </th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Loại bữa
                    </th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cảnh báo dị ứng
                    </th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tiến độ
                    </th>
                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Thao tác
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {menuItems.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">
                          {item.ingredients.join(", ")}
                        </div>
                      </td>
                      <td className="py-4 px-6">{item.category}</td>
                      <td className="py-4 px-6">
                        {item.allergies.length > 0 ? (
                          <div className="flex items-center">
                            <AlertTriangle
                              size={16}
                              className="text-orange-500 mr-1"
                            />
                            <span>{item.allergies.join(", ")}</span>
                          </div>
                        ) : (
                          <span className="text-green-500">Không</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                            <div
                              className="bg-orange-500 h-2.5 rounded-full"
                              style={{
                                width: `${Math.min(
                                  100,
                                  (item.prepared / item.needed) * 100
                                )}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-sm">
                            {item.prepared}/{item.needed}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex space-x-2">
                          <button className="p-1 text-blue-500 hover:text-blue-600">
                            <Eye size={18} />
                          </button>
                          <button className="p-1 text-orange-500 hover:text-orange-600">
                            <Pencil size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Allergy alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold">Cảnh báo dị ứng</h2>
            </div>
            <div className="p-4">
              {allergyAlerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-3 ${
                    index !== allergyAlerts.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
                        <AlertCircle size={16} className="text-red-500" />
                      </div>
                      <div>
                        <p className="font-medium">{alert.student}</p>
                        <p className="text-sm text-gray-500">
                          Lớp {alert.class}
                        </p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-orange-500">
                      {alert.meal}
                    </span>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 text-sm">
                    <p className="font-medium mb-1">Món ăn: {alert.dish}</p>
                    <p className="text-red-500">
                      Dị ứng: {alert.allergies.join(", ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100">
              <button className="w-full py-2 text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center">
                <span>Xem tất cả cảnh báo</span>
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Low stock items */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold">Nguyên liệu sắp hết</h2>
            </div>
            <div className="p-4">
              {lowStockItems.map((item, index) => (
                <div
                  key={index}
                  className={`p-3 ${
                    index !== lowStockItems.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <p className="font-medium">{item.name}</p>
                    <span className="text-sm text-red-500 font-medium">
                      Thấp
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div
                        className={`h-2 rounded-full ${
                          item.current < item.minimum
                            ? "bg-red-500"
                            : "bg-green-500"
                        }`}
                        style={{
                          width: `${Math.min(
                            100,
                            (item.current / item.minimum) * 100
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-sm whitespace-nowrap">
                      {item.current}/{item.minimum} {item.unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-100">
              <button className="w-full py-2 text-orange-500 hover:text-orange-600 font-medium flex items-center justify-center">
                <span>Quản lý kho</span>
                <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Recent updates */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold">Cập nhật gần đây</h2>
            </div>
            <div className="p-4">
              {recentUpdates.map((update, index) => (
                <div
                  key={index}
                  className={`p-3 ${
                    index !== recentUpdates.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-medium">{update.message}</p>
                    <span className="text-sm text-gray-500">{update.time}</span>
                  </div>
                  <p className="text-sm text-gray-500">{update.user}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
