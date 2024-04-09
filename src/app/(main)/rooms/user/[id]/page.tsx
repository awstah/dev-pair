import RoomCard from "@/components/global/room-card";
import { Button } from "@/components/ui/button";
import { getRoomsByUserId } from "@/lib/queries";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const rooms = await getRoomsByUserId(id);
    if (rooms.length === 0) return <div>No rooms found</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between">
                <h4 className="font-bold text-3xl">My Rooms</h4>
                <Link href="/new-room">
                    {" "}
                    <Button variant="outline" size="icon">
                        <Plus />
                    </Button>
                </Link>
            </div>
            {rooms?.map((room) => (
                <RoomCard key={room.id} room={room} />
            ))}
        </div>
    );
}

export default Page;
