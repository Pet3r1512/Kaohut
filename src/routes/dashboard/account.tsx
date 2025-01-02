import Account from "@/components/User/Account/Account";
import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import { authClient } from "@/lib/auth-client";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/account")({
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
      <Account />
    </DashboardLayout>
  );
}
