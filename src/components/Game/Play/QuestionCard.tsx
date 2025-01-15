import { Card } from "@/components/ui/card";
import { useState } from "react";
import TimerCircle from "./TimerCircle";

interface QuestionCardProps {
  question: {
    questionText: string;
    answers: { answerText: string; isCorrect: boolean }[];
  };
  onAnswer: (answerIndex: number) => void;
  answerState: string | null;
  questionOrder: {
    current: number;
    total: number;
  };
  duration: number;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuestionCard({
  question,
  onAnswer,
  questionOrder,
  duration,
  score,
  setScore,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (index: number, isCorrect: boolean) => {
    setSelectedAnswer(index);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      onAnswer(index);
    }, 3000);
  };

  const handleTimerComplete = () => {
    if (selectedAnswer === null) {
      const correctAnswerIndex = question.answers.findIndex(
        (answer) => answer.isCorrect,
      );
      setSelectedAnswer(correctAnswerIndex);

      setTimeout(() => {
        setSelectedAnswer(null);
        onAnswer(correctAnswerIndex);
      }, 3000);
    }
  };

  return (
    <Card className="size-full bg-transparent border-none flex flex-col items-center justify-center gap-y-8 relative">
      <div className="absolute top-0 left-0 bg-yellow-200 text-black font-bold rounded-full py-2 px-4">
        Question {questionOrder.current}/{questionOrder.total}
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-yellow-200 text-black font-bold rounded-full py-2 px-4">
        Score: {score}
      </div>

      <div className="absolute top-0 right-0">
        <TimerCircle duration={duration} onComplete={handleTimerComplete} />
      </div>

      <div className="h-1/2 flex flex-col items-center justify-center w-full">
        <p className="text-black font-bold text-xl text-center bg-yellow-200 rounded-xl p-5 w-full">
          {question.questionText}
        </p>
      </div>

      <div className="w-full h-1/2 grid grid-cols-2 grid-rows-2 gap-5 text-white font-semibold">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index, answer.isCorrect)}
            disabled={selectedAnswer !== null}
            className={`p-5 rounded-xl text-center w-full text-xl lg:text-3xl transition-all duration-500 break-words ${
              selectedAnswer !== null
                ? selectedAnswer === index
                  ? answer.isCorrect
                    ? "bg-green-500 scale-105"
                    : "bg-red-500 scale-95 opacity-75"
                  : answer.isCorrect
                    ? "bg-green-500 scale-105"
                    : "bg-red-500 scale-95 opacity-75"
                : [
                    "bg-red-500",
                    "bg-yellow-500",
                    "bg-blue-500",
                    "bg-green-500",
                  ][index % 4]
            }`}
          >
            {answer.answerText}
          </button>
        ))}
      </div>
    </Card>
  );
}
