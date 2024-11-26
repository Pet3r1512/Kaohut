import Logo from "@/components/Layout/Logo/FullLogo";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { BookOpen } from "lucide-react";
import { School } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";

export default function Teacher() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <section className="flex flex-col gap-y-5 my-24 lg:my-0 items-center">
        {/* <header className="flex items-center w-full max-w-6xl mb-8">
        <Link href="/" className="flex items-center">
          <Logo className="h-10" />
        </Link>
      </header> */}

        <div className="flex items-center w-full relative h-32">
          <button className="flex items-center rounded-md absolute left-0 top-0 h-10 w-20 bg-white lg:hover:scale-110 transition-all duration-150 ease-linear shadow-md">
            <ChevronLeft />
            <p className="font-semibold">
              <Link href="/register">Back</Link>
            </p>
          </button>
        </div>

        <p className="text-3xl font-bold">Describe your workplace</p>

        <div className="grid grid-cols-2 gap-8 w-full max-w-4xl">
          <Link
            href="/"
            className="flex flex-col items-center bg-primary text-white rounded-lg lg:hover:scale-110 hover:bg-primary-dark transition-all duration-150 ease-linear shadow-md"
          >
            <div className="flex items-center justify-center bg-primary-dark rounded-full py-2 px-2">
              <BookOpen />
            </div>
            <p className="font-medium">School</p>
          </Link>

          <Link
            href="/"
            className="flex flex-col items-center bg-primary text-white rounded-lg lg:hover:scale-110 hover:bg-primary-dark transition-all duration-150 ease-linear shadow-md"
          >
            <div className="flex items-center justify-center bg-primary-dark rounded-full py-2 px-2">
              <School />
            </div>
            <p className="font-medium">Higher Education</p>
          </Link>

          <Link
            href="/"
            className="flex flex-col items-center bg-primary text-white rounded-lg lg:hover:scale-110 hover:bg-primary-dark transition-all duration-150 ease-linear shadow-md"
          >
            <div className="flex items-center justify-center bg-primary-dark rounded-full py-2 px-2">
              <BriefcaseBusiness />
            </div>
            <p className="font-medium">Business</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
