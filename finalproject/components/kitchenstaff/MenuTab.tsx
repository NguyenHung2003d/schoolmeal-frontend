import React from "react";
import { Plus, ArrowUpRight } from "lucide-react";

const MenuTab = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold mb-4">Quản lý thực đơn</h2>
      <p className="text-gray-500 mb-4">
        Tạo và quản lý thực đơn hàng ngày, hàng tuần cho học sinh.
      </p>

      {/* Weekly Menu */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Thực đơn tuần này</h3>
          <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            <Plus size={18} className="mr-1" />
            Thêm món mới
          </button>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="font-medium">Chức năng này cho phép:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Tạo và chỉnh sửa thực đơn hàng ngày/tuần</li>
            <li>Quản lý danh sách món ăn</li>
            <li>Xem thông tin dinh dưỡng của từng món</li>
            <li>Đánh dấu các món có nguy cơ gây dị ứng</li>
          </ul>
        </div>
      </div>

      {/* Menu management options */}
      <div>
        <h3 className="text-lg font-medium mb-3">Quản lý món ăn</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium">Danh sách món ăn</h4>
            <p className="text-gray-500 text-sm">Quản lý tất cả món ăn trong hệ thống</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium">Lập kế hoạch thực đơn</h4>
            <p className="text-gray-500 text-sm">Lên lịch các món ăn theo ngày</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuTab;
