import { cn } from "@/lib/utils";

type PerfType = "S+" | "S" | "A+" | "A" | "B+" | "B" | "C";

export default function PerformanceDisplay({ perf }: { perf: string }) {
  const DEFAULT_CLASSNAME = "text-2xl lg:text-4xl italic font-extrabold";
  const perfPattern: Record<PerfType, JSX.Element> = {
    "S+": <p className={cn(DEFAULT_CLASSNAME, "text-[#ffb703]")}>S+</p>,
    S: <p className={cn(DEFAULT_CLASSNAME, "text-[#fca311]")}>S</p>,
    "A+": <p className={cn(DEFAULT_CLASSNAME, "text-[#57cc99]")}>A+</p>,
    A: <p className={cn(DEFAULT_CLASSNAME, "text-[#80ed99]")}>A</p>,
    "B+": <p className={cn(DEFAULT_CLASSNAME, "text-[#006d77]")}>B+</p>,
    B: <p className={cn(DEFAULT_CLASSNAME, "text-[#83c5be]")}>B</p>,
    C: <p className={cn(DEFAULT_CLASSNAME, "text-[#c2c5aa]")}>C</p>,
  };

  if (perf in perfPattern) {
    return perfPattern[perf as PerfType];
  } else {
    return (
      <p className="text-xl font-bold text-red-500">Invalid performance</p>
    );
  }
}
