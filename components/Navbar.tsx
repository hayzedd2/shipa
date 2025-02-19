"use client";

import React from "react";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Bell, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { open, toggleSidebar } = useSidebar();
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex h-14 shrink-0">
      <div className="flex w-full justify-between items-center  gap-2 dotted-down px-3">
        <div className="flex gap-1 items-center">
          <SidebarTrigger className="-ml-1" />
          <h3 className="font-[500] text-[1.1rem] text-sidebar-foreground mt-[3px]">
            Dashboard
          </h3>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Bell />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            size="icon"
            className="h-7 w-7"
          >
            {theme == "dark" ? <Sun /> : <Moon />}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
