import { createLazyFileRoute } from "@tanstack/react-router";
import RoleCard, { RoleCardProps } from "@/components/Auth/Role/RoleCard";
import FullLogo from "@/components/Layout/Logos/FullLogo";
import { BookOpen } from "lucide-react";

const accountTypes: RoleCardProps[] = [
  {
    id: "schools",
    title: "Schools",
    color: "bg-[#669bbc]",
    bgColor: "bg-[#003049]",
    titleHoverBg: "lg:group-hover:bg-[#003049]",
    icon: <BookOpen className="lg:size-10" />,
    href: "/auth/teacher",
  },
  {
    id: "university",
    title: "University",
    color: "bg-[#669bbc]",
    bgColor: "bg-[#003049]",
    titleHoverBg: "lg:group-hover:bg-[#003049]",
    icon: <BookOpen className="lg:size-10" />,
    href: "/auth/teacher",
  },
  {
    id: "business",
    title: "Business",
    color: "bg-[#669bbc]",
    bgColor: "bg-[#003049]",
    titleHoverBg: "lg:group-hover:bg-[#003049]",
    icon: <BookOpen className="lg:size-10" />,
    href: "/auth/teacher",
  },
];

export const Route = createLazyFileRoute("/auth/teacher")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center bg-gray-100">
      <FullLogo className="absolute md:top-10 top-6 md:left-10 left-6" />
      <div className="flex flex-col gap-y-5">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
          Choose your workplace
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 w-full">
          {accountTypes.map(
            ({ id, title, color, bgColor, titleHoverBg, icon, href }) => (
              <RoleCard
                props={{ id, title, color, bgColor, titleHoverBg, icon, href }}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
