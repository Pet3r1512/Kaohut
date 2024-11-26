import { cn } from "@/lib/utils";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Auth() {
  const { t } = useTranslation("common");
  const auths = [
    {
      name: "signin",
      href: "/auth/signin",
      className: "",
    },
    {
      name: "signup",
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
            {t(`auth.${auth.name}`)}
          </Link>
        );
      })}
    </div>
  );
}
