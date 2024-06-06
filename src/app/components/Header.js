"use client";
import Image from "next/image";
import React from "react";
import LogoDesktop from "../../../public/Instagram_logo.png";
import LogoMobile from "../../../public/Instagram_logo_mobile.png";
import { BeakerIcon } from "@heroicons/react/24/solid";
import { HomeIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="shadow-sm border-b sticky top-0 bg-white z-30">
        <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
          <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
            <Link href="/">
              {/* <Image
                src={LogoDesktop}
                alt="Logo"
                layout="fill"
                className="object-contain"
              /> */}
            </Link> Deepika Female
          </div>
          <div className="h-24 w-10 relative lg:hidden cursor-pointer">
            <Image
              src={LogoMobile}
              alt="Logo"
              layout="fill"
              className="object-contain"
            /> 
          </div>
          <div className="relative mt-1">
            <div className="absolute top-2 left-2">
              <svg
                className="h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="search"
              className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
            />
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/">
              <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
            </Link>
            <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
              alt="user-image"
              className="h-10 rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
