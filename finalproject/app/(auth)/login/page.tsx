import Image from "next/image";
import LoginForm from "@/app/(auth)/login/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-5 pt-10">
      <div className="relative hidden lg:block lg:col-span-3 overflow-hidden h-full">
        <Image
          src="/anh_nen.jpg"
          alt="Background"
          fill
          className=" object-center"
        />
      </div>

      <div className="relative flex flex-col gap-4 p-6 md:p-10 bg-gradient-to-br from-slate-50 via-white to-blue-50 lg:col-span-2">
        <div className="relative z-10 flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/10 p-8">
              <LoginForm className="relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
