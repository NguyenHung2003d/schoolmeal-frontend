"use client";
import React from "react";

export default function UpdateProfile({ selectedChild }: any) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Cập nhật hồ sơ</h2>
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h3 className="font-semibold text-lg">Thông tin phụ huynh</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Họ và tên</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Nguyễn Văn A"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Số điện thoại
            </label>
            <input
              type="tel"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="0901234567"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="email@example.com"
            />
          </div>
        </div>
      </div>

      {selectedChild && (
        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <h3 className="font-semibold text-lg">
            Thông tin con: {selectedChild.name}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Avatar</label>
              <div className="flex items-center space-x-4">
                <div className="text-6xl">{selectedChild.avatar}</div>
                <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                  Thay đổi
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Các món ăn dị ứng
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedChild.allergies.map((allergy: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                  >
                    {allergy} <button className="ml-2 font-bold">×</button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Thêm món ăn dị ứng"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Sở thích món ăn
              </label>
              <textarea
                className="w-full border rounded-lg px-4 py-2"
                rows={3}
                placeholder="Ghi chú sở thích..."
              ></textarea>
            </div>
          </div>
        </div>
      )}

      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
        Lưu thay đổi
      </button>
    </div>
  );
}
