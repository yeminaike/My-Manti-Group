import { useMutation } from "@tanstack/react-query";

// This reads from your .env file or your hosting platform env.
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export interface ContactData {
  full_name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  status: string;
  message: string;
}

export const postContact = async (
  data: ContactData
): Promise<ContactResponse> => {
  const response = await fetch(`${API_BASE_URL}/submit-form`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log("API_BASE_URL:", API_BASE_URL);

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Something went wrong");
  }

  return result;
};

export const usePostContact = () => {
  return useMutation<ContactResponse, Error, ContactData>({
    mutationFn: postContact,
  });
};