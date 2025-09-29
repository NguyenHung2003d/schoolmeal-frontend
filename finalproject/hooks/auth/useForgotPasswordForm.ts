import { useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  ForgotPasswordFormData,
} from "@/lib/definitions";

export const useForgotPasswordForm = (
  options?: UseFormProps<ForgotPasswordFormData>
) => {
  return useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      phone: "",
    },
    mode: "onChange",
    ...options,
  });
};
