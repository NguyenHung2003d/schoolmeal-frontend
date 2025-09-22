import { z } from "zod";

const phoneValidation = z
  .string()
  .min(9, "Số điện thoại phải có ít nhất 9 chữ số")
  .max(12, "Số điện thoại không được quá 12 chữ số")
  .regex(/^[0-9]+$/, "Số điện thoại chỉ được chứa số");

const passwordValidation = z
  .string()
  .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
  .regex(/[A-Z]/, "Mật khẩu phải chứa ít nhất một chữ hoa")
  .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất một chữ số");

  export const loginSchema = z.object({
  phone: phoneValidation,
  password: passwordValidation,
});

export const registerSchema = z
  .object({
    phone: phoneValidation,
    password: passwordValidation,
    confirmPassword: z
      .string()
      .min(6, "Xác nhận mật khẩu phải có ít nhất 6 ký tự"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  phone: phoneValidation,
});

export const resetPasswordSchema = z
  .object({
    code: z
      .string()
      .min(6, "Mã xác thực phải có 6 chữ số")
      .max(6, "Mã xác thực phải có 6 chữ số")
      .regex(/^[0-9]+$/, "Mã xác thực chỉ được chứa số"),
    password: passwordValidation,
    confirmPassword: z
      .string()
      .min(6, "Xác nhận mật khẩu phải có ít nhất 6 ký tự"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  });

export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, "Mật khẩu hiện tại không được để trống"),
    newPassword: passwordValidation,
    confirmPassword: z
      .string()
      .min(6, "Xác nhận mật khẩu phải có ít nhất 6 ký tự"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"],
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "Mật khẩu mới phải khác mật khẩu hiện tại",
    path: ["newPassword"],
  });

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;