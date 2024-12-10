import FullLogo from "@/components/Layout/Logos/FullLogo";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-[100dvh] items-center justify-center bg-gray-100">
      <FullLogo className="absolute md:top-10 top-6 md:left-10 left-6" />
      <div className="space-y-6">{children}</div>
    </div>
  );
}
