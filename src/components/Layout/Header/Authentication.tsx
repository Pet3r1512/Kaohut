import { cn } from "@/lib/utils";

export default function Authentication({
  className,
  btnClassName,
}: {
  className?: string;
  btnClassName?: string;
}) {
  const auths = [
    {
      id: 1,
      name: "Log In",
      href: "/auth/accounts/signin",
      className: "bg-white",
    },
    {
      id: 2,
      name: "Sign Up",
      href: "/auth/role",
      className: "!bg-primary text-white",
    },
  ];
  return (
    <div className={cn("flex items-center gap-x-5", className)}>
      {auths.map((auth) => {
        return (
          <a
            key={auth.id}
            href={auth.href}
            className={cn(
              "px-4 pb-3 pt-2.5 rounded-xl shadow-2xl font-semibold bg-white dark:bg-black dark:text-white lg:hover:scale-105 transition-all duration-150 ease-linear",
              auth.className,
              btnClassName,
            )}
          >
            {auth.name}
          </a>
        );
      })}
    </div>
  );
}
