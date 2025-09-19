"use client";

import { createContext, useContext } from "react";
import { ACCESS_TOKEN } from "@/enum/enum";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/auth/useUser";
import { LoginResponse } from "@/types";

interface AuthContextType {
  user: LoginResponse | null;
  login: (token: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useUser();

  const login = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token);
  };

  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    toast.success("Đăng xuất thành công");
  };

  return (
    <AuthContext.Provider
      value={{ user: user || null, login, logout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
