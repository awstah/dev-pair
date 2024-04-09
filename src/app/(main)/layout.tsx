"use client";

import Sidebar from "@/components/global/sidebar";

export default function RoomsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex container">
            <aside className="hidden md:block w-[10rem] overflow-hidden border-r">
                <Sidebar />
            </aside>
            <main className="flex-grow px-4">{children}</main>
        </div>
    );
}
