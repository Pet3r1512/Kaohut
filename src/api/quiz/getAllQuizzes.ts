import { QUERY_URL } from "../constant";

export async function getAllQuizzes() {
    const response = await fetch(`${QUERY_URL}/quiz.getAllQuizzes`)

    if (!response.ok) {
        const res = await response.json()
        throw new Error(res.error || "Unknown Error!")
    }

    const res = await response.json()
    return {
        quizzes: res
    }
}