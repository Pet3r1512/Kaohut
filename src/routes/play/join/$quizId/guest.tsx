/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute } from "@tanstack/react-router";
import PlayerCard from "@/components/Game/Multiplayer/Guest/PlayerCard";
import { useEffect, useState } from "react";
import { useSocket } from "@/context/SocketContext";
import Answer from "@/components/Game/Multiplayer/Guest/Answers";
import { useQuery } from "@tanstack/react-query";
import { GetQuiz } from "@/api/quiz/getQuiz";

export const Route = createFileRoute("/play/join/$quizId/guest")({
  component: RouteComponent,
  validateSearch: (search) => ({
    gameCode: String(search.gameCode),
    playerName: String(search.playerName),
  }),
});

const MAX_SCORE_EACH_QUESTION = 1000;

function RouteComponent() {
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const socket = useSocket();
  const { playerName, gameCode } = Route.useSearch();
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [currentQuiz, setCurrentQuiz] = useState<any>(null);
  const { quizId } = Route.useParams();

  const { isPending, data } = useQuery({
    queryKey: ["quiz", quizId],
    queryFn: () => GetQuiz(quizId),
    enabled: !!quizId,
  });

  useEffect(() => {
    if (!isPending) {
      setCurrentQuiz(data?.quiz.result.data.quiz);
    }
  }, [isPending, data, currentQuiz]);

  useEffect(() => {
    console.log("Answer Index Updated:", answerIndex);
  }, [answerIndex]);

  const handleAnswerSelect = (index: number) => {
    console.log("User selected answer index:", index);

    if (answerIndex !== null) return; // Prevent multiple selections

    setAnswerIndex(index);

    if (currentQuestion && socket) {
      socket.emit(
        "answer_question_multiplayer",
        {
          gameCode,
          playerId: socket.id,
          answerIndex: index,
          timeLeft: timeLeft,
        },
        (response: any) => {
          if (response.error) {
            console.error("Error:", response.error);
          }
          console.log(response);
        },
      );
    }
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("game_started", ({ firstQuestion }) => {
      console.log("New Game Started, Resetting Selection...");
      setCurrentQuestion(firstQuestion);
      setAnswerIndex(null); // Reset selection when a new game starts
    });

    socket.on("answer_result", ({ correct, updatedScores }) => {
      const playerScore = updatedScores.find(
        (p: any) => p.id === socket.id,
      )?.score;

      if (playerScore !== undefined) {
        setScore(playerScore);
      }

      if (correct) {
        // Ensure currentQuiz is not null before accessing it
        setScore(
          (prevScore) =>
            prevScore +
            Math.round(MAX_SCORE_EACH_QUESTION * (timeLeft / currentQuiz.time)),
        );
      }

      setAnswerIndex(null); // Reset selection after answer result
      setTimeLeft(currentQuiz ? currentQuiz.time : 0); // Prevent null access error
    });

    socket.on("player_answered", ({ score }) => {
      setScore(score);
      console.log(currentQuestion);
    });

    socket.on("next_question", ({ nextQuestion }) => {
      console.log("Moving to next question:", nextQuestion); // Debug log to confirm event reception
      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setAnswerIndex(null); // Reset selected answer
        setTimeLeft(currentQuiz ? currentQuiz.time : 0); // Reset timer
        console.log("Next question set:", nextQuestion);
      }
    });

    return () => {
      socket.off("game_started");
      socket.off("answer_result");
      socket.off("player_answered");
      socket.off("next_question");
    };
  }, [currentQuestion, currentQuiz, gameCode, socket, timeLeft]);

  useEffect(() => {
    if (currentQuestion) {
      setTimeLeft(currentQuiz ? currentQuiz.time : 0);

      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [currentQuestion, currentQuiz]);

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
            key={currentQuestionIndex} // Add a key prop to force re-render
            id={currentQuestionIndex}
            score={score}
            setScore={setScore}
            answers={currentQuestion.answers}
            duration={currentQuiz.time}
            gameCode={gameCode}
            playerId={socket!.id!}
            onAnswerSelect={handleAnswerSelect}
            selectedAnswer={answerIndex} // Make sure selectedAnswer is passed correctly
          />
        )}
      </section>
    </section>
  );
}
