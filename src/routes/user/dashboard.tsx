import { authClient } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";
// import { Navigate } from "@tanstack/react-router"; // For redirection

export const Route = createFileRoute("/user/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    // While checking session, show a loading state
    return <div>Loading...</div>;
  }

  console.log(data);
  // if (!session) {
  //   // Redirect to the login page if not authenticated
  //   return <Navigate to="/auth/accounts/signin" />;
  // }

  // Render the dashboard if authenticated
  return <div>Hello "/user/dashboard"!</div>;
}
