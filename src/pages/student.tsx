import Logo from "@/components/Layout/Logo/FullLogo";
import Link from "next/link";

export default function Student() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="flex flex-col gap-y-5 my-24 lg:my-0 items-center">
        <p className="text-3xl font-bold">Enter your information</p>
        <div className="bg-white shadow rounded-lg p-8 w-full max-w-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-4">
              <></>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
