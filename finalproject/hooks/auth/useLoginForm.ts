import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  phone: z
    .string()
    .min(9, "Phone must be at least 9 digits")
    .max(12, "Phone must be at most 12 digits")
    .regex(/^[0-9]+$/, "Phone must only contain numbers"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const useLoginForm = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return {
    ...form,
    schema: loginSchema,
  };
};
