import { MoveUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Actions() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-x-5 font-semibold">
      <a
        className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg flex items-center gap-x-1.5 lg:text-lg bg-primary text-white lg:hover:bg-secondary duration-150 transition-all ease-linear"
        href="#"
      >
        {t("hero.button.start")} <MoveUpRight size={12} />
      </a>
      <a
        className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg lg:text-lg dark:bg-white/80 bg-white shadow-2xl text-secondary lg:hover:bg-primary lg:hover:text-white transition-all duration-150 ease-linear"
        href="#"
      >
        {t("hero.button.explore")}
      </a>
    </div>
  );
}
