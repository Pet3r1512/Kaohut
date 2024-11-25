import Image from "next/image";
import HighlightedTitle from "./HighlightedTitle";
import Actions from "./Actions";

export default function Hero() {
  return (
    <section className="flex flex-col gap-y-7 lg:flex-row w-full lg:items-center py-12 lg:py-0">
      <div className="w-full lg:w-7/12 flex flex-col gap-y-5 items-center lg:items-start">
        <HighlightedTitle />
        <p className="lg:text-lg text-center lg:text-left">
          Transform the way you connect and learn through interactive quizzes,
          polls, and games—all in one dynamic platform.
        </p>
        <Actions />
      </div>
      <Image
        src={"/images/hero.png"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-full lg:w-5/12 h-auto"
      />
    </section>
  );
}
