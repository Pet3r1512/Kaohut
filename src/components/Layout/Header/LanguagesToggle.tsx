import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Languages } from "lucide-react";

export function LanguagesToggle() {
  const Langs = ["Tieng Viet", "English"];
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
