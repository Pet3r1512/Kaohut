import { MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function Actions() {
  return (
    <div className="flex items-center gap-x-5 font-semibold">
      <Link
        className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg flex items-center gap-x-1.5 lg:text-lg bg-primary text-white lg:hover:bg-secondary duration-150 transition-all ease-linear"
        href="#"
      >
        Start Now <MoveUpRight size={12} />
      </Link>
      <Link
        className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg lg:text-lg dark:bg-white/80 bg-white shadow-2xl text-secondary lg:hover:bg-primary lg:hover:text-white transition-all duration-150 ease-linear"
        href="#"
      >
        Explore Features
      </Link>
    </div>
  );
}
