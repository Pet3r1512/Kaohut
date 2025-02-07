/* eslint-disable @typescript-eslint/no-explicit-any */
import CountUp from "@/components/ui/countup";
import GradientText from "@/components/ui/gradient-text";
import { useSocket } from "@/context/SocketContext";
import { useEffect, useRef, useState } from "react";
import TimerCircle from "../../Play/TimerCircle";

export default function Answer({
  answers,
  score,
  setScore,
  duration,
  gameCode,
  playerId,
}: {
  answers: any[];
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  duration: number;
  gameCode: string;
  playerId: string;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(duration);
  const socket = useSocket();

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

  useEffect(() => {
    if (!socket) {
      return;
    }
    socket.on("answer_result", ({ correctAnswerIndex, updatedScores }) => {
      setSelectedAnswer(correctAnswerIndex);
      setTimeout(() => {
        setSelectedAnswer(null);
      }, 3000);

      // Find updated score for this player
      const playerScore = updatedScores.find(
        (p: any) => p.id === playerId,
      )?.score;
      if (playerScore !== undefined) {
        setScore(playerScore);
      }
    });

    return () => {
      socket.off("answer_result");
    };
  }, [playerId, setScore, socket]);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);

    if (!socket) {
      return;
    }

    // Emit answer event to the server
    socket.emit("submit_answer", {
      gameCode,
      playerId,
      answerIndex: index,
      timeLeft,
    });
  };

  return (
    <section className="w-full h-full flex flex-col gap-y-10">
      <div className="bg-white px-5 py-3 rounded-lg text-black font w-1/5 mx-auto text-center font-bold">
        <TimerCircle
          duration={duration}
          onComplete={() => {}}
          setTimeLeft={setTimeLeft}
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
      <div className="grid grid-cols-2 grid-rows-2 w-full flex-1 gap-5">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`p-5 rounded-xl text-center w-full text-xl md:text-2xl lg:text-3xl transition-all duration-500 break-words text-white font-bold ${
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
