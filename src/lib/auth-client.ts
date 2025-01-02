import { SERVER_URL } from "@/api/constant";
import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";

export const { useSession, signIn, signOut, signUp, getSession } =
  createAuthClient({
    baseURL: SERVER_URL,
    plugins: [
      inferAdditionalFields({
        user: {
          role: {
            type: "string",
            required: true,
          },
          workplace: {
            type: "string",
            required: true,
          },
        },
      }),
    ],
    emailAndPassword: {
      emable: true,
    },
  });
