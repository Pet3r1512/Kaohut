import Lobby from "@/components/Game/Lobby";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/play/lobby")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main>
      <Lobby />
    </main>
  );
}
