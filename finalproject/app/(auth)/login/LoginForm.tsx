"use client";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { useState, useId } from "react";
import { useLoginForm, LoginFormData } from "@/hooks/auth/useLoginForm";
import { useLoginMutation } from "@/hooks/auth/useLoginMutation";

export default function LoginForm() {
  const phoneId = useId();
  const passwordId = useId();
  const [showPwd, setShowPwd] = useState(false);
  const form = useLoginForm();
  const { register, handleSubmit, formState, reset } = form;

  const mutation = useLoginMutation({
    onSuccess: (data) => {
      console.log("Login success:", data);
      reset();
    },
    onError: (error) => {
      console.error("Login error:", error.message);
    },
  });

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  const isPending = mutation.isPending || (mutation as any).isLoading || false;
  const errors = formState.errors;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="relative w-full">
        <User
          className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none z-10 ${
            errors.phone
              ? "text-red-500"
              : "text-gray-400 peer-focus:text-indigo-600"
          }`}
        />

        <input
          id={phoneId}
          type="text"
          {...register("phone")}
          placeholder=" "
          disabled={isPending}
          className={`peer block w-full pl-10 pr-3 py-3 border-2 rounded-xl bg-white ${
            errors.phone
              ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-500/20"
          } focus:outline-none focus:ring-4 transition-all duration-200`}
        />

        <label
          htmlFor={phoneId}
          className="absolute left-10 text-gray-400 text-sm transition-all duration-200 
    top-1/2 -translate-y-1/2
    peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base 
    peer-focus:-top-0 peer-focus:text-xs peer-focus:text-indigo-600 bg-white px-1"
        >
          Phone number
        </label>
      </div>

      <div className="relative w-full">
        <Lock
          className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none z-10 ${
            errors.password
              ? "text-red-500"
              : "text-gray-400 peer-focus:text-indigo-600"
          }`}
        />

        <input
          id={passwordId}
          type={showPwd ? "text" : "password"}
          {...register("password")}
          placeholder=" "
          disabled={isPending}
          className={`peer block w-full pl-10 pr-12 py-3 border-2 rounded-xl bg-white ${
            errors.password
              ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
              : "border-gray-200 focus:border-indigo-500 focus:ring-indigo-500/20"
          } focus:outline-none focus:ring-4 transition-all duration-200`}
        />

        <label
          htmlFor={passwordId}
          className="absolute left-10 text-gray-400 text-sm transition-all duration-200 
            top-1/2 -translate-y-1/2
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base 
            peer-focus:-top-0 peer-focus:text-xs peer-focus:text-indigo-600 bg-white px-1"
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

        {errors.password && (
          <p className="mt-2 text-sm text-red-600">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={`w-full py-4 px-4 text-white font-semibold rounded-xl transition-all duration-300 ${
          isPending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] active:scale-[0.98]"
        }`}
      >
        {isPending ? "Signing in..." : "Log In"}
      </button>
    </form>
  );
}
