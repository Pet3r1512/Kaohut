import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export function LanguagesToggle() {
  const { i18n } = useTranslation();
  const Langs = ["Tieng Viet", "English"];

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="dark:text-white text-black flex items-center">
        <Languages />
        <ChevronDown size={12} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-max flex flex-col gap-y-5 border-none p-5">
        {Langs.map((lang, index) => {
          return (
            <p
              onClick={() => changeLanguage(lang === "English" ? "en" : "vi")}
              key={index}
              className="lg:hover:text-secondary transition-all duration-150 ease-linear cursor-pointer font-semibold"
            >
              {lang}
            </p>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
