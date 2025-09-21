import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AuthResponse } from "@/types/auth";
import { authService } from "@/services/authService";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { RegisterFormData } from "@/schemas/authSchemas";

export const useRegisterMutation = (
  options?: Omit<
    UseMutationOptions<
      AuthResponse,
      AxiosError,
      Omit<RegisterFormData, "confirmPassword">
    >,
    "mutationFn"
  >
) => {
  const router = useRouter();

  return useMutation<
    AuthResponse,
    AxiosError,
    Omit<RegisterFormData, "confirmPassword">
  >({
    mutationFn: authService.register,
    onSuccess: (data) => {
      toast.success("🎉 Tạo tài khoản thành công!");
      router.push("/login");
      console.log(data);
    },
    onError: (error: AxiosError<any>) => {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Đăng ký thất bại, vui lòng thử lại!";
      toast.error(errorMessage);
    },
    ...options,
  });
};
