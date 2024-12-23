/* eslint-disable @typescript-eslint/no-explicit-any */
import TeacherPlay from "@/components/Game/Play/TeacherPlay";
import LoadingScreen from "@/components/LoadingScreen";
import DashboardLayout from "@/components/User/Dashboard/DashboardLayout";
import { authClient } from "@/lib/auth-client";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/dashboard/play")({
  component: RouteComponent,
});

function RouteComponent() {
  const [loading, setLoading] = useState<boolean>(true);
  const [session, setSession] = useState<any>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const result = await authClient.getSession();
        setSession(result.data?.session);
      } catch (error: any) {
        console.error("Error fetching session", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!session) {
    router.navigate({ to: "/auth/accounts/signin" });
    return null;
  }

  return (
    <DashboardLayout>
      <TeacherPlay />
    </DashboardLayout>
  );
}
