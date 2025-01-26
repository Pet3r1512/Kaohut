import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import History from "@/components/User/Dashboard/Library/History";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/library")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <DashboardLayout>
      <History />
    </DashboardLayout>
  );
}
