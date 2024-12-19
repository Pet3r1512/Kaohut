import { SERVER_URL } from "@/api/constant";
import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";
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
  ],
  advanced: {
    useSecureCookies: true,
  },
  cookieOptions: {
    secure: process.env.NODE_ENV === "production", // Secure in production
    httpOnly: true, // Prevents JavaScript access
    sameSite: "lax", // Adjust for cross-origin needs
    path: "/", // Ensure it works across the app
    domain:
      process.env.NODE_ENV === "production" ? ".yourdomain.com" : undefined,
  },
});
