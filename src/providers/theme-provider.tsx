"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sooner } from "@/components/ui/sonner";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            <>
                {children}
                <Toaster />
                <Sooner />
            </>
        </NextThemesProvider>
    );
}
