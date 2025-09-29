"use client";
import React, { useId, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginForm } from "@/hooks/auth/useLoginForm";
import { useLoginMutation } from "@/hooks/auth/useLoginMutation";
import toast from "react-hot-toast";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const form = useLoginForm();
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const loginMutation = useLoginMutation({
    onSuccess: (data) => {
      toast.success(`Xin chào ${data.user.name}! 🎉`);
      switch (data.user.role) {
        case "parent":
          router.push("/parent/dashboard");
          break;
        case "kitchenstaff":
          router.push("/kitchenstaff/dashboard");
          break;
        case "admin":
          router.push("/admin/dashboard");
          break;
        default:
          router.push("/");
          break;
      }
    },
    onError: () => {
      toast.error("❌ Sai số điện thoại hoặc mật khẩu");
      setTimeout(() => {
        submitButtonRef.current?.focus();
      }, 100);
    },
  });

  const phoneId = useId();
  const passwordId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = form.getValues();
    loginMutation.mutate(formData);
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-5 w-full max-w-md mx-auto p-5 bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 rounded-2xl shadow-lg border-2 border-white relative",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="text-4xl">🍱</div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
          Bữa trưa ngon! 🥗
        </h1>
        <p className="text-gray-600 text-sm max-w-xs">
          Đăng nhập để xem thực đơn hôm nay và đặt bữa trưa nhé! 🍽️
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
        {/* Phone */}
        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">
            🍎
          </div>
          <Input
            id={phoneId}
            type="tel"
            placeholder=" "
            required
            autoComplete="tel"
            {...form.register("phone")}
            className="peer h-12 lg:h-14 pl-10 pr-3 lg:pl-12 lg:pr-4 rounded-xl border-2 border-orange-200 focus:border-orange-400 bg-white text-sm lg:text-base shadow-sm"
          />
          <Label
            htmlFor={phoneId}
            className="absolute left-10 px-2 bg-white transition-all
    text-gray-500 cursor-text
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
    peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-orange-600
    peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-orange-600"
          >
            Số điện thoại
          </Label>
        </div>

        {/* Password */}
        <div className="w-full relative flex flex-col gap-1">
          <div className="flex justify-end">
            <Link
              href={"/forgot-password"}
              className="text-xs font-medium text-green-600 hover:text-green-800 underline-offset-2 hover:underline"
            >
              🔐 Quên mật khẩu?
            </Link>
          </div>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">
              🥕
            </div>
            <Input
              id={passwordId}
              type="password"
              placeholder=" "
              required
              autoComplete="current-password"
              {...form.register("password")}
              className="peer h-12 lg:h-14 pl-10 pr-3 lg:pl-12 lg:pr-4 rounded-xl border-2 border-orange-200 focus:border-orange-400 bg-white text-sm lg:text-base shadow-sm"
            />
            <Label
              htmlFor={passwordId}
              className="absolute left-10 px-2 bg-white transition-all
    text-gray-500 cursor-text
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
    peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-orange-600
    peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-orange-600"
            >
              Mật khẩu
            </Label>
          </div>
        </div>

        {/* Submit */}
        <Button
          ref={submitButtonRef}
          type="submit"
          disabled={loginMutation.isPending}
          className="h-12 w-full bg-gradient-to-r from-orange-400 via-yellow-500 to-green-500 hover:from-orange-500 hover:via-yellow-600 hover:to-green-600 text-white font-semibold text-sm rounded-xl shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loginMutation.isPending ? "🍳 Đang đăng nhập..." : "Đăng nhập"}
        </Button>

        <div className="relative flex items-center">
          <div className="flex-1 border-t border-orange-200"></div>
          <span className="mx-3 text-xs text-gray-500 bg-white px-2">
            🥪 Hoặc
          </span>
          <div className="flex-1 border-t border-orange-200"></div>
        </div>

        <Button
          type="button"
          variant="outline"
          className="h-11 w-full border-2 border-yellow-300 hover:border-yellow-400 bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-semibold text-sm rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>
            <span>Dùng GitHub</span>
          </div>
        </Button>
      </form>
    </div>
  );
}
