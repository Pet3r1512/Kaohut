import { LanguagesToggle } from "@/components/Layout/Header/LanguagesToggle";
import ThemeToggle from "@/components/ThemeToggle";
import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/dashboard/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();

  return (
    <DashboardLayout>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
        Settings
      </h1>
      <div className="flex items-center w-1/5 justify-between my-8">
        <p className="md:text-lg lg:text-xl font-semibold">
          {t("dashboard.settings.theme")}
        </p>
        <ThemeToggle />
      </div>
      <div className="flex items-center w-1/5 justify-between my-8">
        <p className="md:text-lg lg:text-xl font-semibold">
          {t("dashboard.settings.lang")}
        </p>
        <LanguagesToggle />
      </div>
    </DashboardLayout>
  );
}
