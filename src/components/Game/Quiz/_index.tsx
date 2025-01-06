import { getAllQuizzes } from "@/api/quiz/getAllQuizzes";
import LoadingScreen from "@/components/LoadingScreen";
import { useQuery } from "@tanstack/react-query";
import QuizCard from "./QuizCard";
import { type Quiz } from "./QuizCard";
import { useState, useEffect } from "react";
import Features from "./Features/_index";
import SearchBar from "./Searchbar";

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
    return (
      <section className="w-full min-h-[calc(100vh-6.5rem)] flex items-center justify-center">
        <LoadingScreen className="" />
      </section>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <section className="space-y-8">
      <SearchBar />
      <Features />
      <h1 className="lg:text-3xl font-bold text-primary">Quizzes Collection</h1>
      <div className="flex flex-wrap items-center lg:gap-5">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} quiz={quiz} />
        ))}
      </div>
    </section>
  );
}
