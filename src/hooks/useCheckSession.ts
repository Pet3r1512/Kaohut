/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useUserStore } from "@/stores/user";
import { useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export function useCheckSession() {
  const [fetching, setFetching] = useState<boolean>(false);
  // const { setUser } = useUserStore();
  const router = useRouter();
  const cookies = new Cookies(null, { path: "/" });

  useEffect(() => {
    const fetchSession = async () => {
      setFetching(true);
      try {
        const token = cookies.get("token");
        if (!token) {
          router.navigate({
            to: "/auth/accounts/signin",
          });
        }
        // store current user info to zustand store
        // if (result.data?.user) {
        //   const user = result.data?.user;
        //   setUser({
        //     name: user.name,
        //     email: user.email,
        //     role: user.role,
        //     workplace: user.workplace,
        //   });
        // }
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
