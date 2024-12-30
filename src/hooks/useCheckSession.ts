/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { authClient } from "@/lib/auth-client";
import { useUserStore } from "@/stores/user";
import { useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createAuthClient } from "better-auth/react";
const { useSession } = createAuthClient();

export function useCheckSession() {
  const [fetching, setFetching] = useState<boolean>(false);
  const { setUser } = useUserStore();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
    const fetchSession = async () => {
      setFetching(true);
      try {
        const result = await authClient.getSession();
        console.log(result);
        if (!result.data?.session) {
          router.navigate({
            to: "/auth/accounts/signin",
          });
        }
        // store current user info to zustand store
        if (result.data?.user) {
          const user = result.data?.user;
          setUser({
            name: user.name,
            email: user.email,
            role: user.role,
            workplace: user.workplace,
          });
        }
      } catch (error: any) {
        console.error("Error fetching session", error);
      } finally {
        setFetching(false);
      }
    };
    fetchSession();
  }, []);

  return { fetching };
}
