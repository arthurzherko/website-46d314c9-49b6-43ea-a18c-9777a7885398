import { X, Minus, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
}

export function Window({
  title,
  children,
  className,
  onClose,
  onMinimize,
  onMaximize,
}: WindowProps) {
  return (
    <Card className={cn("w-full max-w-[640px] overflow-hidden", className)}>
      <div className="flex items-center justify-between bg-primary px-1 py-0.5">
        <Typography.Small className="text-primary-foreground">
          {title}
        </Typography.Small>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 hover:bg-primary-foreground/10"
            onClick={onMinimize}
          >
            <Minus className="h-3 w-3 text-primary-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 hover:bg-primary-foreground/10"
            onClick={onMaximize}
          >
            <Square className="h-3 w-3 text-primary-foreground" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 hover:bg-destructive"
            onClick={onClose}
          >
            <X className="h-3 w-3 text-primary-foreground" />
          </Button>
        </div>
      </div>
      <div className="border-2 border-t-0 border-border p-4">{children}</div>
    </Card>
  );
}