import { createLazyFileRoute } from "@tanstack/react-router";
import RoleCard, { RoleCardProps } from "@/components/Auth/Role/RoleCard";
import { BookOpen, BriefcaseBusiness, School } from "lucide-react";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import { useTranslation } from "react-i18next";

const accountTypes: RoleCardProps[] = [
  {
    id: "schools",
    title: "Schools",
    color: "bg-[#669bbc]",
    bgColor: "bg-[#003049]",
    titleHoverBg: "lg:group-hover:bg-[#003049]",
    icon: <BookOpen className="lg:size-10" />,
    href: "/auth/accounts/signup",
  },
  {
    id: "university",
    title: "University",
    color: "bg-[#669bbc]",
    bgColor: "bg-[#003049]",
    titleHoverBg: "lg:group-hover:bg-[#003049]",
    icon: <School className="lg:size-10" />,
    href: "/auth/accounts/signup",
  },
  {
    id: "business",
    title: "Business",
    color: "bg-[#669bbc]",
    bgColor: "bg-[#003049]",
    titleHoverBg: "lg:group-hover:bg-[#003049]",
    icon: <BriefcaseBusiness className="lg:size-10" />,
    href: "/auth/accounts/signup",
  },
];

export const Route = createLazyFileRoute("/auth/teacher")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  return (
    <AuthLayout>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
        {t("auth.workplace.title")}
      </h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 w-full">
        {accountTypes.map(
          ({ id, title, color, bgColor, titleHoverBg, icon, href }) => (
            <RoleCard
              key={id}
              props={{ id, title, color, bgColor, titleHoverBg, icon, href }}
            />
          ),
        )}
      </div>
    </AuthLayout>
  );
}
