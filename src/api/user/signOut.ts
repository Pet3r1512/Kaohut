import { QUERY_URL } from "../constant";

export default async function signOut(token: string) {
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
        throw new Error(res.error || "Unknown Error")
    }

    return {
        signOut: true
    }
}