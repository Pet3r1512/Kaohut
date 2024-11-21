import Page from "@/components/Layout/Page";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Page className="flex items-center justify-center min-h-screen">
      <section className="flex flex-col gap-y-5 my-24 lg:my-0 items-center">
        <p className="text-7xl font-bold text-white">Welcome to Kaohut</p>
        <p className="text-white">
          An interactive learning platform that makes education fun and engaging
          for both teachers and students
        </p>
        <button className="bg-white flex items-center p-3 rounded-full pl-4 text-purple">
          <p className="font-semibold">
            <Link href="/register">Get Started</Link>
          </p>
          {""}
          <ChevronRight />
        </button>
      </section>
    </Page>
  );
}
