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
  const [recaptchaVerifier, setRecaptchaVerifier] =
    useState<RecaptchaVerifier | null>(null);
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [isPending, startTransition] = useTransition();
  const [resendCountdown, setResendCountdown] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);

  const router = useRouter();

  // Countdown resend
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  // Setup recaptcha - Fixed version
  useEffect(() => {
    if (!recaptchaVerifier) {
      const verifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: (response: any) => {
          console.log("reCAPTCHA solved:", response);
        },
      });

      verifier.render().then(() => {
        setRecaptchaVerifier(verifier);
        console.log("Recaptcha ready!");
      });
    }
  }, [recaptchaVerifier]);

  // Auto send OTP - Fixed version
  useEffect(() => {
    const isValidPhone =
      phoneNumber.startsWith("0") && phoneNumber.length === 10;

    if (isValidPhone && !isOtpSent && resendCountdown === 0) {
      // Wait for recaptcha to be ready
      const checkAndSend = async () => {
        if (recaptchaVerifier) {
          console.log("[AutoSend] reCAPTCHA ready, sending OTP...");
          await handleSendOTP();
        } else {
          console.log("[AutoSend] Waiting for reCAPTCHA...");
          // Wait a bit and try again
          setTimeout(checkAndSend, 500);
        }
      };

      // Small delay to ensure everything is ready
      setTimeout(checkAndSend, 300);
    }
  }, [phoneNumber, isOtpSent, resendCountdown, recaptchaVerifier]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setPhoneNumber(value);
    }
    if (value.length < 10) {
      setIsOtpSent(false);
      setConfirmationResult(null);
      setOtp("");
    }
  };

  // gửi OTP - Fixed version
  const handleSendOTP = async () => {
    console.log("[SendOTP] Triggered with phone:", phoneNumber);
    if (!phoneNumber.startsWith("0") || phoneNumber.length !== 10) {
      toast.error("Số điện thoại không hợp lệ");
      return;
    }

    if (!recaptchaVerifier) {
      console.error("[SendOTP] reCAPTCHA not ready");
      toast.error("reCAPTCHA chưa sẵn sàng, vui lòng đợi...");
      return;
    }

    try {
      console.log("[SendOTP] Calling signInWithPhoneNumber...");
      toast.loading("Đang gửi mã OTP...");

      const result = await signInWithPhoneNumber(
        auth,
        "+84" + phoneNumber.slice(1),
        recaptchaVerifier
      );

      console.log("[SendOTP] Success - ConfirmationResult:", result);
      setConfirmationResult(result);
      setIsOtpSent(true);
      toast.dismiss();
      toast.success("Đã gửi mã OTP, vui lòng kiểm tra tin nhắn!");
      setResendCountdown(60);
    } catch (err: any) {
      console.error("[SendOTP] Error:", err);
      toast.dismiss();
      setIsOtpSent(false);

      // Handle specific errors
      if (err.code === "auth/invalid-app-credential") {
        toast.error("Lỗi cấu hình Firebase");
      } else if (err.code === "auth/billing-not-enabled") {
        toast.error("Cần enable Blaze plan");
      } else if (err.message.includes("reCAPTCHA")) {
        toast.error("Lỗi reCAPTCHA, đang tải lại...");
        // Reset recaptcha
        setRecaptchaVerifier(null);
      } else {
        toast.error("Gửi OTP thất bại: " + err.message);
      }
    }
  };

  // xác thực OTP
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("[VerifyOTP] Triggered with code:", otp);
    if (!confirmationResult) {
      toast.error("Bạn chưa gửi mã OTP");
      console.warn("[VerifyOTP] confirmationResult is null");
      return;
    }

    startTransition(async () => {
      try {
        console.log("[VerifyOTP] Calling confirmationResult.confirm...");
        const result = await confirmationResult.confirm(otp);
        console.log("[VerifyOTP] Success. User:", result.user);
        toast.success("Xác thực thành công!");
        router.push("/login");
      } catch (err: any) {
        console.error("[VerifyOTP] Error verifying OTP:", err);
        toast.error("Mã OTP không đúng");
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
      {/* Main Content */}
      <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Xác Thực OTP</h1>
          <p className="text-white/70">
            Nhập số điện thoại để nhận mã xác thực
          </p>
        </div>

        {/* Phone Input Section */}
        <div className="mb-6">
          <label className="block text-white/90 text-sm font-medium mb-3">
            Số điện thoại
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-white/60 text-lg">🇻🇳</span>
            </div>
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="0901234567"
              className="w-full pl-14 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-lg backdrop-blur-sm"
              maxLength={10}
              required
            />
            {phoneNumber.length === 10 && (
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Status Messages */}
          <div className="mt-3 min-h-[20px]">
            {phoneNumber.length === 10 && isOtpSent && (
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Đã gửi mã OTP! Kiểm tra tin nhắn của bạn
              </div>
            )}
          </div>
        </div>

        {/* OTP Input Section */}
        {isOtpSent && (
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/90 text-sm font-medium mb-3">
                  Mã xác thực OTP
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                    placeholder="000000"
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-center text-2xl font-mono tracking-widest backdrop-blur-sm"
                    maxLength={6}
                    autoFocus
                    required
                  />
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                    {otp.length === 6 && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-2 bg-white/10 rounded-full h-1 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ease-out"
                    style={{ width: `${(otp.length / 6) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending || otp.length !== 6}
                className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform ${
                  isPending || otp.length !== 6
                    ? "bg-white/20 text-white/50 cursor-not-allowed scale-95"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl"
                }`}
              >
                {isPending ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Đang xác thực...
                  </div>
                ) : (
                  "Xác Thực OTP"
                )}
              </button>

              {/* Resend Button */}
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={resendCountdown > 0}
                  className={`text-sm font-medium transition-all duration-300 ${
                    resendCountdown > 0
                      ? "text-white/50 cursor-not-allowed"
                      : "text-cyan-400 hover:text-cyan-300 hover:underline"
                  }`}
                >
                  {resendCountdown > 0
                    ? `Gửi lại sau ${resendCountdown}s`
                    : "Gửi lại mã OTP"}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-white/70 text-sm">
            Đã nhớ mật khẩu?{" "}
            <a
              href="/login"
              className="text-cyan-400 hover:text-cyan-300 font-medium hover:underline transition-colors duration-300"
            >
              Đăng nhập ngay
            </a>
          </p>
        </div>

        {/* Hidden elements */}
        <div id="send-otp-button" className="hidden"></div>
        <div id="recaptcha-container" className="hidden"></div>
      </div>
    </div>
  );
}
