import RoomForm from "@/components/form/room-form";
import { getRoomsById } from "@/lib/queries";
import React from "react";

async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const room = await getRoomsById(id);
    if (!room) {
        return <div>No roomavailable</div>;
    }
    return (
        <div className="space-y-6">
            <RoomForm data={room} />
        </div>
    );
}

export default Page;
