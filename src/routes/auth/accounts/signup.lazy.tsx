/* eslint-disable react-hooks/exhaustive-deps */
import { SignupForm } from "@/components/Auth/Forms/Account/SignupForm";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import { useRoleStore } from "@/stores/roles/role";
import { createLazyFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/auth/accounts/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  const { getRole, getWorkplace } = useRoleStore();
  const router = useRouter();

  useEffect(() => {
    if (getRole() === "" && getWorkplace() === "") {
      router.navigate({ to: "/auth/role", from: "/auth/accounts/signup" });
    } else if (getRole() === "teacher" && getWorkplace() === "") {
      router.navigate({ to: "/auth/teacher" });
    } else if (getRole() === "student" && getWorkplace() === "") {
      router.navigate({ to: "/auth/student" });
    }
  }, [getRole, getWorkplace, router]);

  return (
    <AuthLayout>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
        Create an account
      </h1>
      <SignupForm />
    </AuthLayout>
  );
}
