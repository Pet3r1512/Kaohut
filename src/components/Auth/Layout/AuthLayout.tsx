import FullLogo from "@/components/Layout/Logos/FullLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center">
      <div className="absolute md:top-10 top-6 md:left-10 left-6 flex items-center justify-between w-[95vw]">
        <FullLogo />
        <ThemeToggle />
      </div>
      <div className="space-y-6">{children}</div>
    </div>
  );
}
