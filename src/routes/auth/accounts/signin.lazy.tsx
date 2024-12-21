import { SigninForm } from "@/components/Auth/Forms/Account/SigninForm";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createLazyFileRoute("/auth/accounts/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  return (
    <AuthLayout>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
        {t("auth.signin-page.title")}
      </h1>
      <SigninForm />
    </AuthLayout>
  );
}
