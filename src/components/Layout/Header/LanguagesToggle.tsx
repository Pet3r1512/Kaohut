import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/hooks/useLocale";
import { ChevronDown, Languages } from "lucide-react";
import { locales } from "@/hooks/useLocale";

export function LanguagesToggle() {
  const { changeLocale } = useLocale();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="dark:text-white text-black flex items-center">
        <Languages />
        <ChevronDown size={12} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-max flex flex-col gap-y-5 border-none p-5">
        {locales.map((lang, index) => {
          return (
            <p
              onClick={() => {
                changeLocale(lang.locale);
              }}
              key={index}
              className="lg:hover:text-secondary transition-all duration-150 ease-linear cursor-pointer font-semibold"
            >
              {lang.text}
            </p>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
