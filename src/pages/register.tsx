import Logo from "@/components/Layout/Logo/FullLogo";
import Link from "next/link";
import { User } from "lucide-react";
import { BookOpen } from "lucide-react";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <section className="flex flex-col gap-y-5 my-24 lg:my-0 items-center">
        <p className="text-3xl font-bold">Choose your account type</p>

        <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
          <Link
            href="/"
            className="flex flex-col items-center bg-red-500 text-white rounded-lg lg:hover:scale-110 hover:bg-red-700 transition-all duration-150 ease-linear shadow-md"
          >
            <div className="flex items-center justify-center bg-red-700 rounded-full py-1 px-1">
              <BookOpen />
            </div>
            <p className="font-medium">Teacher</p>
          </Link>

          <Link
            href="/"
            className="flex flex-col items-center bg-yellow-500 text-white rounded-lg lg:hover:scale-110 hover:bg-yellow-700 transition-all duration-150 ease-linear shadow-md"
          >
            <div className="flex items-center justify-center bg-yellow-700 rounded-full py-1 px-1">
              <User className="flex items-center justify-center " />
            </div>
            <p className="font-medium">Student</p>
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-600 justify-center">
          Already have an account?
          <Link href="/" className="text-sky-400 hover:underline">
            Log in
          </Link>
        </p>
      </section>
    </div>
  );
}
