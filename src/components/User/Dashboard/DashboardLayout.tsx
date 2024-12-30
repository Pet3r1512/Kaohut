import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/_index";
import LoadingScreen from "@/components/LoadingScreen";
// import { useCheckSession } from "@/hooks/useCheckSession";
import { createAuthClient } from "better-auth/react";
import { useRouter } from "@tanstack/react-router";
const { useSession } = createAuthClient();

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = useSession();
  const router = useRouter();

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
