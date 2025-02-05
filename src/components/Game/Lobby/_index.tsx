import LoadingScreen from "@/components/LoadingScreen";
import Pin from "./Pin";
import Settings from "./Settings";
import PlayerCard from "../Multiplayer/Guest/PlayerCard";
import Waiting from "./Waiting";

export interface Player {
  id: string;
  name: string;
  score: number;
}

export default function Lobby({
  gameCode,
  players,
  playerName,
}: {
  gameCode: string;
  players: Player[];
  playerName?: string;
}) {
  return (
    <section className="p-5 flex flex-col h-screen w-screen bg-gradient-to-br from-[#d9a7c7] via-[#e1eec3] to-[#fffcdc]">
      {gameCode === "" ? (
        <LoadingScreen />
      ) : (
        <>
          {!playerName && <Pin pin={gameCode} />}
          <section className="h-full flex items-center justify-center">
            {playerName ? (
              <div className="flex flex-col items-center justify-center gap-y-8">
                <PlayerCard playerName={playerName!} />
                <p className="font-semibold">
                  You are in! See your name on host's screen?
                </p>
              </div>
            ) : (
              <Waiting players={players} />
            )}
          </section>
          {!playerName && <Settings players={players} />}
        </>
      )}
    </section>
  );
}
