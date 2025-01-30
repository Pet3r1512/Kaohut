import Lobby from "@/components/Game/Lobby/_index";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/play/multi/$quizId/waiting")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Lobby />;
}
