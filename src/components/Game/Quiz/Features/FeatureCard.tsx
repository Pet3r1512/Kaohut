import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

export interface Feature {
  name: string;
  desc: string;
  icon: ReactNode;
  href: string;
  className: string;
  mainColor: string;
}

export default function FeatureCard({ feature }: { feature: Feature }) {
  const { name, desc, icon, href, className } = feature;

  return (
    <Link
      href={href}
      className={cn(
        "flex flex-col justify-between gap-y-5 rounded-2xl p-3.5 md:max-w-96 lg:w-96 h-48 lg:hover:scale-105 transition-all duration-150 ease-linear",
        className,
      )}
    >
      <div className="flex gap-x-5 lg:gap-x-8 justify-between items-start dark:text-white text-black">
        {icon}
        <p className="lg:text-lg font-semibold text-white pt-1">{desc}</p>
      </div>
      <button
        className={`rounded-xl bg-white text-black font-semibold py-2 px-3.5 w-fit self-end`}
      >
        {name}
      </button>
    </Link>
  );
}
