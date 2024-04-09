"use client";
import Link from "next/link";
import React from "react";
import { Projector } from "lucide-react";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { useSession } from "next-auth/react";
import UserButton from "./user-button";

function Navbar() {
    const session = useSession();
    return (
        <div className="w-full h-16 mb-2 flex items-center container justify-between">
            <Link
                href="/"
                className="group flex items-start hover:bg-primary hover:px-3 transform ease-in-out duration-150 rounded-3xl hover:-rotate-12"
            >
                <Projector className="group-hover:text-white dark:text-white" />
                <h4 className="font-bold text-lg group-hover:text-white dark:text-white">
                    Dev_Pair
                </h4>
            </Link>
            <div className="space-x-3 flex items-center">
                <ModeToggle />
                <>
                    {session && session.data ? (
                        <UserButton />
                    ) : (
                        <Link href="/auth">
                            <Button className="text-sm font-semibold">
                                Sign in
                            </Button>
                        </Link>
                    )}
                </>
            </div>
        </div>
    );
}

export default Navbar;
