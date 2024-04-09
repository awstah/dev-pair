"use server";

import { db } from "./db";
import { getSession } from "./auth";
import { StreamChat } from "stream-chat";

export const getUserDetails = async () => {
    const session = await getSession();
    if (!session) {
        return;
    }
    const user = await db.user.findFirst({
        where: {
            email: session.user?.email,
        },
    });

    return user;
};

export const updateRoomStatus = async (id: string) => {
    const response = await db.room.update({
        where: {
            id,
        },
        data: {
            status: "CLOSE",
        },
    });
    return response;
};

export const initRoom = async (room: {
    name: string;
    description: string;
    tags: string;
    githubRepo: string;
    id?: string;
    userId: string;
}) => {
    const response = await db.room.upsert({
        where: { id: room.id },
        update: room,
        create: {
            name: room.name,
            description: room.description,
            tags: room.tags,
            githubRepo: room.githubRepo,
            userId: room?.userId,
        },
    });

    return response;
};

export const getRooms = async () => {
    const response = await db.room.findMany({
        where: {
            status: "OPEN",
        },
        include: {
            user: true,
        },
    });
    return response;
};

export const getRoomsByUserId = async (id: string) => {
    const response = await db.room.findMany({
        where: {
            userId: id,
        },
        include: {
            user: true,
        },
    });
    return response;
};

export const getRoomsById = async (id: string) => {
    const response = await db.room.findFirst({
        where: { id },
    });
    return response;
};
export const getRoomsByIdWithUserDetails = async (id: string) => {
    const response = await db.room.findFirst({
        where: { id },
        include: {
            user: true,
        },
    });
    return response;
};

export const deleteRoomById = async (id: string) => {
    const response = await db.room.delete({
        where: { id },
    });
    return response;
};

export const generateToken = async () => {
    const session = await getSession();
    if (!session) {
        throw new Error("No session found");
    }
    const apiKey = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
    const apiSecret = process.env.GET_STREAM_SECRET_KEY!;
    const sercerClient = StreamChat.getInstance(apiKey, apiSecret);
    const token = sercerClient.createToken(session.user.id);
    return token;
};
