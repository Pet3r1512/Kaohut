import {
  HeroHighlight,
  Highlight,
} from "@/components/aceternity/HeroHighlight";
import { motion } from "framer-motion";

export default function HighlightedTitle() {
  return (
    <HeroHighlight className="w-full">
      <motion.h1
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
        className="text-7xl leading-normal cursor-default font-extrabold text-primary"
      >
        Engage, Learn, and Have Fun Together with is a{" "}
        <Highlight className="text-white">Kaohut!</Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
