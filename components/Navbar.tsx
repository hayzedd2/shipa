"use client";

import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Bell, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useNotifications } from "@/store/useNotifications";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const notifications = useNotifications((s) => s.notifications);
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
          <DropdownMenu>
            <DropdownMenuTrigger>
              {" "}
              <Button variant="ghost" size="icon" className="h-7 w-7 ">
                <div className="relative">
                  {notifications.length > 0 && (
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 absolute z-50 right-0 top-[-4]"></div>
                  )}
                  <Bell />
                </div>
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-sidebar-background text-sidebar-foreground mx-3  w-[300px] rounded-[12px] p-0">
              <div className="py-2">
                <div>
                  <h2 className="font-[500] py-2 border-b px-3">Notifications ({notifications.length})</h2>
                </div>
                {notifications.length > 0 ? (
                  <div>
                    {notifications.map((notification, i) => (
                      <h6 className={`${i != notifications.length -1 ? "dotted-down": ""} text-[13px] py-2 px-3`}>
                        {notification.message}
                      </h6>
                    ))}
                  </div>
                ) : (
                  <div>No notification for now</div>
                )}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
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
