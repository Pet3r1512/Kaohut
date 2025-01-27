export default function CalculatePerformance(score: number, totalScore: number) {
    const ratio = score / totalScore

    if (ratio >= 0.95) {
        return "S+"
    }

    else if (ratio >= 0.9) {
        return "S"
    }

    else if (ratio >= 0.85) {
        return "A+"
    }

    else if (ratio >= 0.8) {
        return "A"
    }

    else if (ratio >= 0.7) {
        return "B+"
    }

    else if (ratio >= 0.6) {
        return "B"
    }

    else return "C"
}