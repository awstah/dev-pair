"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type props = {
    large?: boolean;
};
export function ModeToggle({ large }: props) {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size={!large ? "icon" : "default"}
                    className={`${!large ? "" : "space-x-2"} relative`}
                >
                    <SunIcon
                        className={`rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0  ${
                            large ? "h-9 py-2" : "h-[1.2rem] w-[1.2rem]"
                        }`}
                    />
                    <MoonIcon
                        className={` absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${
                            large ? "h-9 py-2 left-2" : "h-[1.2rem] w-[1.2rem]"
                        }`}
                    />
                    <span className={large ? "" : "sr-only"}>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
