import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<typeof Link> {
  className?: string;
  variant?: "large" | "small" | "default";
  children: React.ReactNode;
}

export const defaultLinkStyles = (style?: NavLinkProps["variant"]): string => {
  let cssStyles = "";
  switch (style) {
    case "large":
      cssStyles =
        "text-lg font-medium text-[#333333] hover:opacity-75 duration-150";
      break;
    case "small":
      cssStyles =
        "text-sm font-medium text-[#333333] hover:opacity-75 duration-150";
      break;
    default:
      cssStyles = "font-medium text-[#333333] hover:opacity-75 duration-150";
      break;
  }
  return cssStyles;
};

export const NavLink = (props: NavLinkProps) => {
  const { className, variant } = props;
  return (
    <Link
      href={"/"}
      className={cn(defaultLinkStyles(variant), className)}
      role='link'
    >
      {props.children}
    </Link>
  );
};
