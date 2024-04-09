"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { AnimatedTooltip } from "./animated-tooltip";
import { Github, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { updateRoomStatus } from "@/lib/queries";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

function RoomCard({ room }: any) {
    const session = useSession();
    const userId = session.data?.user.id;

    const closeRoomHandler = async () => {
        const roomClose = await updateRoomStatus(room.id);
        if (roomClose) {
            toast("Room Closed sucessfully!");
        }
    };

    return (
        <Card className="w-[100%]">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <AnimatedTooltip items={[room.user]} />
                        <CardTitle>{room.name}</CardTitle>
                        <p className="text-xs text-primary">
                            {room.user?.email}
                        </p>
                    </div>
                    {userId === room.userId && (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <MoreHorizontal />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    Room settings
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Link href={`/rooms/${room.id}`}>
                                        Edit Room
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={closeRoomHandler}>
                                    Close Issue
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    )}
                </div>
                <CardDescription className="max-w-3xl">
                    {room.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-baseline space-x-2">
                        <div className="w-10 h-10 bg-indigo-500 text-white  dark:bg-indigo-700 flex items-center justify-center rounded-3xl">
                            <Github />
                        </div>
                        <Link
                            href={room.githubRepo}
                            target="_blank"
                            className="text-xs font-semibold underline"
                        >
                            Github Link
                        </Link>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Link href={`/stream/${room.id}`}>
                    <Button>Join Room</Button>
                </Link>
            </CardFooter>
        </Card>
    );
}

export default RoomCard;
