import { contactService } from "@/services/contactService";
import { ContactFormData, ContactResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useContactMutation = () => {
  return useMutation<ContactResponse, AxiosError, ContactFormData>({
    mutationFn: contactService.submitContactForm,
    onSuccess: (data) => {
      console.log("Contact form submitted successfully:", data);
    },
    onError: (error) => {
      console.error("Contact form submission failed:", error);
    },
  });
};
