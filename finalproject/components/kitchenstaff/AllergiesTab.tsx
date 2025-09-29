"use client";

import { Search, AlertCircle } from "lucide-react";

export default function AllergiesTab() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold mb-4">Quản lý dị ứng</h2>
      <p className="text-gray-500 mb-4">
        Theo dõi và quản lý thông tin dị ứng của học sinh để đảm bảo bữa ăn an
        toàn.
      </p>
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Danh sách học sinh có dị ứng</h3>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Tìm kiếm học sinh..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-100">
          <div className="flex items-start">
            <AlertCircle size={20} className="text-red-500 mr-2 mt-0.5" />
            <div>
              <p className="font-medium text-red-700">Lưu ý quan trọng:</p>
              <p className="text-gray-700 mt-1">
                Thông tin dị ứng của học sinh rất quan trọng để đảm bảo an toàn.
                Vui lòng kiểm tra kỹ trước khi chuẩn bị bữa ăn.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-3">Các loại dị ứng phổ biến</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium">Dị ứng đậu phộng</h4>
            <p className="text-gray-500 text-sm">12 học sinh</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium">Dị ứng sữa</h4>
            <p className="text-gray-500 text-sm">8 học sinh</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium">Dị ứng hải sản</h4>
            <p className="text-gray-500 text-sm">15 học sinh</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium">Dị ứng gluten</h4>
            <p className="text-gray-500 text-sm">5 học sinh</p>
          </div>
        </div>
      </div>
    </div>
  );
}
