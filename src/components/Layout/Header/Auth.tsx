import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Auth() {
  const auths = [
    {
      name: "Log In",
      href: "/auth/signin",
      className: "",
    },
    {
      name: "Sign Up",
      href: "/auth/signup",
      className: "!bg-primary text-white",
    },
  ];
  return (
    <div className="flex items-center gap-x-5">
      {auths.map((auth, index) => {
        return (
          <Link
            key={index}
            href={auth.href}
            className={cn(
              "px-4 pb-3 pt-2.5 rounded-xl shadow-2xl font-semibold bg-white dark:bg-black dark:text-white lg:hover:scale-105 transition-all duration-150 ease-linear",
              auth.className,
            )}
          >
            {auth.name}
          </Link>
        );
      })}
    </div>
  );
}
