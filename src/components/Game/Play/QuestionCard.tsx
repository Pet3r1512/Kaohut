import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";
import TimerCircle from "./TimerCircle";
import CountUp from "@/components/ui/countup";
import GradientText from "@/components/ui/gradient-text";

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
  isMultiplayerMode: boolean;
}

const MAX_SCORE_EACH_QUESTION = 1000;

export default function QuestionCard({
  question,
  onAnswer,
  questionOrder,
  duration,
  score,
  setScore,
  isMultiplayerMode,
}: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  const previousScoreRef = useRef(score);

  useEffect(() => {
    previousScoreRef.current = score;
  }, [score]);

  const handleAnswer = (index: number, isCorrect: boolean) => {
    setSelectedAnswer(index);

    if (isCorrect) {
      setScore(
        (prevScore) =>
          prevScore +
          Math.round(MAX_SCORE_EACH_QUESTION * (timeLeft / duration)),
      );
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
      <div
        className={`w-full flex items-center ${isMultiplayerMode ? "justify-center gap-x-10" : "justify-between"}`}
      >
        <div className="bg-yellow-200 text-black font-bold rounded-full py-2 px-4">
          Question: {questionOrder.current}/{questionOrder.total}
        </div>

        {!isMultiplayerMode && (
          <div className="flex items-center gap-x-2.5 bg-white text-black font-bold rounded-full py-2 px-4 !min-w-20">
            <p>Score: </p>
            <GradientText>
              <CountUp
                from={previousScoreRef.current}
                to={score}
                direction="up"
                duration={1}
                className="count-up-text font-bold text-xl"
              />
            </GradientText>
          </div>
        )}

        <TimerCircle
          duration={duration}
          onComplete={handleTimerComplete}
          setTimeLeft={setTimeLeft}
        />
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
            onClick={
              !isMultiplayerMode
                ? () => handleAnswer(index, answer.isCorrect)
                : () => {}
            }
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
