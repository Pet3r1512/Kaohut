import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/explore")({
  component: RouteComponent,
});

function RouteComponent() {
  return <DashboardLayout>This is Explore section</DashboardLayout>;
}
