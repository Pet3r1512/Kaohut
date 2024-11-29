import { cn } from "@/lib/utils";

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
      rights: ["Create Quizzes", "Host a Game"],
    },
    {
      role: "teacher",
      rights: ["Join game"],
    },
  ];

  return (
    <div className={cn(className)}>
      {role === "teacher"
        ? info[0].rights.map((right, index) => {
            return <p key={index}>{right}</p>;
          })
        : info[1].rights.map((right, index) => {
            return <p key={index}>{right}</p>;
          })}
    </div>
  );
}
