import Lobby from "@/components/Game/Lobby/_index";
import useQuizGameSocket from "@/hooks/useSelectQuizAndCreateGame";
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

  return <Lobby gameCode={gameCode} players={players} />;
}
