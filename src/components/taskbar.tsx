import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Monitor, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export function Taskbar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t-2 border-border bg-secondary p-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="flex items-center gap-2 border-2 bg-secondary px-2 py-0.5 hover:bg-secondary/80"
          >
            <Monitor className="h-4 w-4 text-foreground" />
            <Typography.Small>Пуск</Typography.Small>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="outline"
            className="flex items-center gap-2 border-2 bg-secondary px-2 py-0.5"
          >
            <Clock className="h-4 w-4 text-foreground" />
            <Typography.Small>
              {time.toLocaleTimeString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography.Small>
          </Button>
        </div>
      </div>
    </div>
  );
}