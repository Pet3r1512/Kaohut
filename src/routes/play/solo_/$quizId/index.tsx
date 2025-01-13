/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetQuiz } from "@/api/quiz/getQuiz";
import LoadingScreen from "@/components/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { io } from "socket.io-client";
import { useState } from "react";
import QuestionCard from "@/components/Game/Play/QuestionCard";
import { LoaderCircle, Play } from "lucide-react";
import { SOCKET_URL } from "@/lib/socket-client";

const socket = io(SOCKET_URL);

export const Route = createFileRoute("/play/solo_/$quizId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [questionFetching, setQuestionFetching] = useState<boolean>(false);
  const [answerState, setAnswerState] = useState<
    "correct" | "incorrect" | "pending" | null
  >(null);
  const { quizId } = Route.useParams();

  const { isPending, data, error } = useQuery({
    queryKey: ["quiz", quizId],
    queryFn: () => GetQuiz(quizId),
    enabled: !!quizId,
  });

  const startSinglePlayer = (quizId: string, currentUserId: string) => {
    setQuestionFetching(true);
    socket.emit(
      "start_single_player",
      { quizId, currentUserId },
      (response: any) => {
        if (response.error) {
          console.error("Error starting quiz:", response.error);
          return;
        }

        if (response.question) {
          setCurrentQuestion(response.question);
          setQuestionFetching(false);
        }
      },
    );
  };

  const answerQuestion = (answerIndex: number) => {
    setAnswerState("pending");

    socket.emit("answer_question", { answerIndex }, (response: any) => {
      if (response.error) {
        console.error("Error answering question:", response.error);
        setAnswerState(null); // Reset on error
        return;
      }

      const isCorrect = response.correct;
      setAnswerState(isCorrect ? "correct" : "incorrect");

      setQuestionFetching(true);
      setTimeout(() => {
        if (response.finalScore !== undefined) {
          setFinalScore(response.finalScore);
        } else if (response.nextQuestion) {
          setCurrentQuestion(response.nextQuestion);
        }
        setQuestionFetching(false);
        setAnswerState(null);
      }, 2000);
    });
  };

  if (isPending) {
    return (
      <section className="w-full h-[100dvh] flex items-center justify-center">
        <LoadingScreen />
      </section>
    );
  }

  if (error) {
    return <p className="text-red-500">Error: {(error as Error).message}</p>;
  }

  if (!data) {
    return <p className="text-gray-500">No data found for this quiz.</p>;
  }

  if (finalScore !== null) {
    return (
      <div className="flex items-center justify-center h-[100dvh] bg-gray-300">
        <div className="w-full h-[100dvh] lg:w-[450px] lg:h-[750px] lg:rounded-2xl shadow-2xl p-5 bg-gradient-to-bl from-[#654ea3] to-[#eaafc8] flex flex-col items-center justify-center gap-y-5 text-white">
          <p className="text-4xl font-bold">Quiz Finished!</p>
          <p className="text-2xl font-bold">Your Final Score: {finalScore}</p>
          <Link
            className="bg-blue-600 text-white font-bold px-5 py-2.5 rounded-2xl"
            to="/dashboard/play"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-[100dvh] bg-gray-300">
      <div className="w-full h-[100dvh] lg:w-[450px] lg:h-[750px] lg:rounded-2xl shadow-2xl p-5 bg-gradient-to-bl from-[#654ea3] to-[#eaafc8] flex flex-col items-center justify-center gap-y-14">
        {!isGameStarted ? (
          <>
            <p className="text-white text-3xl lg:text-4xl font-bold">
              {data.quiz.result.data.quiz.title}
            </p>
            <button
              onClick={() => {
                startSinglePlayer(quizId, "z_U6sTT1JUdg5Ns7E7Ye9");
                setIsGameStarted(true);
              }}
              className=" text-white font-bold bg-green-600 px-5 py-2 rounded-lg"
            >
              {questionFetching ? (
                <LoaderCircle className="animate-spin mx-auto" />
              ) : (
                <p className="flex items-center gap-x-1.5">
                  Start Now <Play />
                </p>
              )}
            </button>
          </>
        ) : questionFetching ? (
          <LoadingScreen />
        ) : (
          <QuestionCard
            question={currentQuestion}
            onAnswer={answerQuestion}
            answerState={answerState}
          />
        )}
      </div>
    </div>
  );
}
