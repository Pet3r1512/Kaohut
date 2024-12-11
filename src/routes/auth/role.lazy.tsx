import RoleCard, { RoleCardProps } from "@/components/Auth/Role/RoleCard";
import FullLogo from "@/components/Layout/Logos/FullLogo";
import { createLazyFileRoute } from "@tanstack/react-router";
import { GraduationCap, User } from "lucide-react";

const accountTypes: RoleCardProps[] = [
  {
    id: "teacher",
    title: "Teacher",
    color: "bg-red-500",
    bgColor: "bg-[#AB0018]",
    titleHoverBg: "lg:group-hover:bg-[#AB0018]",
    icon: <GraduationCap className="lg:size-10" />,
    href: "/auth/teacher",
  },
  {
    id: "student",
    title: "Student",
    color: "bg-yellow-500",
    bgColor: "bg-[#C97900]",
    titleHoverBg: "lg:group-hover:bg-[#C97900]",
    icon: <User className="lg:size-10" />,
    href: "/auth/student",
  },
];

export const Route = createLazyFileRoute("/auth/role")({
  component: Role,
});

function Role() {
  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center bg-gray-100">
      <FullLogo className="absolute md:top-10 top-6 md:left-10 left-6" />
      <div className="space-y-6">
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
          Choose your account type
        </h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
