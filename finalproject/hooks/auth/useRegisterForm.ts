import { useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "@/schemas/authSchemas";

export const useRegisterForm = (options?: UseFormProps<RegisterFormData>) => {
  return useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      phone: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
    ...options,
  });
};
