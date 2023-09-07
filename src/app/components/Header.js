"use client";
import Image from "next/image";
import React from "react";
import LogoDesktop from "../../../public/Instagram_logo.png";
import LogoMoble from "../../../public/Instagram_logo_mobile.png";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-between max-w-6xl">
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            src={LogoDesktop}
            alt="Logo"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="h-24 w-10 relative lg:hidden cursor-pointer">
          <Image
            src={LogoMoble}
            alt="Logo"
            layout="fill"
            className="object-contain"
          />
        </div>
        <h1>Right Side</h1>
      </div>
    </>
  );
}
