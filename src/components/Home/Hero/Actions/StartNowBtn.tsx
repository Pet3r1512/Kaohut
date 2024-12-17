import { Link } from "@tanstack/react-router";
import { MoveUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function StartNowBtn() {
  const { t } = useTranslation();
  return (
    <Link
      data-testid="startnow"
      className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg flex items-center gap-x-1.5 lg:text-lg bg-primary text-white lg:hover:bg-secondary duration-150 transition-all ease-linear hover:a"
      to="/"
    >
      {t("hero.button.start")} <MoveUpRight size={12} />
    </Link>
  );
}
