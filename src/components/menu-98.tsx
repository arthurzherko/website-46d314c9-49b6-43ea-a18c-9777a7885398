import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Typography } from "@/components/ui/typography";
import { type ReactNode } from "react";

interface Menu98Props {
  trigger: ReactNode;
  items: {
    label: string;
    onClick: () => void;
    icon?: ReactNode;
  }[];
}

export function Menu98({ trigger, items }: Menu98Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-2 border-border bg-secondary px-4 py-2 hover:bg-secondary/80"
        >
          {trigger}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-48 border-2 border-border bg-secondary p-1">
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className="flex items-center gap-2 rounded-none focus:bg-primary focus:text-primary-foreground"
            onClick={item.onClick}
          >
            {item.icon}
            <Typography.Small>{item.label}</Typography.Small>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}