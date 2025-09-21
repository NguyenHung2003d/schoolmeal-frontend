"use client";
import { useId, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRegisterForm } from "@/hooks/auth/useRegisterForm";
import { useRegisterMutation } from "@/hooks/auth/useRegisterMutation";
import { RegisterFormData } from "@/schemas/authSchemas";

const RegisterForm = () => {
  const phoneId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit } = useRegisterForm();
  const registerMutation = useRegisterMutation();

  const onSubmit = (data: RegisterFormData) => {
    const { confirmPassword, ...payload } = data;
    registerMutation.mutate(payload);
  };

  return (
    <div className="w-full max-w-md mx-auto pt-2">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">🍽️</div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent mb-2">
          Tạo tài khoản EduMeal
        </h2>
        <p className="text-gray-600 text-sm">
          Đăng ký để đặt bữa trưa ngon cho con yêu! 🥗
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 rounded-2xl shadow-lg border-2 border-white p-6">
          <div className="space-y-4">
            <div className="group relative">
              <Input
                type="tel"
                id={phoneId}
                disabled={registerMutation.isPending}
                placeholder=" "
                {...register("phone")}
                className="peer h-12 lg:h-16 pl-10 pr-3 lg:pl-12 lg:pr-4 rounded-xl border-2 border-orange-200 focus:border-orange-400 bg-white text-sm lg:text-base shadow-sm"
              />
              <Label
                htmlFor={phoneId}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 px-2 transition-all
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400
            peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-orange-600 
            peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-orange-600 
            bg-white rounded-md cursor-text"
              >
                Số điện thoại phụ huynh
              </Label>
            </div>

            <div className="group relative">
              <Input
                type={showPassword ? "text" : "password"}
                disabled={registerMutation.isPending}
                id={passwordId}
                placeholder=" "
                {...register("password")}
                className="peer h-12 lg:h-16 pl-10 pr-3 lg:pl-12 lg:pr-4 rounded-xl border-2 border-orange-200 focus:border-orange-400 bg-white text-sm lg:text-base shadow-sm"
              />

              <Label
                htmlFor={passwordId}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 px-2 transition-all
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400
            peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-orange-600 
            peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-orange-600 
            bg-white rounded-md cursor-text"
              >
                Mật khẩu
              </Label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 hover:text-green-800"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="group relative">
              <Input
                id={confirmPasswordId}
                type={showConfirmPassword ? "text" : "password"}
                placeholder=" "
                disabled={registerMutation.isPending}
                {...register("confirmPassword")}
                className="peer h-12 lg:h-16 pl-10 pr-3 lg:pl-12 lg:pr-4 rounded-xl border-2 border-orange-200 focus:border-orange-400 bg-white text-sm lg:text-base shadow-sm"
              />

              <Label
                htmlFor={confirmPasswordId}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 px-2 transition-all
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400
            peer-focus:top-0 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-orange-600 
            peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-orange-600 
            bg-white rounded-md cursor-text"
              >
                Nhập lại mật khẩu
              </Label>
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-800"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            <button
              type="submit"
              disabled={registerMutation.isPending}
              className="w-full py-3 lg:py-3 px-6 lg:px-8 rounded-xl font-bold 
             text-base lg:text-lg text-white 
             bg-gradient-to-r from-orange-400 via-yellow-500 to-green-500 
             hover:from-orange-500 hover:via-yellow-600 hover:to-green-600 
             shadow-md hover:shadow-lg transition-all"
            >
              {registerMutation.isPending
                ? "⏳ Đang tạo..."
                : "🎉 Tạo tài khoản"}
            </button>
          </div>
        </div>
      </form>

      <div className="text-center mt-4 text-sm text-gray-600">
        Đã có tài khoản?{" "}
        <a href="/login" className="font-bold text-orange-600 hover:underline">
          Đăng nhập ngay
        </a>
      </div>
    </div>
  );
};

export default RegisterForm;
