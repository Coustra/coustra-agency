import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const SectionWrapper = (props: Props) => {
  return (
    <section className={cn("w-full my-12", props.className)}>
      {props.children}
    </section>
  );
};