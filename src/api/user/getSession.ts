import { QUERY_URL } from "../constant"

export async function getSession({ email }: { email: string }) {
    const response = await fetch(`${QUERY_URL}/auth.getSession`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email
        })
    })

    if (!response.ok) {
        const res = await response.json()
        throw new Error(res.error || "Unknown Error!")
    }

    const res = await response.json()
    return {
        session: res
    }
}