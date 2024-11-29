import HighlightedTitle from "./HighlightedTitle";
import Actions from "./Actions";

export default function Hero() {
  return (
    <section className="flex flex-col min-h-screen justify-center gap-y-7 lg:flex-row w-full md:items-center py-12 lg:py-0">
      <div className="w-full md:w-9/12 lg:w-7/12 flex flex-col gap-y-5 items-center lg:items-start">
        <HighlightedTitle />
        <p className="md:text-lg lg:text-xl text-center lg:text-left">
          Transform the way you connect and learn through interactive quizzes,
          polls, and games—all in one dynamic platform.
        </p>
        <Actions />
      </div>
      <img
        src={"/images/hero.png"}
        alt=""
        className="w-full md:w-1/2 lg:w-5/12 h-auto"
      />
    </section>
  );
}
