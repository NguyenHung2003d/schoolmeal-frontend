import { axiosInstance } from "../lib/axiosInstance";
import { LoginFormData } from "../hooks/auth/useLoginForm";
import { RegisterFormData } from "../hooks/auth/useRegisterForm";
import { LoginResponse, RegisterResponse } from "../types/index";

export const authService = {
  login: async (data: LoginFormData): Promise<LoginResponse> => {
    const res = await axiosInstance.post<LoginResponse>("/login", data);
    return res.data;
  },
  register: async (data: RegisterFormData): Promise<RegisterResponse> => {
    const res = await axiosInstance.post<RegisterResponse>("/register", data);
    return res.data;
  },
};
