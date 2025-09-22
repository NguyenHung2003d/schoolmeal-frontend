import { useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/schemas/authSchemas";

export const useLoginForm = (options?: UseFormProps<LoginFormData>) => {
  return useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      phone: "",
      password: "",
    },
    mode: "onChange", 
    ...options,
  });
};
