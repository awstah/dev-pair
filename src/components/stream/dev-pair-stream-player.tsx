"use client";
import React, { useEffect, useState } from "react";
import {
    Call,
    CallControls,
    CallParticipantsList,
    SpeakerLayout,
    StreamCall,
    StreamTheme,
    StreamVideo,
    StreamVideoClient,
    User,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { generateToken } from "@/lib/queries";
import { useRouter } from "next/navigation";

const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;

function DevPairStreamPlayer({ data }: any) {
    const [client, setclient] = useState<StreamVideoClient | null>(null);
    const [call, setcall] = useState<Call | null>(null);

    const router = useRouter();
    if (!data) return;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (!data.id) return;
        const userId = data.user.id;
        const client = new StreamVideoClient({
            apiKey,
            user: { id: userId, name: data.user.name, image: data.user.image },
            tokenProvider: () => generateToken(),
        });
        const call = client.call("default", data.id);

        call.join({ create: true });
        setclient(client);
        setcall(call);
        return () => {
            call.leave()
                .then(() => client.disconnectUser())
                .catch(console.error);
        };
    }, [data, data.user]);

    return (
        client &&
        call && (
            <div className="w-full">
                <StreamVideo client={client}>
                    <StreamTheme>
                        <StreamCall call={call}>
                            <SpeakerLayout />
                            <CallControls
                                onLeave={() => {
                                    router.push("/rooms");
                                }}
                            />
                            <CallParticipantsList onClose={() => undefined} />
                        </StreamCall>
                    </StreamTheme>
                </StreamVideo>
            </div>
        )
    );
}

export default DevPairStreamPlayer;
