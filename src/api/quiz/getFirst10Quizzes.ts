import { QUERY_URL } from "../constant";

export async function getFirst10Quizzes() {
    const response = await fetch(`${QUERY_URL}/quiz.getFirst10Quizzes`)

    if (!response.ok) {
        const res = await response.json()
        throw new Error(res.error || "Unknown Error!")
    }

    const res = await response.json()
    return {
        quizzes: res
    }
}