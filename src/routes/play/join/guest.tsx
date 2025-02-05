import { createFileRoute } from "@tanstack/react-router";
import PlayerCard from "@/components/Game/Multiplayer/Guest/PlayerCard";

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
  const { playerName } = Route.useSearch();

  return (
    <section className="p-5 flex flex-col h-screen w-screen bg-gradient-to-br from-[#d9a7c7] via-[#e1eec3] to-[#fffcdc]">
      <section className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-y-8">
          <PlayerCard playerName={playerName!} />
          <p className="font-semibold">
            You are in! See your name on host's screen?
          </p>
        </div>
      </section>
    </section>
  );
}
