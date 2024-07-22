import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export const Logo = () => {
  return (
    <div className='flex items-center gap-2 flex-row'>
      <Avatar className='w-6 h-6'>
        <AvatarImage className='object-cover' src='/branding/logo.png' />
        <AvatarFallback>CT</AvatarFallback>
      </Avatar>
      <p className='font-light'>Coustra</p>
    </div>
  );
};
