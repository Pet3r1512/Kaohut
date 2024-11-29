import { cn } from "@/lib/utils";
import { CircleCheckBig } from "lucide-react";

export default function Rights({
  role,
  className,
}: {
  role: string;
  className?: string;
}) {
  const info = [
    {
      role: "teacher",
      rights: [
        "Create, Publish and Save Quizzes",
        "Host a Game",
        "Access to other Quizzes",
      ],
    },
    {
      role: "student",
      rights: ["Join game"],
    },
  ];

  return (
    <div className={cn("flex flex-col gap-y-8", className)}>
      <p className="lg:text-4xl font-bold">
        What can you do as a{" "}
        <span>{role === "teacher" ? "Teacher" : "Student"}</span>
      </p>
      <ul className="flex flex-col gap-y-1.5 text-xl font-semidol">
        {role === "teacher"
          ? info[0].rights.map((right, index) => {
              return (
                <p className="flex items-center gap-x-1" key={index}>
                  <CircleCheckBig
                    size={18}
                    className="text-green-600 mt-0.5"
                    strokeWidth={3}
                  />
                  {right}
                </p>
              );
            })
          : info[1].rights.map((right, index) => {
              return (
                <p className="flex items-center gap-x-1" key={index}>
                  <CircleCheckBig
                    size={18}
                    className="text-green-600 mt-0.5"
                    strokeWidth={3}
                  />
                  {right}
                </p>
              );
            })}
      </ul>
    </div>
  );
}
