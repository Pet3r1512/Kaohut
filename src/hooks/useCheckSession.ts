/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { authClient } from "@/lib/auth-client";
import { useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function useCheckSession() {
    const [fetching, setFetching] = useState<boolean>(false)
    const router = useRouter()

    useEffect(() => {
        const fetchSession = async () => {
            setFetching(true)
            try {
                const result = await authClient.getSession();
                if (!result.data?.session) {
                    router.navigate({
                        to: "/auth/accounts/signin"
                    })
                }
            } catch (error: any) {
                console.error("Error fetching session", error);
            } finally {
                setFetching(false);
            }
        };
        fetchSession();
    }, []);

    return { fetching }
}