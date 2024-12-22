import GameRoom from "@/components/Game/Room";
import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import { authClient } from "@/lib/auth-client";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/play")({
  component: RouteComponent,
  beforeLoad: async () => {
    const session = authClient.getSession();
    if (!session) {
      throw redirect({
        to: "/auth/accounts/signin",
      });
    }
  },
});

function RouteComponent() {
  return (
    <DashboardLayout>
      <p>Let's Play</p>
      <GameRoom />
    </DashboardLayout>
  );
}
