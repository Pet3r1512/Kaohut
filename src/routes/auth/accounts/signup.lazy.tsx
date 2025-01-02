/* eslint-disable react-hooks/exhaustive-deps */
import { SignupForm } from "@/components/Auth/Forms/Account/SignupForm";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import { useRoleStore } from "@/stores/roles/role";
// import { useRoleStore } from "@/stores/roles/role";
import { createLazyFileRoute, useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Route = createLazyFileRoute("/auth/accounts/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  const { getRole, getWorkplace } = useRoleStore();
  const router = useRouter();
  const { t } = useTranslation();

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
        {t("auth.signup-page.title")}
      </h1>
      <SignupForm />
    </AuthLayout>
  );
}
