import LoadingScreen from "@/components/LoadingScreen";
import Pin from "./Pin";
import Settings from "./Settings";
import Waiting from "./Waiting";

export interface Player {
  id: string;
  name: string;
  score: number;
}

export default function Lobby({
  gameCode,
  players,
}: {
  gameCode: string;
  players: Player[];
}) {
  return (
    <section className="p-5 flex flex-col h-screen w-screen bg-gradient-to-br from-[#d9a7c7] via-[#e1eec3] to-[#fffcdc]">
      {gameCode === "" ? (
        <LoadingScreen />
      ) : (
        <>
          <Pin pin={gameCode} />
          <Waiting players={players} />
          <Settings players={players} />
        </>
      )}
    </section>
  );
}
