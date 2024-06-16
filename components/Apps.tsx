"use client";
import React from "react";
import { CalendarDays, FilePenLine, Palette, SquareKanban } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Apps = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-sm">Apps</h1>
      <div className="flex flex-col w-full space-y-2 px-3 cursor-pointer">
        <Button
          variant="ghost"
          onClick={() => router.push("/calendar")}
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/calendar" && "bg-accent text-accent-foreground"
          )}
        >
          <CalendarDays className="h-5 w-5" />
          <p>Calender</p>
        </Button>
        <Button
          variant="ghost"
          onClick={() => router.push("/editor")}
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/editor" && "bg-accent text-accent-foreground"
          )}
        >
          <FilePenLine className="h-5 w-5" />
          <p>Editor</p>
        </Button>
        <Button
          onClick={() => router.push("/color-picker")}
          variant="ghost"
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/color-picker" && "bg-accent text-accent-foreground"
          )}
        >
          <Palette className="h-5 w-5" />
          <p>Color Picker</p>
        </Button>
        <Button
          onClick={() => router.push("/kanban")}
          variant="ghost"
          className={cn(
            "flex space-x-4 text-sm justify-start p-2 rounded-sm",
            pathname === "/kanban" && "bg-accent text-accent-foreground"
          )}
        >
          <SquareKanban className="h-5 w-5" />
          <p>Kanban</p>
        </Button>
      </div>
    </div>
  );
};

export default Apps;
