import DevPairStreamPlayer from "@/components/stream/dev-pair-stream-player";
import { getRoomsByIdWithUserDetails } from "@/lib/queries";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TagsList } from "@/components/global/tag-list";
import Link from "next/link";
import { Github } from "lucide-react";

async function Page({ params }: { params: { id: string } }) {
    const room = await getRoomsByIdWithUserDetails(params.id);

    return (
        <div className="pt-16 relative h-screen overflow-hidden">
            <div className="container">
                <DevPairStreamPlayer data={room} />
            </div>
            <div className="fixed bottom-5 right-5">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>{room?.name}</CardTitle>
                        <CardDescription>
                            <div className="text-ellipsis overflow-hidden h-[200px]">
                                {room?.description}
                            </div>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link target="_blank" href={`${room?.githubRepo}`}>
                            <Github />
                        </Link>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <TagsList tags={room?.tags} />
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Page;
