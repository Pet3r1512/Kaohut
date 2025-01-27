import { Card } from "@/components/ui/card";

export interface HistoryCardProps {
  id: string;
  userId: string;
  quizId: string;
  quizName: string;
  score: number;
  playedAt: Date;
}

export default function HistoryCard({
  history,
}: {
  history: HistoryCardProps;
}) {
  const { quizName, score, playedAt } = history;
  return (
    <Card className="flex justify-between bg-white dark:bg-black shadow-2xl rounded-2xl p-5 lg:hover:scale-105 transition-all duration-150 ease-linear">
      <p className="text-lg md:text-xl lg:text-2xl font-bold text-secondary">
        {quizName}
      </p>
      <div>
        <p>
          🏆 <span className="text-lg font-semibold">Score</span>:{" "}
          <span className="text-green-500 text-xl font-bold">{score}</span>
        </p>
        <p>
          ⏰ <span className="text-lg font-semibold">Time</span>:{" "}
          {new Date(playedAt).toLocaleDateString("en-GB")}
        </p>
      </div>
    </Card>
  );
}
