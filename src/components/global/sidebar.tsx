import {
    PackagePlus,
    Projector,
    Settings,
    Telescope,
    User,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

function Sidebar() {
    const session = useSession();
    const userId = session.data?.user.id;
    const menus = [
        {
            label: "Rooms",
            link: "/rooms",
            icon: <Projector strokeWidth={1.3} className="w-auto h-5" />,
        },
        {
            label: "My Rooms",
            link: `/rooms/user/${userId}`, //wip add user id here
            icon: <Telescope strokeWidth={1.3} className="w-auto h-5" />,
        },
        {
            label: "New Room",
            link: "/rooms/new-room",
            icon: <PackagePlus strokeWidth={1.3} className="w-auto h-5" />,
        },
        {
            label: "Settings",
            link: "/settings",
            icon: <Settings strokeWidth={1.3} className="w-auto h-5" />,
        },
    ];
    return (
        <div className="w-full h-screen overflow-hidden">
            <div className="grid gap-6 mt-8">
                {menus.map((m: any) => (
                    <Link
                        href={m.link}
                        key={m.link}
                        className="flex items-center space-x-2 text-sm hover:underline underline-offset-1"
                    >
                        <span>{m.icon}</span>
                        <span>{m.label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
