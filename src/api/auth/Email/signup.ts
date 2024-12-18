import { SERVER_URL } from "@/api/constant";

export interface SignupRequest {
  firstname: string;
  lastname: string;
  email: string;
  role: string;
  workplace: string;
  password: string;
}

export interface SignupResponse {
  success: boolean;
  message: string;
}

export async function signUp(data: SignupRequest): Promise<SignupResponse> {
  const response = await fetch(`${SERVER_URL}/trpc/auth.signUp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: `${data.firstname} ${data.lastname}`,
      role: data.role,
      workplace: data.workplace,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.error.code === -32603) {
      throw new Error("User already exists");
    }
    throw new Error(errorData.message || "Unknown error occurred");
  }

  return response.json();
}
