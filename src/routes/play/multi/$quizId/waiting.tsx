import { GetQuiz } from "@/api/quiz/getQuiz";
import Lobby from "@/components/Game/Lobby/_index";
import LoadingScreen from "@/components/LoadingScreen";
import useQuizGameSocket from "@/hooks/useSelectQuizAndCreateGame";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/play/multi/$quizId/waiting")({
  component: RouteComponent,
  validateSearch: (search) => {
    return {
      hostname: String(search.hostname),
    };
  },
});

function RouteComponent() {
  const { quizId } = Route.useParams();
  const { hostname } = Route.useSearch();
  const { gameCode, players } = useQuizGameSocket(quizId, hostname);

  const { isPending, data, error } = useQuery({
    queryKey: ["quiz", quizId],
    queryFn: () => GetQuiz(quizId),
    enabled: !!quizId,
  });

  if (isPending) {
    return (
      <section className="w-full h-[100dvh] flex items-center justify-center">
        <LoadingScreen />
      </section>
    );
  }

  if (error) {
    console.error(error.message);
  }

  if (!data) {
    return <p className="text-gray-500">No data found for this quiz.</p>;
  }

  return <Lobby quiz={data} gameCode={gameCode} players={players} />;
}
