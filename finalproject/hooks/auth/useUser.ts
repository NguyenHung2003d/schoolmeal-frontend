import { axiosInstance } from "@/lib/axiosInstance";
import { LoginResponse } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  return useQuery<LoginResponse["user"]>({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosInstance.get<LoginResponse["user"]>("/me");
      return res.data;
    },
  });
};
