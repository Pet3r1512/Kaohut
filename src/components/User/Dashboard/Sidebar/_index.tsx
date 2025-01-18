import {
  CirclePower,
  LoaderCircle,
  Play,
  Settings,
  User,
  Telescope,
  LibraryBig,
} from "lucide-react";

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
import { Link, useLocation, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Cookies from "universal-cookie";
import { signOut } from "@/api/user/auth/signOut";
import { useTranslation } from "react-i18next";

const items = [
  {
    title: "play",
    url: "/dashboard/play",
    icon: Play,
  },
  {
    title: "explore",
    url: "/dashboard/explore",
    icon: Telescope,
  },
  {
    title: "library",
    url: "/dashboard/library",
    icon: LibraryBig,
  },
  {
    title: "profile",
    url: "/dashboard/account",
    icon: User,
  },
  {
    title: "settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const { open } = useSidebar();
  const location = useLocation();
  const { t } = useTranslation();
  const cookies = new Cookies(null, { path: "/" });

  return (
    <Sidebar collapsible="icon" className="!border-none">
      <SidebarContent className="bg-white dark:bg-black shadow-2xl">
        <SidebarGroup className="h-full py-8">
          <SidebarGroupContent className="flex flex-col h-full">
            <SidebarMenu className="flex-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      className={cn(
                        "lg:hover:scale-105 transition-all lg:hover:px-5 duration-150 ease-linwear",
                        location.pathname === item.url
                          ? "bg-primary rounded-full text-white lg:hover:bg-primary lg:hover:text-white lg:hover:pl-full lg:text-xl lg:font-bold lg:py-5"
                          : "",
                      )}
                    >
                      <item.icon />
                      <span>{t(`dashboard.sidebar.${item.title}`)}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem className="mt-auto bg-red-500/85 lg:hover:bg-red-500 transition-all duration-150 ease-linear text-white rounded-full">
                <SidebarMenuButton
                  onClick={async () => {
                    setLoading(true);
                    await signOut(cookies.get("token"));
                    cookies.remove("token");
                    cookies.remove("userEmail");
                    setLoading(false);
                    router.navigate({ to: "/auth/accounts/signin" });
                  }}
                  className="flex items-center justify-center"
                >
                  {loading ? (
                    <LoaderCircle className="animate-spin mx-auto" size={14} />
                  ) : (
                    <div className="flex items-center gap-x-2 transition-all duration-300 ease-linear">
                      <CirclePower size={14} />
                      {open && <span>{t("dashboard.sidebar.signout")}</span>}
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
