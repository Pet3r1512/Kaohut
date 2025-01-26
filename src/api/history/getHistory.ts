import { QUERY_URL } from "../constant";

export async function getHistory(userId: string) {
    const response = await fetch(`${QUERY_URL}/history.getHistory`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId })
    })

    if (!response.ok) {
        const res = await response.json()
        throw new Error(res.error || `Failed to fetch history: ${response.status} ${response.statusText}`)
    }

    const res = await response.json()
    return {
        history: res.result.data.histories
    }
}