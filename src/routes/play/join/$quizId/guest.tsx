/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createFileRoute, Link } from "@tanstack/react-router";
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

function RouteComponent() {
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const socket = useSocket();
  const { playerName, gameCode } = Route.useSearch();
  const [answerIndex, setAnswerIndex] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [currentQuiz, setCurrentQuiz] = useState<any>(null);
  const [isGameEnd, setIsGameEnd] = useState<boolean | null>(null);
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
    if (answerIndex !== null) return;
    setAnswerIndex(index);

    if (currentQuestion && socket) {
      socket.emit(
        "answer_question_multiplayer",
        { gameCode, answerIndex: index },
        (response: any) => {
          if (response.error) {
            console.error("Error:", response.error);
          }
        },
      );
    }
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("player_answered", ({ playerId, score, isCorrect }) => {
      if (playerId === socket.id) {
        setScore(score);
      }
      if (isCorrect) {
        console.log("Correct!");
      } else {
        console.log("Incorrect.");
      }
    });

    socket.on("next_question", ({ nextQuestion }) => {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setAnswerIndex(null);
        setTimeLeft(currentQuiz?.time || 0);
      }, 2500);
    });

    socket.on("game_over", ({ players }) => {
      setIsGameEnd(true);
      console.log(players);
    });

    return () => {
      socket.off("player_answered");
      socket.off("next_question");
      socket.off("game_over");
    };
  }, [currentQuestion, currentQuiz, gameCode, socket]);
  useEffect(() => {
    if (!socket) return;

    socket.on("game_started", ({ firstQuestion }) => {
      console.log("New Game Started, Resetting Selection...");
      setCurrentQuestion(firstQuestion);
      setAnswerIndex(null); // Reset selection when a new game starts
    });

    socket.on("player_answered", ({ score }) => {
      setScore(score);
      console.log(currentQuestion);
    });

    socket.on("next_question", ({ nextQuestion }) => {
      setTimeout(() => {
        setCurrentQuestion(nextQuestion);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setAnswerIndex(null); // Reset selected answer
        setTimeLeft(currentQuiz ? currentQuiz.time : 0); // Reset timer
      }, 2500);
    });

    socket.on("game_over", ({ players }) => {
      setIsGameEnd(true);
      console.log(players);
    });

    return () => {
      socket.off("game_started");
      socket.off("answer_result");
      socket.off("player_answered");
      socket.off("next_question");
      socket.off("game_over");
    };
  }, [currentQuestion, currentQuiz, gameCode, socket, timeLeft]);

  useEffect(() => {
    if (currentQuestion) {
      setTimeLeft(currentQuiz ? currentQuiz.time : 0);

      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            if (answerIndex === null) {
              // Simulate incorrect answer if no answer was selected
              handleAnswerSelect(-1); // -1 indicates no valid answer
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [
    currentQuestion,
    currentQuiz,
    answerIndex,
    socket,
    gameCode,
    handleAnswerSelect,
  ]);

  if (isGameEnd && currentQuestionIndex > 0) {
    return (
      <div className="flex items-center justify-center h-[100dvh] bg-gray-300">
        <div className="w-full h-[100dvh] lg:w-[450px] lg:h-[750px] lg:rounded-2xl shadow-2xl p-5 bg-gradient-to-bl from-[#654ea3] to-[#eaafc8] flex flex-col items-center justify-center gap-y-5 text-white">
          <p className="text-4xl font-bold">Quiz Finished!</p>
          <p className="text-2xl font-bold">Your Final Score: {score}</p>
          <Link
            className="bg-blue-600 text-white font-bold px-5 py-2.5 rounded-2xl"
            to="/"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

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
