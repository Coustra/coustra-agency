import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGridWrapper(props: Props) {
  return (
    <div className={cn("relative overflow-hidden", props.className)}>
      {props.children}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}