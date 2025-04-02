import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

interface Button98Props extends ComponentProps<typeof Button> {
  active?: boolean;
}

export function Button98({ className, active, ...props }: Button98Props) {
  return (
    <Button
      variant="outline"
      className={cn(
        "border-2 border-border bg-secondary px-4 py-2 shadow-[inset_-1px_-1px_0_0_#000000] hover:bg-secondary/80",
        active && "shadow-[inset_1px_1px_0_0_#000000]",
        className
      )}
      {...props}
    />
  );
}