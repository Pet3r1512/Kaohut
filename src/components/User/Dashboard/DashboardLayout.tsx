import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/_index";
import { useCheckSession } from "@/hooks/useCheckSession";
import LoadingScreen from "@/components/LoadingScreen";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { fetching } = useCheckSession();

  if (fetching) {
    return <LoadingScreen />;
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
