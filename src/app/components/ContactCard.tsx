/* eslint-disable react/no-unescaped-entities */
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import React from "react";
import { HeadlineSection } from "./HeadlineSection";
import { CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ShinySectionText } from "@/components/ui/ShinySectionText";

export const ContactCard = () => {
  return (
    <AnimatedCard>
      <CardContent className='py-20'>
        <div className='max-w-[800px] mx-auto text-center flex items-center justify-center flex-col gap-5'>
          <ShinySectionText text='🫵 Have an idea?' />
          <h2 className='md:text-4xl text-3xl font-semibold tracking-wide leading-tight'>
            We love ideas.
          </h2>
          <p className='md:text-lg font-light opacity-65 max-w-[500px]'>
            We love building them even more. So if you have a project in mind,
            don't hesitate to reach out to us.{" "}
            <span className='font-medium hover:underline'>
              <Link href={"mailto:contact@theblank.studio"}>
                dev@coustra.com
              </Link>
            </span>
          </p>
        </div>{" "}
      </CardContent>
    </AnimatedCard>
  );
};
