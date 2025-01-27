import { Card } from "@/components/ui/card";
import CalculateDays from "@/utils/calculateDays";
import PerformanceDispaly from "@/utils/PerformanceDisplay";

export interface HistoryCardProps {
  id: string;
  userId: string;
  quizId: string;
  quizName: string;
  score: number;
  performance: string;
  playedAt: Date;
}

export default function HistoryCard({
  history,
}: {
  history: HistoryCardProps;
}) {
  const { quizName, score, playedAt, performance } = history;
  const played = CalculateDays(playedAt);

  const playedPattern: Record<number, string> = {
    0: "Today",
    1: "Yesterday",
  };
  let playedString = playedPattern[played] || `${played} days ago`;

  if (played > 30) {
    const months = Math.floor(played / 30);
    playedString = `${months} month${months > 1 ? "s" : ""} ago`;
  }

  return (
    <Card className="flex flex-col md:flex-row md:justify-between bg-white dark:bg-black shadow-2xl rounded-2xl p-5 lg:hover:scale-105 transition-all duration-150 ease-linear">
      <div className="flex flex-row md:flex-col justify-between gap-y-2.5">
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-secondary">
          {quizName}
        </p>
        <PerformanceDispaly perf={performance} />
      </div>
      <div>
        <p>
          🏆 <span className="text-lg font-semibold">Score</span>:{" "}
          <span className="text-green-500 text-xl font-bold">{score}</span>
        </p>
        <p>
          ⏰ <span className="text-lg font-semibold">Played</span>:{" "}
          <span className="text-[#f15bb5] font-bold text-xl">
            {played < 0 ? "Today" : playedString}
          </span>
        </p>
      </div>
    </Card>
  );
}
