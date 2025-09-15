"use client";
import { User, Lock, EyeOff, Eye } from "lucide-react";
import {
  useRegisterForm,
  RegisterFormData,
} from "@/hooks/auth/useRegisterForm";
import { useRegisterMutation } from "@/hooks/auth/useRegisterMutation";
import { useId, useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const phoneId = useId();
  const passwordId = useId();
  const confirmPasswordId = useId();
  const form = useRegisterForm();
  const [showPwd, setShowPwd] = useState(false);
  const { register, handleSubmit, formState, reset } = form;

  const mutation = useRegisterMutation({
    onSuccess: (data) => {
      console.log("Register success:", data);
      reset();
    },
    onError: (error) => {
      console.error("Register error:", error.message);
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    const { confirmPassword, ...submitData } = data;
    mutation.mutate(submitData);
  };

  const isPending = mutation.isPending || (mutation as any).isLoading || false;
  const errors = formState.errors;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Phone */}
      <div className="relative w-full">
        <User
          className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none z-10  ${
            errors.phone
              ? "text-red-500"
              : "peer-focus:text-indigo-600"
          }`}
        />

        <input
          id={phoneId}
          type="text"
          {...register("phone")}
          placeholder=" "
          disabled={isPending}
          className={`peer block w-full pl-10 pr-3 py-3 border-2 rounded-xl bg-white focus:border-indigo-500 transition-all duration-200`}
        />

        <label
          htmlFor={phoneId}
          className="absolute left-10 text-gray-400 text-sm transition-all duration-200 
      top-1/2 -translate-y-1/2
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base 
      peer-focus:-top-0 peer-focus:text-xs peer-focus:text-indigo-600
      peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-600
      bg-white px-1"
        >
          Phone number
        </label>
      </div>

      {/* Password */}
      <div className="relative w-full">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none z-10 peer-focus:text-indigo-600" />
        <input
          id={passwordId}
          type="text"
          {...register("phone")}
          placeholder=" "
          disabled={isPending}
          className={`peer block w-full pl-10 pr-3 py-3 border-2 rounded-xl bg-white focus:border-indigo-500 transition-all duration-200`}
        />

        <label
          htmlFor={passwordId}
          className="absolute left-10 text-gray-400 text-sm transition-all duration-200 
      top-1/2 -translate-y-1/2
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base 
      peer-focus:-top-0 peer-focus:text-xs peer-focus:text-indigo-600
      peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-600
      bg-white px-1"
        >
          Password
        </label>
        <button
          type="button"
          onClick={() => setShowPwd((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          {showPwd ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Confirm Password */}
      <div className="relative w-full">
        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none z-10 peer-focus:text-indigo-600" />

        <input
          id={confirmPasswordId}
          type="text"
          {...register("phone")}
          placeholder=" "
          disabled={isPending}
          className={`peer block w-full pl-10 pr-3 py-3 border-2 rounded-xl bg-white focus:border-indigo-500 transition-all duration-200`}
        />

        <label
          htmlFor={confirmPasswordId}
          className="absolute left-10 text-gray-400 text-sm transition-all duration-200 
      top-1/2 -translate-y-1/2
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base 
      peer-focus:-top-0 peer-focus:text-xs peer-focus:text-indigo-600
      peer-not-placeholder-shown:-top-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-indigo-600
      bg-white px-1"
        >
          Confirm Password
        </label>
        <button
          type="button"
          onClick={() => setShowPwd((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          {showPwd ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className={`w-full py-4 px-4 text-white font-semibold rounded-xl transition-all duration-300 ${
          isPending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02]"
        }`}
      >
        {isPending ? "Creating account..." : "Create Account"}
      </button>
    </form>
  );
}
