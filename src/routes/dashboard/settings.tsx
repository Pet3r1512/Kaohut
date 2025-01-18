import ThemeToggle from "@/components/ThemeToggle";
import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <DashboardLayout>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">
        Settings
      </h1>
      <div className="flex items-center w-1/5 justify-between my-8">
        <p className="md:text-lg lg:text-xl font-semibold">Theme Mode</p>
        <ThemeToggle />
      </div>
    </DashboardLayout>
  );
}
