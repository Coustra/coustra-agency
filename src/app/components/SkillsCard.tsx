import { AnimatedCard } from "@/components/ui/AnimatedCard";
import React from "react";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SkillsCloud } from "@/components/utils/SkillsCloud";

interface Props {
  text: string;
  title: string;
  image?: string;
  left?: boolean;
}

export const SkillsCard = (props: Props) => {
  const { left } = props;
  return (
    <AnimatedCard className='p-0'>
      <div className={cn("flex flex-row", left && "flex-row-reverse")}>
        <div className='relative w-1/2 h-[600px]'>
          <SkillsCloud />
        </div>
        <div className='w-1/2 p-5 px-16 flex flex-col my-auto gap-6'>
          <h1 className='text-5xl font-semibold'> {props.title}</h1>
          <p className='md:text-lg font-light opacity-65 max-w-[500px]'>
            {props.text}
          </p>
        </div>
      </div>
    </AnimatedCard>
  );
};
