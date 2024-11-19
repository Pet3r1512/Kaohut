import { cn } from "@/lib/utils";
import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header/Header";

export default function Page({
  children,
  className,
  pageName,
}: {
  children: ReactNode;
  className?: string;
  pageName?: string;
}) {
  return (
    <>
      <Head>
        <title>Kaohut | Awesome Education Quiz</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className="scrollbar-hide bg-cover bg-center h-full">
        <Header />
        <section
          className={cn(
            "flex flex-col mx-auto max-w-[1440px] min-h-screen",
            pageName,
          )}
        >
          <div
            className={cn(
              "mx-auto w-full max-w-7xl px-6 min-h-screen",
              className,
            )}
          >
            {children}
          </div>
        </section>
      </main>
    </>
  );
}
