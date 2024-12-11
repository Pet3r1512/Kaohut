import { SigninForm } from "@/components/Auth/Forms/Account/SigninForm";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/auth/accounts/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
        Log In
      </h1>
      <SigninForm />
    </AuthLayout>
  );
}
