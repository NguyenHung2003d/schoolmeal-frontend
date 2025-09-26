"use client";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: gọi API gửi mã xác nhận
    console.log("Phone:", phone, "Code:", code);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Quên mật khẩu</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Số điện thoại */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Số điện thoại
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Nhập số điện thoại"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Mã xác nhận */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mã xác nhận
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Nhập mã OTP"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Nút gửi */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Xác nhận
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Đã nhớ mật khẩu?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
}
