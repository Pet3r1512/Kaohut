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
    <Card>
      <p className="text-black font-bold text-xl text-center bg-yellow-200 rounded-xl p-5">
        {question.questionText}
      </p>
      <div className="grid grid-cols-2 grid-rows-2 gap-2.5 text-white font-semibold">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`p-5 rounded-xl text-center ${
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
