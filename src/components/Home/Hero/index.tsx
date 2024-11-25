import {
  HeroHighlight,
  Highlight,
} from "@/components/aceternity/HeroHighlight";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex w-full items-center">
      <div className="w-7/12">
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
        <HighlightedTitle />
      </div>
      <Image
        src={"/images/hero.png"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="flex-1 h-auto"
      />
    </section>
  );
}
