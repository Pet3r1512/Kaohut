import TeacherPlay from "@/components/Game/Play/TeacherPlay";
import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/play")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <DashboardLayout>
      <TeacherPlay />
    </DashboardLayout>
  );
}
