import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

interface ShinySectionTextProps {
  text: string;
  link?: string;
  scroll?: boolean;
}

export async function ShinySectionText(props: ShinySectionTextProps) {
  const { text, link } = props;
  return (
    <Link href={link || "#"} className='z-10 flex items-center justify-center'>
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
          <span>{text}</span>
          {link && (
            <ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
          )}
        </AnimatedShinyText>
      </div>
    </Link>
  );
}