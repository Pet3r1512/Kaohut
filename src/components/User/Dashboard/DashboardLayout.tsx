import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/_index";
import LoadingScreen from "@/components/LoadingScreen";
import { useCheckSession } from "@/hooks/useCheckSession";

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
        <section className="lg:py-8 min-h-[calc(100vh-6.5rem)]">
          {children}
        </section>
      </main>
    </SidebarProvider>
  );
}
