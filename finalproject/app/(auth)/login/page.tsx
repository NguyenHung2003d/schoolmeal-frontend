import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "@/app/(auth)/login/login-form";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden lg:block overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90 z-10"></div>

        <div className="relative z-30 h-full flex flex-col items-center justify-center p-12 text-center text-white">
          <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 rotate-12 animate-float"></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-blue-500/20 rounded-full animate-float animation-delay-500"></div>
          <div className="absolute bottom-32 left-16 w-12 h-12 bg-purple-500/20 rounded-lg rotate-45 animate-float animation-delay-1000"></div>
        </div>

        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
        </div>
      </div>
      <div className="relative flex flex-col gap-4 p-6 md:p-10 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl -translate-x-36 -translate-y-36 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl translate-x-24 translate-y-24 animate-pulse animation-delay-1000"></div>
        <div className="relative z-10 flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/10 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/3 via-purple-600/3 to-pink-600/3 pointer-events-none"></div>

              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>

              <LoginForm className="relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(1deg); }
  50% { transform: translateY(-20px) rotate(0deg); }
  75% { transform: translateY(-10px) rotate(-1deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}
`;
