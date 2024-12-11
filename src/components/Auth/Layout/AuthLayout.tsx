import FullLogo from "@/components/Layout/Logos/FullLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-screen overflow-x-hidden relative flex min-h-[100dvh] items-center justify-center mb-24 lg:mb-0">
      <div className="absolute md:top-10 top-6 md:left-10 left-6 flex items-center justify-between w-full pr-12 lg:pr-20">
        <FullLogo />
        <ThemeToggle />
      </div>
      <div className="space-y-6 mt-24 md:mt-12">{children}</div>
    </div>
  );
}
