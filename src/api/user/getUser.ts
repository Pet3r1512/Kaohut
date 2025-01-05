import { QUERY_URL } from "../constant";

export async function getUser(userId: string) {
    const response = await fetch(`${QUERY_URL}/user.getUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId: userId })
    })

    if (!response.ok) {
        const res = await response.json()
        throw new Error(res.error || "Unknown Error!")
    }

    const res = await response.json()
    return {
        user: res.result.data
    }
}