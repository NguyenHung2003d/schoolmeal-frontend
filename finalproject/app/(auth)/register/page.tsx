
import { GalleryVerticalEnd } from "lucide-react";
import RegisterForm from "@/app/(auth)/register/register-forrm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* Left Panel - Hero Section */}
        <div className="hidden lg:flex flex-col justify-center items-center p-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
        </div>

        {/* Right Panel - Form Section */}
        <div className="flex flex-col justify-center items-center p-8 lg:p-16">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage