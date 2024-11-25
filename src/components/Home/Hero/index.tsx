import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex w-full ">
      <div className="w-2/3">
        <p className="text-7xl font-extrabold text-primary leading-tight">
          Engage, Learn, and Have Fun Together with Kaohut!
        </p>
      </div>
      <Image
        src={"/images/hero.png"}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="w-1/3 h-auto"
      />
    </section>
  );
}
