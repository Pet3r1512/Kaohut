import { Cast, SquareArrowOutUpRight } from "lucide-react";

export default function TeacherPlay() {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-x-5 w-full h-full">
      <div className="w-full h-1/2 flex items-center justify-center text-white gap-x-2.5 rounded-2xl bg-sky-500 lg:hover:scale-100 scale-95 duration-150 ease-linear transition-all">
        <Cast />
        <p className="text-2xl font-bold cursor-default">Start a Game</p>
      </div>
      <div className="w-full h-1/2 flex items-center justify-center text-white gap-x-2.5 rounded-2xl bg-pink-500 lg:hover:scale-100 scale-95 duration-150 ease-linear transition-all">
        <SquareArrowOutUpRight />
        <p className="text-2xl font-bold cursor-default">Join a Game</p>
      </div>
    </div>
  );
}
