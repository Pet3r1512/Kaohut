import { Player } from "./_index";

export default function Waiting({ players }: { players: Player[] }) {
  return (
    <div className="flex-1 flex flex-col gap-y-10 items-center justify-center">
      <div className="p-3 rounded-xl bg-red-400 w-fit">
        <p className="text-white text-2xl font-bold cursor-default">
          Waiting for players...
        </p>
      </div>
      {players.map((player: Player) => {
        return (
          <div
            key={player.id}
            className="cursor-pointer w-fit p-1.5 rounded-full bg-orange-500"
          >
            <p className="text-lg lg:text-xl text-black font-semibold">
              {player.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
