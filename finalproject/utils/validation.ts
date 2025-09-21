import { z } from "zod";

export const createPhoneValidation = (options?: {
  minLength?: number;
  maxLength?: number;
  required?: boolean;
}) => {
  const { minLength = 9, maxLength = 12, required = true } = options || {};

  let validation = z.string();

  if (required) {
    validation = validation.min(1, "Số điện thoại không được để trống");
  } else {
    validation = validation.optional();
  }

  return validation
    .min(minLength, `Số điện thoại phải có ít nhất ${minLength} chữ số`)
    .max(maxLength, `Số điện thoại không được quá ${maxLength} chữ số`)
    .regex(/^[0-9]+$/, "Số điện thoại chỉ được chứa số");
};

export const createPasswordValidation = (options?: {
  minLength?: number;
  requireUppercase?: boolean;
  requireNumber?: boolean;
  requireSpecialChar?: boolean;
}) => {
  const {
    minLength = 6,
    requireUppercase = true,
    requireNumber = true,
    requireSpecialChar = false,
  } = options || {};

  let validation = z
    .string()
    .min(minLength, `Mật khẩu phải có ít nhất ${minLength} ký tự`);

  if (requireUppercase) {
    validation = validation.regex(
      /[A-Z]/,
      "Mật khẩu phải chứa ít nhất một chữ hoa"
    );
  }

  if (requireNumber) {
    validation = validation.regex(
      /[0-9]/,
      "Mật khẩu phải chứa ít nhất một chữ số"
    );
  }

  if (requireSpecialChar) {
    validation = validation.regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Mật khẩu phải chứa ít nhất một ký tự đặc biệt"
    );
  }

  return validation;
};
