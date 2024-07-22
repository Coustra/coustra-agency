import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const Hero = () => {
  return (
    <div className='min-h-screen pt-[65px] w-full flex items-center justify-center flex-col gap-3'>
      <div className='max-w-[850px] text-center gap-5 flex flex-col'>
        <h1 className='md:text-5xl sm:text-3xl text-xl font-semibold tracking-wide text-[#333] leading-tight'>
          Coustra is pioneering the future of software solutions in the
          direct-to-consumer space.
        </h1>
        <h3 className='text-lg font-light opacity-65'>
          As a unique studio and agency comprised of creators, we collaborate
          with communities to develop software solutions. Through our funding
          platform, the community can evaluate and rate ideas, invest in
          promising projects, and receive shares.
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
