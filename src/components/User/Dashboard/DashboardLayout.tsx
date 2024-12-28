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
        {children}
      </main>
    </SidebarProvider>
  );
}
