import { SERVER_URL } from "@/api/constant";

export interface SigninRequest {
  email: string;
  password: string;
}

export interface SigninResponse {
  success: boolean;
  message: string;
}

export async function signIn(data: SigninRequest): Promise<SigninResponse> {
  const response = await fetch(`${SERVER_URL}/trpc/auth.signIn`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Unknown error occured");
  }

  return response.json();
}
