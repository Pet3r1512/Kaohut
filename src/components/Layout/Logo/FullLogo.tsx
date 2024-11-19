import React from "react";
import Image from "next/image";

export default function FullLogo() {
  return (
    <div className="flex items-center gap-x-2.5 cursor-default">
      <Image
        src={"/logos/Logo.png"}
        alt="Kaohut Full Logo"
        width={100}
        height={100}
        className="size-8 lg:size-12"
      />
      <p className="bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text font-bold lg:text-3xl">
        Kaohut!
      </p>
    </div>
  );
}
