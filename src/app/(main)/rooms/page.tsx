import RoomCard from "@/components/global/room-card";
import { getRooms } from "@/lib/queries";
import React from "react";

async function Page() {
    const rooms = await getRooms();
    if (!rooms) {
        return <div>No rooms are here</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between">
                <h4 className="font-bold text-3xl">Rooms</h4>
            </div>
            {rooms?.map((room) => (
                <RoomCard key={room.id} room={room} />
            ))}
        </div>
    );
}

export default Page;
