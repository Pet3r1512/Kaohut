import HighlightedTitle from "./HighlightedTitle";
import Actions from "./Actions";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      data-testid="hero"
      className="min-h-[calc(100dvh-4rem)] lg:min-h-[calc(100dvh-6rem)] flex flex-col justify-center gap-y-7 lg:flex-row w-full md:items-center py-12 lg:py-0 mt-5 lg:mt-0"
    >
      <div className="w-full md:w-9/12 lg:w-7/12 flex flex-col gap-y-5 items-center lg:items-start">
        <HighlightedTitle />
        <p className="md:text-lg lg:text-xl text-center lg:text-left">
          {t("hero.subtitle")}
        </p>
        <Actions />
      </div>
      <img
        data-testid="hero-img"
        src={"/images/hero.png"}
        alt=""
        className="w-full md:w-1/2 lg:w-5/12 h-auto"
      />
    </section>
  );
}
