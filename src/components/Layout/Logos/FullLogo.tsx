import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

export default function FullLogo({
  className,
  imgClassName,
  textClassName,
}: {
  className?: string;
  imgClassName?: string;
  textClassName?: string;
}) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-x-2.5 cursor-default", className)}
    >
      <img
        src={"/logos/Logo.png"}
        alt="Kaohut Full Logo"
        className={cn("size-8 lg:size-12", imgClassName)}
      />
      <p
        className={cn(
          "bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text font-bold lg:text-3xl",
          textClassName,
        )}
      >
        Kaohut!
      </p>
    </Link>
  );
}
