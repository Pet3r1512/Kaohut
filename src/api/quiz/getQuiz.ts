import { QUERY_URL } from "../constant";

export async function GetQuiz(quizId: string) {
    const response = await fetch(`${QUERY_URL}/quiz.getQuiz`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ quizId: quizId })
    })

    if (!response.ok) {
        const res = await response.json()
        throw new Error(res.error || "Unknown Error!")
    }

    const res = await response.json()
    return {
        quiz: res
    }
}