import React from "react";

export const HeadlineSection = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[850px] mx-auto text-center flex items-center justify-center flex-col gap-5'>
        <h3 className='text-orange-400 text-lg tracking-wider'>About us</h3>
        <h2 className='md:text-4xl text-3xl font-semibold tracking-wide leading-tight'>
          A true creator company at heart.
        </h2>
        <p className='md:text-lg font-light opacity-65 max-w-[500px]'>
          A company of third culture thinkers building simple but impactful
          community-driven software solutions based out of Hong Kong, Barcelona,
          Amsterdam, London, Shanghai and New York
        </p>
      </div>
    </div>
  );
};
