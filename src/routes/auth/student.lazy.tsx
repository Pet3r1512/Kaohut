import RoleCard, { RoleCardProps } from "@/components/Auth/Role/RoleCard";
import FullLogo from "@/components/Layout/Logos/FullLogo";
import { createLazyFileRoute } from "@tanstack/react-router";
import { BookOpen, School } from "lucide-react";

const accountTypes: RoleCardProps[] = [
  {
    id: "schools",
    title: "Schools",
    color: "bg-[#f8ad9d]",
    bgColor: "bg-[#f08080]",
    titleHoverBg: "lg:group-hover:bg-[#f08080]",
    icon: <BookOpen className="lg:size-10" />,
    href: "/auth/accounts/signup",
  },
  {
    id: "university",
    title: "University",
    color: "bg-[#f8ad9d]",
    bgColor: "bg-[#f08080]",
    titleHoverBg: "lg:group-hover:bg-[#f08080]",
    icon: <School className="lg:size-10" />,
    href: "/auth/accounts/signup",
  },
];

export const Route = createLazyFileRoute("/auth/student")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center bg-gray-100">
      <FullLogo className="absolute md:top-10 top-6 md:left-10 left-6" />
      <div className="flex flex-col gap-y-5">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
          Choose your studyplace
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 w-full">
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
