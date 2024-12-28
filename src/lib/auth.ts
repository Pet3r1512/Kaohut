import { betterAuth } from "better-auth";

export const auth = betterAuth({
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
      },
      workplace: {
        type: "string",
        required: true,
      },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
});
