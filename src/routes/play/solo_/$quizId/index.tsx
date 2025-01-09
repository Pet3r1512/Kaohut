/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { GetQuiz } from "@/api/quiz/getQuiz";
import LoadingScreen from "@/components/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import QuestionCard from "@/components/Game/Play/QuestionCard";

const socket = io("http://localhost:9999");

export const Route = createFileRoute("/play/solo_/$quizId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [finalScore, setFinalScore] = useState<number | null>(null);
  const { quizId } = Route.useParams();

  const { isPending, data, error } = useQuery({
    queryKey: ["quiz", quizId],
    queryFn: () => GetQuiz(quizId),
    enabled: !!quizId,
  });

  useEffect(() => {
    if (data) {
      const currentUserId = "z_U6sTT1JUdg5Ns7E7Ye9";
      startSinglePlayer(quizId, currentUserId);
    }
  }, [data]);

  const startSinglePlayer = (quizId: string, currentUserId: string) => {
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
        }
      },
    );
  };

  const answerQuestion = (answerIndex: number) => {
    socket.emit("answer_question", { answerIndex }, (response: any) => {
      if (response.error) {
        console.error("Error answering question:", response.error);
        return;
      }

      if (response.finalScore !== undefined) {
        // Quiz completed
        setFinalScore(response.finalScore);
        setCurrentQuestion(null); // Clear current question
      } else if (response.nextQuestion) {
        // Load next question
        setCurrentQuestion(response.nextQuestion);
      }
    });
  };

  if (isPending) {
    return <LoadingScreen />;
  }

  if (error) {
    return <p className="text-red-500">Error: {(error as Error).message}</p>;
  }

  if (!data) {
    return <p className="text-gray-500">No data found for this quiz.</p>;
  }

  if (finalScore !== null) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-300">
        <p className="text-black font-bold text-2xl">
          Quiz Finished! Your Final Score: {finalScore}
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <Carousel>
        <CarouselContent className="lg:w-[450px] lg:h-[750px] !rounded-2xl">
          {currentQuestion ? (
            <CarouselItem>
              <QuestionCard
                question={currentQuestion}
                onAnswer={answerQuestion}
              />
            </CarouselItem>
          ) : (
            <CarouselItem className="shadow-2xl p-5 bg-gradient-to-bl from-[#654ea3] to-[#eaafc8] flex flex-col items-center justify-center gap-y-14">
              <p className="text-white lg:text-4xl font-bold">
                {data.quiz.result.data.quiz.title}
              </p>
            </CarouselItem>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
