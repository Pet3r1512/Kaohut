/* eslint-disable @typescript-eslint/no-explicit-any */
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/_index";
import { getSession } from "@/lib/auth-client";
import { useEffect, useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currSession, setCurrSession] = useState<any>();
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      console.log(session);
      setCurrSession(session);
      console.log(currSession);
    };
    fetchSession();
  }, [currSession]);

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
