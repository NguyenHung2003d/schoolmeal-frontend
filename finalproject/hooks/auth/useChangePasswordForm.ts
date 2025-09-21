import { useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  changePasswordSchema,
  ChangePasswordFormData,
} from "@/schemas/authSchemas";

export const useChangePasswordForm = (
  options?: UseFormProps<ChangePasswordFormData>
) => {
  return useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onChange",
    ...options,
  });
};
