import ThemeToggle from "@/components/ThemeToggle";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import FullLogo from "../Logos/FullLogo";
import Authentication from "./Authentication";

export default function Sidebar() {
  return (
    <Drawer direction="left">
      <DrawerTrigger className="lg:hidden relative">
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="h-[100dvh] w-2/3 !rounded-l-none rounded-r-xl px-5 py-12 flex flex-col gap-y-5">
        <FullLogo imgClassName="h-14 w-auto" textClassName="text-2xl" />
        <div className="flex py-10 gap-x-2.5 flex-1">
          <p className="font-semibold">Theme Mode</p>
          <ThemeToggle />
        </div>
        <Authentication
          className="flex-col gap-y-2.5"
          btnClassName="w-full text-center"
        />
      </DrawerContent>
    </Drawer>
  );
}
