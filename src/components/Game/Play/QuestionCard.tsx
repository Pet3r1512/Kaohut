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
}

export default function QuestionCard({
  question,
  onAnswer,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);

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
      <div className="absolute top-0 right-0">
        <TimerCircle duration={20} onComplete={handleTimerComplete} />
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
            onClick={() => handleAnswer(index)}
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
