import { Link } from "@tanstack/react-router";

export type Quiz = {
  id: string;
  title: string;
  category: string;
  description: string;
  creatorId: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <div className="bg-white dark:bg-[#212529] dark:text-white flex flex-col justify-between gap-y-5 rounded-2xl p-3.5 md:w-1/2 w-full md:max-w-96 lg:w-96 h-48 lg:hover:scale-105 transition-all duration-150 ease-linear">
      <div className="flex items-center justify-between">
        <p className="lg:text-xl font-bold lg:mb-2.5 truncate">{quiz.title}</p>
        <p className="text-black dark:text-white text-sm">{quiz.category}</p>
      </div>
      <p className="lg:h-[calc(2*2.25rem)] h-[calc(2*3.25rem)] line-clamp-2">
        {quiz.description}
      </p>
      <div className="flex items-center ml-auto gap-x-2.5">
        <Link
          to={`/play/multi/${quiz.id}`}
          className="bg-blue-500 px-2.5 py-1 rounded-lg text-white font-semibold w-fit"
        >
          Host Game
        </Link>
        <Link
          to={`/play/solo/${quiz.id}`}
          className="bg-green-500 px-2.5 py-1 rounded-lg text-white font-semibold w-fit"
        >
          Play Now
        </Link>
      </div>
    </div>
  );
}
