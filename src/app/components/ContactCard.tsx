import { AnimatedCard } from "@/components/ui/AnimatedCard";
import React from "react";
import { HeadlineSection } from "./HeadlineSection";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";

export const ContactCard = () => {
  return (
    <AnimatedCard>
      <CardContent className='py-20'>
        <div className='max-w-[800px] mx-auto text-center flex items-center justify-center flex-col gap-5'>
          <h3 className='text-orange-400 text-lg tracking-wider'>Meet us in</h3>
          <h2 className='md:text-4xl text-3xl font-semibold tracking-wide leading-tight'>
            Shanghai, Hong Kong, New York, Barcelona, London and Amsterdam.
          </h2>
          <p className='md:text-lg font-light opacity-65 max-w-[500px]'>
            We currently only incubate our own ideas, but feel free to drop us
            an email{" "}
            <span className='font-medium hover:underline'>
              <Link href={"mailto:contact@theblank.studio"}>
                contact@theblank.studio
              </Link>
            </span>
          </p>
        </div>{" "}
      </CardContent>
    </AnimatedCard>
  );
};
