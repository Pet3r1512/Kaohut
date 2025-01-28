import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Sidebar/_index";
import LoadingScreen from "@/components/LoadingScreen";
import { useCheckSession } from "@/hooks/useCheckSession";
import { useMutation } from "@tanstack/react-query";
import { getUserByEmail } from "@/api/user/getUser";
import { useUserStore, defaultUser } from "@/stores/user";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { fetching } = useCheckSession();
  const { getUser, setUser } = useUserStore();
  const { theme } = useTheme();

  const mutation = useMutation({
    mutationFn: getUserByEmail,
    mutationKey: ["user"],
    onSuccess: (data) => {
      const user = data.user?.user;
      if (user) {
        setUser({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          workplace: user.workplace,
        });
      }
    },
    onError: (error) => {
      console.error("Error fetching user:", error.message);
    },
  });

  useEffect(() => {
    const cookies = new Cookies(null, { path: "/" });
    const user = getUser();

    if (JSON.stringify(user) === JSON.stringify(defaultUser)) {
      const userEmail = cookies.get("userEmail");
      if (userEmail && !mutation.isPending && !mutation.data) {
        mutation.mutate(userEmail);
      }
    } else {
      if (user && user.id && user.name && !mutation.isPending) {
        if (
          user.id !== getUser().id ||
          user.name !== getUser().name ||
          user.email !== getUser().email
        ) {
          setUser(user);
        }
      }
    }
  }, [getUser, setUser, mutation]);

  if (fetching) {
    return <LoadingScreen />;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className={cn("p-8 w-full", theme === "dark" ? "dark" : "light")}>
        <SidebarTrigger />
        <section className="lg:py-8 min-h-[calc(100vh-6.5rem)]">
          {children}
        </section>
      </main>
    </SidebarProvider>
  );
}
