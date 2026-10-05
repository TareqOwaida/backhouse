import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType> = {
  as?: T;
  width?: "default" | "narrow" | "wide";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

const widths = {
  narrow: "max-w-[52rem]",
  default: "max-w-[80rem]",
  wide: "max-w-[96rem]",
};

export function Container<T extends ElementType = "div">({
  as,
  width = "default",
  className,
  ...props
}: ContainerProps<T>) {
  const Tag = as ?? "div";
  return (
    <Tag
      className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", widths[width], className)}
      {...props}
    />
  );
}
