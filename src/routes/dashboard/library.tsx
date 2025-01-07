import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/library")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DashboardLayout>This is Library section</DashboardLayout>;
}
