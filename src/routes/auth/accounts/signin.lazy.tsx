/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { SigninForm } from "@/components/Auth/Forms/Account/SigninForm";
import AuthLayout from "@/components/Auth/Layout/AuthLayout";
import LoadingScreen from "@/components/LoadingScreen";
import { createLazyFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";

export const Route = createLazyFileRoute("/auth/accounts/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  const { t } = useTranslation();
  const [fetching, setFetching] = useState<boolean>(false);
  const router = useRouter();
  const cookies = new Cookies(null, { path: "/" });

  useEffect(() => {
    const fetchSession = async () => {
      setFetching(true);
      try {
        if (cookies.get("token")) {
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
