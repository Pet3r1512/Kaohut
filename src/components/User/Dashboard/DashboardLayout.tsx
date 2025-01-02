/* eslint-disable @typescript-eslint/no-explicit-any */
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/_index";
import { useSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currSession, setCurrSession] = useState<any>();
  const { data: session } = useSession();
  useEffect(() => {
    const fetchSession = async () => {
      console.log(session);
      setCurrSession(session);
      console.log(currSession);
    };
    fetchSession();
  }, [session, currSession]);

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
