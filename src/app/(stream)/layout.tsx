"use client";

export default function StreamLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="-mt-16">{children}</main>;
}
