import { QUERY_URL } from "../constant";

export interface History {
    userId: string,
    quizName: string,
    quizId: string,
    score: number
}

export async function createHistory(history: History) {
    const response = await fetch(`${QUERY_URL}/history.createHistory`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(history)
        }
    )

    if (!response.ok) {
        const res = await response.json()
        throw new Error(res.error || "Cannot create history")
    }

    const res = await response.json()
    return {
        data: res.data.result
    }
}