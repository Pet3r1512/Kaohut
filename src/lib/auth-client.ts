import { SERVER_URL } from "@/api/constant";
import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: SERVER_URL,
  basePath: "/api/auth",
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
  advanced: {
    useSecureCookies: true,
  },
});
