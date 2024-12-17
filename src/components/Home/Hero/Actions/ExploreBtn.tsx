import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export default function ExploreBtn() {
  const { t } = useTranslation();
  return (
    <Link
      data-testid="explore-btn"
      className="explore-btn px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg lg:text-lg dark:bg-white/80 bg-white shadow-2xl text-secondary lg:hover:bg-primary lg:hover:text-white transition-all duration-150 ease-linear"
      to="/"
    >
      {t("hero.button.explore")}
    </Link>
  );
}
