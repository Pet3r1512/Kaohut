/* eslint-disable @typescript-eslint/no-explicit-any */
import CountUp from "@/components/ui/countup";
import GradientText from "@/components/ui/gradient-text";
import { useEffect, useRef, useState } from "react";
import TimerCircle from "../../Play/TimerCircle";

interface AnswerProps {
  id: number;
  answers: any[];
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  duration: number;
  gameCode: string;
  playerId: string;
  onAnswerSelect: (index: number) => void;
  selectedAnswer: number | null;
}

export default function Answer({
  id,
  answers,
  score,
  duration,
  onAnswerSelect,
  selectedAnswer,
}: AnswerProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const previousScoreRef = useRef(score);

  useEffect(() => {
    previousScoreRef.current = score;
  }, [score]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerClick = (index: number) => {
    if (selectedAnswer === null && timeLeft > 0) {
      onAnswerSelect(index);
    }
  };

  return (
    <section className="w-full h-full flex flex-col gap-y-10">
      {/* Timer & Score */}
      <div className="px-5 py-3 rounded-lg text-black font w-1/5 mx-auto text-center font-bold flex items-center gap-x-10">
        <TimerCircle
          key={id}
          duration={duration}
          onComplete={() => {}}
          setTimeLeft={setTimeLeft}
          handleClickMultiplayer={handleAnswerClick}
        />
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

      {/* Answer Buttons */}
      <div className="grid grid-cols-2 grid-rows-2 w-full flex-1 gap-5">
        {answers.map((answer, index) => (
          <button
            key={answer.id}
            onClick={() => handleAnswerClick(index)}
            disabled={timeLeft === 0 || selectedAnswer !== null}
            className={`p-5 rounded-xl text-center w-full text-xl lg:text-3xl transition-all duration-500 break-words text-white font-bold ${
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
    </section>
  );
}
