import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/_index";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "@tanstack/react-router";
// import LoadingScreen from "@/components/LoadingScreen";
// import { useCheckSession } from "@/hooks/useCheckSession";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { fetching } = useCheckSession();

  // if (fetching) {
  //   return <LoadingScreen />;
  // }
  const { data } = authClient.useSession();
  const router = useRouter();

  if (!data?.user) {
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
