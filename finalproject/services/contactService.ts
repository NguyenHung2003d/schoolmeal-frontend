import { ContactFormData, ContactResponse } from "@/types/auth";

export const contactService = {
  submitContactForm: async (
    data: ContactFormData
  ): Promise<ContactResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      success: true,
      message: "Thank you for contacting us! We will get back to you soon.",
    };
  },
};
