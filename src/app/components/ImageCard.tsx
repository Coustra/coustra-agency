import { AnimatedCard } from "@/components/ui/AnimatedCard";
import React from "react";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  left?: boolean;
}

export const ImageCard = (props: Props) => {
  const { left } = props;
  return (
    <AnimatedCard className='p-0'>
      <div className={cn("flex flex-row", left && "flex-row-reverse")}>
        <div className='relative w-1/2 h-[600px]'>
          <Image
            className={cn(
              "object-cover",
              left ? "rounded-r-3xl" : "rounded-l-3xl"
            )}
            src='/assets/video.gif'
            fill
            alt='card-image'
          />
        </div>
        <div className='w-1/2 p-5 px-16 flex flex-col my-auto gap-6'>
          <h1 className='text-5xl font-semibold'>Creator Company</h1>
          <p className='md:text-lg font-light opacity-65 max-w-[500px]'>
            While being more connected than ever, we feel more disconnected than
            ever. People desire to belong and be part of something bigger than
            ourselves. We swear by creator-driven companies embracing
            communities being the future. This thesis drives the company culture
            at Blank Studio shaping the processes and systems of the company—a
            culture driven by freedom with a lot of responsibility.
          </p>
        </div>
      </div>
    </AnimatedCard>
  );
};
