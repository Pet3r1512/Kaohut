import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { createLazyFileRoute } from "@tanstack/react-router";
import { GraduationCap, User } from "lucide-react";

const accountTypes = [
  {
    id: "teacher",
    title: "Teacher",
    color: "bg-red-500",
    bgColor: "bg-[#AB0018]",
    titleHoverBg: "lg:group-hover:bg-[#AB0018]",
    icon: <GraduationCap className="lg:size-10" />,
  },
  {
    id: "student",
    title: "Student",
    color: "bg-yellow-500",
    bgColor: "bg-[#C97900]",
    titleHoverBg: "lg:group-hover:bg-[#C97900]",
    icon: <User className="lg:size-10" />,
  },
];

export const Route = createLazyFileRoute("/auth/role")({
  component: Role,
});

function Role() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="space-y-6">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
          Choose your account type
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {accountTypes.map(
            ({ id, title, color, bgColor, titleHoverBg, icon }) => (
              <Card
                key={id}
                className="cursor-pointer lg:hover:scale-105 transition-all duration-150 ease-linear group flex flex-row lg:flex-col"
              >
                <CardHeader
                  className={`w-full flex justify-center items-center ${color} lg:group-hover:p-0 p-4 rounded-t-lg lg:h-48 transition-all duration-150 ease-linear`}
                >
                  <div
                    className={cn(
                      "rounded-full lg:group-hover:rounded-none lg:group-hover:rounded-t-lg lg:group-hover:size-full lg:group-hover:p-10 transition-all duration-150 ease-linear lg:p-6 text-white flex items-center justify-center",
                      bgColor,
                    )}
                  >
                    {icon}
                  </div>
                </CardHeader>
                <CardContent
                  className={`text-center p-4 ${titleHoverBg} rounded-b-lg lg:group-hover:text-white transition-all duration-150 ease-linear`}
                >
                  <CardTitle>{title}</CardTitle>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
