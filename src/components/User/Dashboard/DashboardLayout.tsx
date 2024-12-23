/* eslint-disable @typescript-eslint/no-explicit-any */
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/_index";
import { useEffect, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import LoadingScreen from "@/components/LoadingScreen";
import { authClient } from "@/lib/auth-client";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <SidebarProvider>
      <AppSidebar />
      <main className="p-8 w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
