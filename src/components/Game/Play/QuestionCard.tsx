import { Card } from "@/components/ui/card";

interface QuestionCardProps {
  question: {
    questionText: string;
    answers: { answerText: string; isCorrect: boolean }[];
  };
  onAnswer: (answerIndex: number) => void; // Function to handle answering
}

export default function QuestionCard({
  question,
  onAnswer,
}: QuestionCardProps) {
  return (
    <Card className="size-full bg-transparent border-none flex flex-col items-center justify-center gap-y-8">
      <div className="h-1/2 flex items-center justify-center w-full">
        <p className="text-black font-bold text-xl text-center bg-yellow-200 rounded-xl p-5 w-full">
          {question.questionText}
        </p>
      </div>
      <div className="w-full h-1/2 grid grid-cols-2 grid-rows-2 gap-2.5 text-white font-semibold">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`p-5 rounded-xl text-center w-full text-lg ${
              ["bg-red-500", "bg-yellow-500", "bg-blue-500", "bg-green-500"][
                index % 4
              ]
            }`}
          >
            {answer.answerText}
          </button>
        ))}
      </div>
    </Card>
  );
}
