import { createFileRoute } from "@tanstack/react-router";
import Lobby from "@/components/Game/Lobby/_index";
import { useRoomPlayers } from "@/hooks/useRoomPLayers";

export const Route = createFileRoute("/play/join/guest")({
  component: RouteComponent,
  validateSearch: (search) => {
    return {
      gameCode: String(search.gameCode),
      playerName: String(search.playerName),
    };
  },
});

function RouteComponent() {
  const { gameCode, playerName } = Route.useSearch();
  const { players } = useRoomPlayers(gameCode, playerName);

  return (
    <Lobby gameCode={gameCode} players={players} playerName={playerName} />
  );
}
