import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
        Create an account
      </h1>
    </AuthLayout>
  );
}
