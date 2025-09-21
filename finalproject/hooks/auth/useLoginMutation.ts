import {
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from "@tanstack/react-query";
import { AuthResponse, User } from "@/types/auth";
import { authService } from "@/services/authService";
import { AxiosError } from "axios";
import { USER_QUERY_KEY } from "./useAuth";
import { LoginFormData } from "@/schemas/authSchemas";

export const useLoginMutation = (
  options?: Omit<
    UseMutationOptions<AuthResponse, AxiosError, LoginFormData>,
    "mutationFn"
  >
) => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, AxiosError, LoginFormData>({
    mutationFn: authService.login,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.token);

      queryClient.setQueryData<User>(USER_QUERY_KEY, data.user);

      queryClient.invalidateQueries({ queryKey: USER_QUERY_KEY });
    },
    onError: (error) => {
      queryClient.removeQueries({ queryKey: USER_QUERY_KEY });
      localStorage.removeItem("accessToken");
      console.log(error);
    },
    ...options,
  });
};
