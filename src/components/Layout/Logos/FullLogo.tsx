import { cn } from "@/lib/utils";

export default function FullLogo({ className }: { className?: string }) {
  return (
    <a
      href="/"
      className={cn("flex items-center gap-x-2.5 cursor-default", className)}
    >
      <img
        src={"/logos/Logo.png"}
        alt="Kaohut Full Logo"
        className="size-8 lg:size-12"
      />
      <p className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text font-bold lg:text-3xl">
        Kaohut!
      </p>
    </a>
  );
}
