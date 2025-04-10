import { FormData } from "@/app/page";
import { useMutation } from "@tanstack/react-query";

// Simulated API call
const submitFormData = async (data: FormData): Promise<{ success: boolean; message: string }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  // Simulate successful API response (in a real app, this would be a fetch call)
  return {
    success: true,
    message: "Form submitted successfully!",
  };
};

export const useSubmitForm = () => {
  return useMutation({
    mutationFn: submitFormData,
    onSuccess: (data) => {
      console.log("API response:", data);
    },
  });
};