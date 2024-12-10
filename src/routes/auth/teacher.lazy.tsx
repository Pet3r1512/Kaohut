import { createLazyFileRoute } from "@tanstack/react-router";
import RoleCard, { RoleCardProps } from "@/components/Auth/Role/RoleCard";
import FullLogo from "@/components/Layout/Logos/FullLogo";
import { GraduationCap, User } from "lucide-react";

const accountTypes: RoleCardProps[] = [
  {
    id: "highschool",
    title: "High School",
    color: "bg-red-500",
    bgColor: "bg-[#AB0018]",
    titleHoverBg: "lg:group-hover:bg-[#AB0018]",
    icon: <GraduationCap className="lg:size-10" />,
    href: "/auth/teacher",
  },
  {
    id: "university",
    title: "University",
    color: "bg-yellow-500",
    bgColor: "bg-[#C97900]",
    titleHoverBg: "lg:group-hover:bg-[#C97900]",
    icon: <User className="lg:size-10" />,
    href: "",
  },
  {
    id: "business",
    title: "Business",
    color: "bg-yellow-500",
    bgColor: "bg-[#C97900]",
    titleHoverBg: "lg:group-hover:bg-[#C97900]",
    icon: <User className="lg:size-10" />,
    href: "",
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
