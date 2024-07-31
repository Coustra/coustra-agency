import { ShinySectionText } from "@/components/ui/ShinySectionText";
import React from "react";

interface Props {
  sectionTitle?: string;
  text: string;
  title: string;
}

export const HeadlineSection = (props: Props) => {
  return (
    <div className='w-full'>
      <div className='max-w-[850px] mx-auto text-center flex items-center justify-center flex-col gap-5'>
        {props.sectionTitle && (
          <ShinySectionText text={props.sectionTitle} scroll={false} />
        )}
        <h2 className='md:text-4xl text-3xl font-semibold tracking-wide leading-tight'>
          {props.title}
        </h2>
        <p className='md:text-lg font-light opacity-65 max-w-[500px]'>
          {props.text}
        </p>
      </div>
    </div>
  );
};
