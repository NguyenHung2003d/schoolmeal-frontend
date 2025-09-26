"use client";
import { FormEvent, useState, useTransition, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  // countdown resend OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  // Gửi OTP qua BE
  const handleSendOTP = async () => {
    if (!phoneNumber || phoneNumber.length !== 10 || !phoneNumber.startsWith("0")) {
      toast.error("Số điện thoại không hợp lệ");
      return;
    }

    try {
      toast.loading("Đang gửi mã OTP...");
      await axios.post("https://localhost:5001/api/auth/send-otp", {
        phone: phoneNumber,
      });
      toast.dismiss();
      toast.success("Đã gửi OTP, vui lòng kiểm tra tin nhắn!");
      setIsOtpSent(true);
      setResendCountdown(60);
    } catch (err: any) {
      toast.dismiss();
      toast.error(err.response?.data || "Lỗi khi gửi OTP");
    }
  };

  // Xác thực OTP
  const handleVerifyOTP = async (e: FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) {
      toast.error("Mã OTP phải có 6 chữ số");
      return;
    }

    startTransition(async () => {
      try {
        const res = await axios.post("https://localhost:5001/api/auth/verify-otp", {
          phone: phoneNumber,
          otp: otp,
        });

        const resetToken = res.data?.resetToken; // BE trả về token để reset pass
        toast.success("Xác thực thành công!");

        // TODO: chuyển sang trang đổi mật khẩu
        router.push(`/reset-password?token=${resetToken}`);
      } catch (err: any) {
        console.error("[VerifyOTP] Error:", err);
        toast.error(err.response?.data || "OTP không hợp lệ");
      }
    });
  };

  const handleResendOTP = () => {
    if (resendCountdown === 0) {
      setOtp("");
      setIsOtpSent(false);
      handleSendOTP();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Xác Thực OTP</h1>
          <p className="text-white/70">Nhập số điện thoại để nhận mã xác thực</p>
        </div>

        {/* Nhập số điện thoại */}
        {!isOtpSent && (
          <div className="mb-6">
            <label className="block text-white/90 text-sm font-medium mb-3">
              Số điện thoại
            </label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
              placeholder="0901234567"
              className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
              maxLength={10}
              required
            />
            <button
              onClick={handleSendOTP}
              className="w-full mt-3 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl hover:scale-105 transition"
            >
              Gửi mã OTP
            </button>
          </div>
        )}

        {/* Nhập OTP */}
        {isOtpSent && (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              placeholder="000000"
              className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white text-center text-2xl"
              maxLength={6}
              autoFocus
              required
            />
            <button
              type="submit"
              disabled={isPending || otp.length !== 6}
              className="w-full py-4 rounded-2xl font-semibold text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition"
            >
              {isPending ? "Đang xác thực..." : "Xác Thực OTP"}
            </button>
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={resendCountdown > 0}
              className="text-sm text-cyan-400 hover:underline"
            >
              {resendCountdown > 0
                ? `Gửi lại sau ${resendCountdown}s`
                : "Gửi lại mã OTP"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
