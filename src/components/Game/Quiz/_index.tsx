import { getAllQuizzes } from "@/api/quiz/getAllQuizzes";
import { useQuery } from "@tanstack/react-query";
import QuizCard from "./QuizCard";
import { type Quiz } from "./QuizCard";
import { useState, useEffect } from "react";
import Features from "./Features/_index";
import SearchBar from "./Searchbar";
import { Skeleton } from "@/components/ui/skeleton";

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

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <section className="space-y-8 w-full">
      <SearchBar />
      <Features />
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
        Quizzes Collection
      </h1>
      <div className="flex flex-wrap items-center gap-5 w-full">
        {isLoading ? (
          <>
            <Skeleton className="md:w-1/2 w-full md:max-w-96 lg:w-96 h-48 rounded-2xl" />
            <Skeleton className="md:w-1/2 w-full md:max-w-96 lg:w-96 h-48 rounded-2xl" />
            <Skeleton className="md:w-1/2 w-full md:max-w-96 lg:w-96 h-48 rounded-2xl" />
          </>
        ) : (
          quizzes.map((quiz, index) => <QuizCard key={index} quiz={quiz} />)
        )}
      </div>
    </section>
  );
}
