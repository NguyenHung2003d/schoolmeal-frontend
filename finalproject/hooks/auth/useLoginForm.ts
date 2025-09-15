import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z
  .object({
    phone: z
      .string()
      .min(9, "Phone must be at least 9 digits")
      .regex(/^[0-9]+$/, "Phone must only contain numbers"),
    password: z.string().min(6, "Password must be at least 6 characters long")
    })

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