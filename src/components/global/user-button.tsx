"use client";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";

function UserButton() {
    const session = useSession();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {" "}
                <Avatar>
                    <AvatarImage src={`${session.data?.user.image}`} />
                    {session.data?.user && (
                        <AvatarFallback>
                            {session.data?.user.name?.charAt(0)}
                        </AvatarFallback>
                    )}
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <button
                        onClick={() => {
                            signOut();
                        }}
                    >
                        Signout
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserButton;
