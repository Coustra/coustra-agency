import Link from "next/link";
import React from "react";
import { NavLink } from "../ui/NavLink";

export const Header = () => {
  return (
    <header className='p-5 xl:px-0 border-b border-zinc-200 fixed w-full bg-inherit'>
      <div className='max-w-[1250px] m-auto w-full flex items-center justify-between gap-4'>
        <span>Logo</span>
        <nav className='flex items-center gap-4'>
          <NavLink href={"/jobs"}>Jobs</NavLink>
          <NavLink href={"/community"}>Community</NavLink>
        </nav>
      </div>
    </header>
  );
};
