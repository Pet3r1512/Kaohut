/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SigninForm } from "@/components/Auth/Forms/Account/SigninForm";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import LoadingScreen from "@/components/LoadingScreen";
import { authClient } from "@/lib/auth-client";
import { createLazyFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Route = createLazyFileRoute("/auth/accounts/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const [fetching, setFetching] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      setFetching(true);
      try {
        const result = await authClient.getSession();
        if (result.data?.session) {
          router.navigate({
            to: "/dashboard/play",
          });
        }
      } catch (error: any) {
        console.error("Error fetching session", error);
      } finally {
        setFetching(false);
      }
    };
    fetchSession();
  }, []);

  if (fetching) {
    return <LoadingScreen />;
  }

  return (
    <AuthLayout>
      <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
        {t("auth.signin-page.title")}
      </h1>
      <SigninForm />
    </AuthLayout>
  );
}
