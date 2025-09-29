"use client";

import { Eye, Plus } from "lucide-react";

export default function InventoryTab() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold mb-4">Quản lý kho nguyên liệu</h2>
      <p className="text-gray-500 mb-4">
        Theo dõi tồn kho và quản lý nguyên liệu cho các bữa ăn.
      </p>
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Tình trạng kho</h3>
          <div className="flex space-x-2">
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              <Eye size={18} className="mr-1" />
              Kiểm kho
            </button>
            <button className="flex items-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              <Plus size={18} className="mr-1" />
              Nhập kho
            </button>
          </div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <p className="font-medium">Chức năng này cho phép:</p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Theo dõi số lượng nguyên liệu trong kho</li>
            <li>Nhận cảnh báo khi nguyên liệu sắp hết</li>
            <li>Quản lý nhập xuất kho</li>
            <li>Tính toán nhu cầu nguyên liệu dựa trên thực đơn</li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium mb-3">Danh mục nguyên liệu</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium">Thực phẩm tươi sống</h4>
            <p className="text-gray-500 text-sm">Rau củ, thịt, cá, trứng...</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium">Thực phẩm khô</h4>
            <p className="text-gray-500 text-sm">Gạo, mì, ngũ cốc, gia vị...</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-medium">Đồ uống và thực phẩm đóng hộp</h4>
            <p className="text-gray-500 text-sm">
              Sữa, nước trái cây, đồ hộp...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
