import { QUERY_URL } from "@/api/constant"
import Cookies from "universal-cookie";

export async function signOut(token: string) {
    const cookies = new Cookies(null, { path: "/" });

    const response = await fetch(`${QUERY_URL}/auth.signOut`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            token: token
        })
    })

    if (!response.ok) {
        const res = await response.json()
        if (res.error.message.includes("Record to delete does not exist.")) {
            cookies.remove("token");
            cookies.remove("userEmail");
            return window.location.href = "/auth/accounts/signin";
        }
        throw new Error(res.error || "Unknown Error")
    }

    return {
        signOut: true
    }
}