import { useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordSchema,
  ResetPasswordFormData,
} from "@/schemas/authSchemas";

export const useResetPasswordForm = (
  options?: UseFormProps<ResetPasswordFormData>
) => {
  return useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      code: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
    ...options,
  });
};
