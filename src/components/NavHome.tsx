import React from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export const NavHome = () => {
  return (
    <nav className="absolute top-5 left-10">
      <Link
        href="/"
        className="group flex items-center justify-center gap-2 h-[2.5rem] w-[7rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      >
        <FaArrowLeft className="text-xs opacity-70 transition-all group-hover:-translate-x-1" />{" "}
        Home
      </Link>
    </nav>
  );
};
