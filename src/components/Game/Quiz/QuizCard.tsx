export type Quiz = {
  id: string;
  title: string;
  description: string;
  creatorId: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function QuizCard({ quiz }: { quiz: Quiz }) {
  return (
    <div className="bg-white shadow-2xl rounded-2xl p-5 w-96 h-36 lg:hover:scale-105 transition-all duration-150 ease-linear">
      <p className="lg:text-xl font-bold lg:mb-2.5 truncate">{quiz.title}</p>
      <p>{quiz.description}</p>
    </div>
  );
}
