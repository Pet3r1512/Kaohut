export default function CalculateDays(date: Date) {
    const inputDate = new Date(date);
    const MILLISECONDS_A_DAY = 1000 * 60 * 60 * 24

    const today = new Date();

    const timeDifference = today.getTime() - inputDate.getTime();

    return Math.floor(timeDifference / MILLISECONDS_A_DAY);
}