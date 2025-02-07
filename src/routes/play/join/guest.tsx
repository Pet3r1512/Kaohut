/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from "@tanstack/react-router";
import PlayerCard from "@/components/Game/Multiplayer/Guest/PlayerCard";
import { useEffect, useState } from "react";
import { useSocket } from "@/context/SocketContext";
import Answer from "@/components/Game/Multiplayer/Guest/Answers";

export const Route = createFileRoute("/play/join/guest")({
  component: RouteComponent,
  validateSearch: (search) => {
    return {
      gameCode: String(search.gameCode),
      playerName: String(search.playerName),
    };
  },
});

function RouteComponent() {
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [score, setScore] = useState<number>(0);
  const socket = useSocket();
  const { playerName, gameCode } = Route.useSearch();

  useEffect(() => {
    if (!socket) {
      return;
    }

    socket.on("game_started", ({ firstQuestion }) => {
      setCurrentQuestion(firstQuestion);
    });

    socket.on("answer_result", ({ correctAnswerIndex, updatedScores }) => {
      // Get new question
      socket.emit(
        "answer_question",
        {
          gameCode: gameCode,
          playerId: socket.id,
          answerIndex: correctAnswerIndex,
        },
        ({ nextQuestion }: { nextQuestion: any }) => {
          if (nextQuestion) {
            setCurrentQuestion(nextQuestion);
          } else {
            setCurrentQuestion(null);
          }
        },
      );

      // Update score
      const playerScore = updatedScores.find(
        (p: any) => p.id === socket.id,
      )?.score;
      if (playerScore !== undefined) {
        setScore(playerScore);
      }
    });

    return () => {
      socket.off("game_started");
      socket.off("answer_result");
    };
  }, [gameCode, socket]);

  return (
    <section className="p-5 flex flex-col h-screen w-screen bg-gradient-to-br from-[#d9a7c7] via-[#e1eec3] to-[#fffcdc]">
      <section className="h-full flex items-center justify-center">
        {!currentQuestion ? (
          <div className="flex flex-col items-center justify-center gap-y-8">
            <PlayerCard playerName={playerName!} />
            <p className="font-semibold">
              You are in! See your name on host's screen?
            </p>
          </div>
        ) : (
          <Answer
            score={score}
            setScore={setScore}
            answers={currentQuestion.answers}
            duration={0}
            gameCode={gameCode}
            playerId={socket!.id!}
          />
        )}
      </section>
    </section>
  );
}
