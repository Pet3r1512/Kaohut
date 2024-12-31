import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/_index";
import LoadingScreen from "@/components/LoadingScreen";
import { useRouter } from "@tanstack/react-router";
import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(session);
  }, [session]);

  if (isPending) {
    return <LoadingScreen />;
  }

  if (error) {
    console.log(error);
  }

  if (!session) {
    router.navigate({
      to: "/auth/accounts/signin",
    });
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-8 w-full">
        <SidebarTrigger />
        <section className="lg:py-8">{children}</section>
      </main>
    </SidebarProvider>
  );
}
