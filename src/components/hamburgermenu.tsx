"use client"
import { useState } from "react";
import { RiMenu3Line, RiCloseLargeLine } from "react-icons/ri";

type HamburgerMenuProps = {
  isOpen: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};


export default function HamburgerMenu({isOpen, handleClick} : HamburgerMenuProps ) {
  return (
    <button
      onClick={handleClick}
      className="relative w-10 h-10 flex items-center justify-center text-ghostwhite text-3xl md:hidden"
    >
      <RiMenu3Line
        className={`absolute transition-all duration-500 ease-in-out text-ghostwhite/80 ${
          isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
      <RiCloseLargeLine
        className={`absolute transition-all duration-500 ease-in-out text-ghostwhite/80${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
    </button>
  );
};