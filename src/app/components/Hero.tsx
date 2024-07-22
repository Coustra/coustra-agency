import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <div className='min-h-screen pt-[65px] w-full flex items-center justify-center flex-col gap-3'>
      <div className='max-w-[850px] text-center gap-5 flex flex-col'>
        <h1 className='text-5xl font-semibold tracking-wide text-[#333] leading-tight'>
          Blank Studio is building the next generation of software solutions in
          the direct-to-consumer space.
        </h1>
        <h3 className='text-base opacity-75'>
          A company of third culture thinkers building simple but impactful
          community-driven software solutions based out of Hong Kong, Barcelona,
          Amsterdam, London, Shanghai and New York
        </h3>
      </div>
      <Link
        className={cn(
          buttonVariants({ size: "sm", variant: "default" }),
          "shadow-2xl px-5"
        )}
        href='/contact'
      >
        Contact us
      </Link>
    </div>
  );
};
