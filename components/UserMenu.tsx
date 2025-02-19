import React from "react";
import { ChevronsUpDown, LogOut, Settings, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserMenu() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button className="w-full rounded-md p-[6px]  bg-sidebar-background text-sidebar-foreground  flex justify-between items-center ">
          <div className="flex gap-2 items-center">
            <div
              className="w-8 h-8 rounded-md"
              style={{
                background: `linear-gradient(135deg, hsl(327.5, 80%, 60%), hsl(27.5, 80%, 60%))`,
              }}
            ></div>
            <div className="flex flex-col text-wrap items-start">
              <h5 className="capitalize font-[500] text-[14px]">
                Azeez Ahameen
              </h5>
              <h6 className="text-subtle text-wrap text-[13px] mt-[-5px]">
                alhameenn@mail.com
              </h6>
            </div>
          </div>
          <ChevronsUpDown size={14} className="mr-1" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuItem>
          <LogOut />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
