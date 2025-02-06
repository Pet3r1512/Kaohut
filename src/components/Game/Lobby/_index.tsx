/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingScreen from "@/components/LoadingScreen";
import Pin from "./Pin";
import Settings from "./Settings";
import Waiting from "./Waiting";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@radix-ui/react-tooltip";
import { useSocket } from "@/context/SocketContext";
import { useState } from "react";
import QuestionCard from "../Play/QuestionCard";

export interface Player {
  id: string;
  name: string;
  score: number;
}

export default function Lobby({
  gameCode,
  players,
  quiz,
}: {
  gameCode: string;
  players: Player[];
  quiz: any;
}) {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(1);
  const [answerState, setAnswerState] = useState<
    "correct" | "incorrect" | "pending" | null
  >(null);
  const [score, setScore] = useState<number>(0);
  const socket = useSocket();

  const handleStartGame = () => {
    if (!socket) {
      return;
    }

    socket.emit(
      "start_game",
      { gameCode },
      (response: { success: boolean; firstQuestion: any; error: any }) => {
        if (response.error) {
          console.log(response.error);
          return;
        }
        setIsGameStarted(true);
        setCurrentQuestion(response.firstQuestion);
        console.log(response.firstQuestion);
      },
    );
  };

  const answerQuestion = (answerIndex: number) => {
    if (!socket) {
      return;
    }

    socket.emit(
      "answer_question",
      { gameCode, answerIndex },
      (response: { isCorrect: boolean; nextQuestion: any; error: any }) => {
        if (response.error) {
          console.log(response.error);
          return;
        }
        setCurrentQuestion(response.nextQuestion);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnswerState("correct");
      },
    );
  };

  return (
    <section className="p-5 flex flex-col h-screen w-screen bg-gradient-to-br from-[#d9a7c7] via-[#e1eec3] to-[#fffcdc]">
      {gameCode === "" ? (
        <div className="flex flex-col justify-center h-full items-center gap-y-2.5">
          <LoadingScreen className="h-fit" />
          <p className="lg:text-xl font-semibold">Initializing Game Room</p>
        </div>
      ) : (
        <>
          <div className="w-fit flex flex-col items-center justify-center mx-auto gap-y-5">
            <Pin pin={gameCode} />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    disabled={players.length < 2 ? true : false}
                    className={`text-white font-bold py-3 px-5 rounded-2xl ${players.length < 2 ? "cursor-not-allowed bg-gray-500" : "bg-green-500"}`}
                    onClick={handleStartGame}
                  >
                    Start Game
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="bg-gray-300 px-1.5 py-1 rounded-lg">
                    {players.length < 2
                      ? "Need 2 players to start the game"
                      : ""}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          {!isGameStarted ? (
            <Waiting players={players} />
          ) : (
            <QuestionCard
              question={currentQuestion}
              onAnswer={answerQuestion}
              answerState={answerState}
              questionOrder={{
                current: currentQuestionIndex,
                total: quiz.quiz.result.data.quiz.length,
              }}
              duration={quiz.quiz.result.data.quiz.time}
              score={score}
              setScore={setScore}
            />
          )}
          <Settings players={players} />
        </>
      )}
    </section>
  );
}
