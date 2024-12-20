import { CirclePower, LoaderCircle, Play, Settings, User } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

// Menu items.
const items = [
  {
    title: "Play",
    url: "#",
    icon: Play,
    className:
      "bg-primary rounded-full text-white lg:hover:bg-primary lg:hover:text-white lg:hover:pl-full lg:text-xl lg:font-bold lg:py-5",
  },
  {
    title: "Profile",
    url: "#",
    icon: User,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup className="h-full py-8">
          <SidebarGroupContent className="flex flex-col h-full">
            <SidebarMenu className="flex-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={cn(
                        "lg:hover:scale-105 transition-all lg:hover:px-5 duration-150 ease-linear",
                        item.className,
                      )}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem className="mt-auto bg-red-500 text-white rounded-full">
                <SidebarMenuButton
                  onClick={async () => {
                    setLoading(true);
                    await authClient.signOut();
                    setLoading(false);
                    router.navigate({ to: "/auth/accounts/signin" });
                  }}
                  className="flex items-center justify-center"
                >
                  {loading ? (
                    <LoaderCircle className="animate-spin mx-auto" size={14} />
                  ) : (
                    <div className="flex items-center gap-x-2">
                      <CirclePower size={14} />
                      {open && <span>Sign Out</span>}
                    </div>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
