import { getAllQuizzes } from "@/api/quiz/getAllQuizzes";
import QuizCard, { Quiz } from "@/components/Game/Quiz/QuizCard";
import { Skeleton } from "@/components/ui/skeleton";
import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/dashboard/explore")({
  component: RouteComponent,
});

function RouteComponent() {
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
    <DashboardLayout>
      <section className="space-y-8 w-full">
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
    </DashboardLayout>
  );
}
