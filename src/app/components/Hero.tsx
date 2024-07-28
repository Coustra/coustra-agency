"use client";

import ShimmerButton from "@/components/magicui/shimmer-button";
import { ShinySectionText } from "@/components/ui/ShinySectionText";
import { useRouter } from "next/navigation";
import React from "react";

export const Hero = () => {
  const router = useRouter();
  return (
    <div className='min-h-screen pt-[65px] w-full flex items-center justify-center flex-col gap-3'>
      <div className='max-w-[850px] text-center gap-5 flex flex-col'>
        <ShinySectionText text='✨ We love software' />
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
      <ShimmerButton
        className='shadow-2xl py-2 px-6'
        onClick={() => router.push("/projects")}
      >
        <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
          Explore our projects
        </span>
      </ShimmerButton>
    </div>
  );
};
