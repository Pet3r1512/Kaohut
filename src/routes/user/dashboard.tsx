import Dashboard from "@/components/User/Dashboard/_index";
import { authClient } from "@/lib/auth-client";
// import { authClient } from "@/lib/auth-client";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/user/dashboard")({
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
  return <Dashboard />;
}
