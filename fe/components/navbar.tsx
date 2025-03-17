"use client";

import Image from "next/image";
import React from "react";
import { ASSETS_URL } from "@/lib/constants";
import Link from "next/link";
import ConnectWallet from "./connect-wallet";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full flex items-center justify-center p-4 shadow-lg z-[60] mb-10 bg-black-100">
      <div className="w-full max-w-[1440px] flex items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link href={"/"} className="flex items-center justify-center gap-2">
            <Image
              src={`${ASSETS_URL}logo.png`}
              alt="logo"
              width={45}
              height={45}
              className="cursor-pointer"
            />

            <span className="ty-h6 text-pink-32 font-semibold dm-sans md:block hidden">
              CandyBlinks
            </span>
          </Link>
        </div>
        <div className="flex items-center justify-center text-sm text-white-50 gap-4">
          <Link
            href="/"
            className={`flex justify-center items-center hover:text-white font-semibold transition-all 
                `}
          >
            <p className="ty-descriptions">Home</p>
          </Link>
          <Link
            href="/create"
            className={`flex justify-center items-center hover:text-white font-semibold transition-all 
                `}
          >
            <span>Create</span>
          </Link>
          <Link
            href="/hub"
            className={`flex justify-center items-center hover:text-white font-semibold transition-all 
                `}
          >
            <span>Creators hub</span>
          </Link>
        </div>

        <ConnectWallet />
      </div>
    </div>
  );
}
