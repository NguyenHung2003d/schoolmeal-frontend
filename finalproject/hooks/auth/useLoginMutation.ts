import { useMutation } from "@tanstack/react-query";
import { LoginFormData } from "./useLoginForm";

type LoginResponse = {
  token: string;
  user: {
    id: string;
    phone: string;
    name?: string;
  };
};

async function loginApi(data: LoginFormData): Promise<LoginResponse> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData?.message || "Login failed");
  }

  return res.json();
}

export const useLoginMutation = (
  options?: Parameters<typeof useMutation<LoginResponse, Error, LoginFormData>>[0]
) => {
  return useMutation<LoginResponse, Error, LoginFormData>({
    mutationFn: loginApi,
    ...options,
  });
};
