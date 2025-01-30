import { GetQuiz } from "@/api/quiz/getQuiz";
import CategoryBadge from "@/components/Game/Multiplayer/Badges/CategoryBadge";
import LengthBadge from "@/components/Game/Multiplayer/Badges/LengthBadge";
import TimeBadge from "@/components/Game/Multiplayer/Badges/TimeBadge";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/play/multi/$quizId/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { quizId } = Route.useParams();

  const { isPending, data, error } = useQuery({
    queryKey: ["quiz", quizId],
    queryFn: () => GetQuiz(quizId),
    enabled: !!quizId,
  });

  if (isPending) {
    return <Skeleton className="size-4/5 rounded-2xl shadow-2xl" />;
  }

  if (error) {
    console.error(error.message);
  }

  return (
    <section className="p-5 flex flex-col h-screen w-screen bg-gradient-to-br from-[#d9a7c7] via-[#e1eec3] to-[#fffcdc] justify-center items-center text-white">
      <div className="flex flex-col justify-center md:size-4/5 rounded-2xl shadow-2xl bg-[#669bbc] p-5 lg:p-10 gap-y-5 lg:gap-y-10">
        <div className="space-y-5">
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold italic">
            Multiplayer Mode
          </p>
          <div className="flex gap-x-2.5">
            <CategoryBadge category={data?.quiz.result.data.quiz.category} />
            <TimeBadge time={data?.quiz.result.data.quiz.time} />
            <LengthBadge length={data?.quiz.result.data.quiz.length} />
          </div>
        </div>
        <p className="lg:text-xl font-semibold">
          {data?.quiz.result.data.quiz.description}
        </p>
        <div className="flex flex-col bg-white text-primary p-2 md:p-3 lg:p-3.5 rounded-xl">
          <div className="flex items-center justify-between">
            <p className="lg:text-3xl font-extrabold">
              {data?.quiz.result.data.quiz.title}
            </p>
            <Link
              to={`/play/multi/${quizId}/waiting`}
              className="lg:text-xl font-bold bg-secondary lg:px-3.5 px-2.5 py-1.5 lg:py-2 rounded-xl text-white lg:hover:bg-secondary/80 transition-all duration-150 ease-linear"
            >
              Create Room
            </Link>
          </div>
        </div>
        <p className="lg:text-2xl font-bold">
          Creator:{" "}
          <span className="font-semibold text-">
            {data?.quiz.result.data.quiz.creatorName}
          </span>
        </p>
      </div>
    </section>
  );
}
