// src/components/sharedComponents.tsx
import React, { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

export const Code = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 hover:bg-accent/50 transition-colors border border-accent px-1 py-0.5 rounded-sm text-primary font-mono text-sm text-nowrap tracking-[-0.015em]",
        className
      )}
      {...props}
    />
  );
};

export const DefaultIcon = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Icon>) => {
  return (
    <Icon
      className={cn(
        "inline align-middle -mt-[0.18em]",
        className
      )}
      {...props}
    />
  );
};