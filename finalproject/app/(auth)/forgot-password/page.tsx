"use client";
import { auth } from "@/lib/firebaseConfig";
import { FormEvent, useEffect, useState, useTransition } from "react";
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  ConfirmationResult,
} from "firebase/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [recaptchaVerifier, setRecaptchaVerifier] =
    useState<RecaptchaVerifier | null>(null);
  const [isPending, startTransition] = useTransition();
  const [resendCountdown, setResendCountdown] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  useEffect(() => {
    if (!(window as any).recaptchaVerifier) {
      const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response: any) => {
          console.log("reCAPTCHA solved:", response);
        },
      });

      verifier.render().then(() => {
        console.log("reCAPTCHA ready!");
      });

      setRecaptchaVerifier(verifier);
      (window as any).recaptchaVerifier = verifier;
    }
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
    setIsOtpSent(false);
    setConfirmationResult(null);
    setOtp("");
  };
  //gửi otp
  const handleSendOTP = async () => {
    const appVerifier = (window as any).recaptchaVerifier;
    if (!appVerifier) {
      toast.error("reCAPTCHA chưa sẵn sàng, thử lại sau");
      return;
    }

    if (
      !phoneNumber ||
      phoneNumber.length !== 10 ||
      !phoneNumber.startsWith("0")
    ) {
      toast.error(
        "Số điện thoại không hợp lệ (phải có 10 chữ số, bắt đầu bằng 0)"
      );
      return;
    }

    try {
      toast.loading("Đang gửi mã OTP...");
      const formattedPhone = "+84" + phoneNumber.slice(1);
      const result = await signInWithPhoneNumber(
        auth,
        formattedPhone,
        appVerifier
      );

      setConfirmationResult(result);
      setIsOtpSent(true);
      toast.dismiss();
      toast.success("Đã gửi mã OTP, vui lòng kiểm tra tin nhắn!");
      setResendCountdown(60);
    } catch (err: any) {
      console.error("[SendOTP] Error:", err);
      toast.dismiss();
      setIsOtpSent(false);
      toast.error(err.message || "Không thể gửi OTP");
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!confirmationResult) {
      toast.error("Bạn chưa gửi mã OTP");
      return;
    }

    if (otp.length !== 6) {
      toast.error("Mã OTP phải có 6 chữ số");
      return;
    }

    startTransition(async () => {
      try {
        const result = await confirmationResult.confirm(otp);
        console.log("User:", result.user);
        toast.success("Xác thực thành công!");
        router.push("/login");
      } catch (err: any) {
        console.error("[VerifyOTP] Error:", err);
        toast.error("Mã OTP không hợp lệ");
      }
    });
  };

  const handleResendOTP = () => {
    if (resendCountdown === 0) {
      setIsOtpSent(false);
      setConfirmationResult(null);
      setOtp("");
      handleSendOTP();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4">
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Xác Thực OTP</h1>
          <p className="text-white/70">
            Nhập số điện thoại để nhận mã xác thực
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-white/90 text-sm font-medium mb-3">
            Số điện thoại
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            placeholder="0901234567"
            className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
            maxLength={10}
            required
          />
          {!isOtpSent && (
            <button
              onClick={handleSendOTP}
              className="w-full mt-3 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl hover:scale-105 transition"
            >
              Gửi mã OTP
            </button>
          )}
        </div>

        {isOtpSent && (
          <form onSubmit={handleSubmit} className="space-y-6">
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

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
}
