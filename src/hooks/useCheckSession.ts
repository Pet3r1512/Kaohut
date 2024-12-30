import { authClient } from "@/lib/auth-client";
import { useUserStore } from "@/stores/user";
import { useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export function useCheckSession() {
  const [fetching, setFetching] = useState<boolean>(false);
  const { setUser } = useUserStore();
  const router = useRouter();

  const { isPending, data } = authClient.useSession();

  useEffect(() => {
    setFetching(true);

    if (!isPending && !data?.user) {
      console.log(data?.session);
      // router.navigate({
      //     to: "/auth/accounts/signin",
      // });
    }

    if (data?.user) {
      const user = data.user;
      setUser({
        name: user.name,
        email: user.email,
        role: user.role,
        workplace: user.workplace,
      });
    }

    setFetching(false);
  }, [isPending, data, router, setUser]);

  return { fetching, data };
}
