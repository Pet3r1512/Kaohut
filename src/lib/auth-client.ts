import { SERVER_URL } from "@/api/constant";
import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { customSessionClient } from "better-auth/client/plugins";
import { auth } from "./auth";

export const authClient = createAuthClient({
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
    customSessionClient<typeof auth>(),
  ],
  advanced: {
    useSecureCookies: true,
  },
});
