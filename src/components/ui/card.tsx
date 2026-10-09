import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Card({
  inverted,
  className,
  ...props
}: { inverted?: boolean } & ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6",
        inverted
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground",
        className,
      )}
      {...props}
    />
  );
}
