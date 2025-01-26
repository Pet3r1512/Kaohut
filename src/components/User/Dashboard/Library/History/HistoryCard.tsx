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
    <Card className="flex flex-col gap-y-5 bg-white dark:bg-black shadow-2xl rounded-2xl p-5 lg:hover:scale-105 transition-all duration-150 ease-linear">
      <p className="text-lg md:text-xl lg:text-2xl font-bold">{quizName}</p>
      <div>
        <p>🏆 Score: {score}</p>
        <p>⏰ Played on: {playedAt.toLocaleDateString()}</p>
      </div>
    </Card>
  );
}
