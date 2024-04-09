import RoomForm from "@/components/form/room-form";
import React from "react";

function Page() {
    return (
        <div className="space-y-6 mt-6">
            <div className="flex justify-between mb-8">
                <h4 className="font-bold text-3xl">New Room</h4>
            </div>
            <RoomForm />
        </div>
    );
}

export default Page;
