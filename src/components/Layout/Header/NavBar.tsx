import Link from "next/link";
import { useTranslation } from "next-i18next";

export const Navs = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export default function NavBar() {
  const { t } = useTranslation("common");
  return (
    <nav className="hidden lg:flex items-center gap-x-4 font-semibold text-xl mt-1.5 dark:text-white">
      {Navs.map((nav, index) => {
        return (
          <Link
            key={index}
            href={nav.href}
            className="group lg:hover:text-secondary transition-all duration-200 ease-linear"
          >
            {t(`navigation.${nav.name}`)}
            <span className="block relative left-1/2 max-w-0 group-hover:max-w-full transition-all duration-500 h-[2.5px] bg-secondary transform -translate-x-1/2"></span>
          </Link>
        );
      })}
    </nav>
  );
}
