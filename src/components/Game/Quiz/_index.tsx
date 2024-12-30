import { getAllQuizzes } from "@/api/quiz/getAllQuizzes";
import LoadingScreen from "@/components/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import QuizCard from "./QuizCard";
import { type Quiz } from "./QuizCard";
import { useState, useEffect } from "react";

export default function Quiz() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["quizzes"],
    queryFn: getAllQuizzes,
  });

  useEffect(() => {
    if (data && data.quizzes) {
      setQuizzes(data.quizzes.result.data.quizzes);
    }
  }, [data]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <section className="flex flex-wrap items-center lg:gap-5">
      {quizzes.map((quiz, index) => (
        <QuizCard key={index} quiz={quiz} />
      ))}
    </section>
  );
}
