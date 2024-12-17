import {
  HeroHighlight,
  Highlight,
} from "@/components/aceternity/HeroHighlight";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HighlightedTitle() {
  const { t } = useTranslation();

  return (
    <HeroHighlight className="w-full">
      <motion.h1
        data-testid="highlighted_title"
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-3xl md:text-5xl lg:text-7xl !leading-normal text-center lg:text-left cursor-default font-extrabold text-primary"
      >
        {t("hero.title")} <Highlight className="text-white">Kaohut!</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
