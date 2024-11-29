import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import Header from "./Header";

export default function Page({
  children,
  className,
  pageName,
}: {
  children: ReactNode;
  className?: string;
  pageName?: string;
}) {
  return (
    <main className="body bg-cover bg-center min-h-screen">
      <Header />
      <section
        className={cn(
          "flex flex-col mx-auto max-w-[1440px] min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-6rem)]",
          pageName,
        )}
      >
        <div className={cn("mx-auto w-full max-w-7xl px-6 flex-1", className)}>
          {children}
        </div>
      </section>
    </main>
  );
}
