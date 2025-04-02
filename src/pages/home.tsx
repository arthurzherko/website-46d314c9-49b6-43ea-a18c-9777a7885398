import { useState } from "react";
import { Window } from "@/components/window";
import { Taskbar } from "@/components/taskbar";
import { Typography } from "@/components/ui/typography";
import { Button98 } from "@/components/button-98";
import { Menu98 } from "@/components/menu-98";
import { Computer, Folder, HardDrive, FileText, Settings } from "lucide-react";

export function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);

  const menuItems = [
    {
      label: "Мой компьютер",
      icon: <Computer className="h-4 w-4 text-foreground" />,
      onClick: () => {},
    },
    {
      label: "Проводник",
      icon: <Folder className="h-4 w-4 text-foreground" />,
      onClick: () => {},
    },
    {
      label: "Документы",
      icon: <FileText className="h-4 w-4 text-foreground" />,
      onClick: () => {},
    },
  ];

  const systemItems = [
    {
      label: "Настройки",
      icon: <Settings className="h-4 w-4 text-foreground" />,
      onClick: () => {},
    },
    {
      label: "Диск C:",
      icon: <HardDrive className="h-4 w-4 text-foreground" />,
      onClick: () => {},
    },
  ];

  return (
    <div className="min-h-screen pb-12">
      <div className="grid gap-4 p-4">
        {showWelcome && (
          <Window
            title="Добро пожаловать"
            onClose={() => setShowWelcome(false)}
            className="mx-auto"
          >
            <div className="flex flex-col gap-4">
              <Typography.H2>Добро пожаловать в Windows 98!</Typography.H2>
              <Typography.P>
                Этот сайт создан в стиле классической операционной системы Windows
                98. Здесь вы найдете знакомый интерфейс и ностальгическую
                атмосферу.
              </Typography.P>
              <div className="flex gap-2">
                <Button98 onClick={() => setShowAbout(true)}>О системе</Button98>
                <Button98 onClick={() => setShowWelcome(false)}>Закрыть</Button98>
              </div>
            </div>
          </Window>
        )}

        {showAbout && (
          <Window
            title="О системе"
            onClose={() => setShowAbout(false)}
            className="mx-auto"
          >
            <div className="flex flex-col gap-4">
              <Typography.H3>Windows 98</Typography.H3>
              <Typography.P>
                Windows 98 - операционная система, выпущенная Microsoft 25 июня
                1998 года. Она стала важной вехой в истории персональных
                компьютеров, представив множество инноваций, включая улучшенную
                поддержку USB и интеграцию с Internet Explorer.
              </Typography.P>
              <Button98 onClick={() => setShowAbout(false)}>OK</Button98>
            </div>
          </Window>
        )}

        <div className="fixed left-4 top-4 flex flex-col gap-4">
          <Menu98 trigger="Программы" items={menuItems} />
          <Menu98 trigger="Система" items={systemItems} />
        </div>
      </div>

      <Taskbar />
    </div>
  );
}