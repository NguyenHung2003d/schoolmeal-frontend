import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginFormData } from "./useLoginForm";
import { LoginResponse } from "@/types";
import { authService } from "@/services/authService";
import { AxiosError } from "axios";

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<LoginResponse, AxiosError, LoginFormData>({
    mutationFn: (data) => authService.login(data),
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.token);
      queryClient.setQueryData(["user"], data.user);
    },
  });
};
