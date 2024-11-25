import Image from "next/image";
import HighlightedTitle from "./HighlightedTitle";
import Actions from "./Actions";

export default function Hero() {
  return (
    <section className="flex w-full items-center">
      <div className="w-7/12 flex flex-col gap-y-5">
        <HighlightedTitle />
        <p className="text-lg">
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
