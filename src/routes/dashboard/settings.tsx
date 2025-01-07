import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DashboardLayout>This is Settings section</DashboardLayout>;
}
