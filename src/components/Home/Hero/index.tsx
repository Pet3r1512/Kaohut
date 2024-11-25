import Image from "next/image";
import HighlightedTitle from "./HighlightedTitle";
import Actions from "./Actions";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row w-full lg:items-center">
      <div className="w-full lg:w-7/12 flex flex-col gap-y-5 items-center">
        <HighlightedTitle />
        <p className="text-lg text-center lg:text-left">
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
        className="flex-1 h-auto"
      />
    </section>
  );
}
