"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const AnimatedCard = (props: Props) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        //TODO: Investigate why this is throwing an error
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  return (
    <Card
      ref={cardRef}
      className={cn(
        "p-5 rounded-3xl shadow-lg",
        {
          "animate-scale-up": isVisible,
          "animate-scale-down": !isVisible,
        },
        props.className
      )}
    >
      {props.children}
    </Card>
  );
};
