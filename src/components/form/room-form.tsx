"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { initRoom, getUserDetails, deleteRoomById } from "@/lib/queries";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import moment from "moment";
import { Room } from "@prisma/client";
import { v4 } from "uuid";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
    name: z.string().min(1).max(50),
    description: z.string().min(100),
    githubRepo: z.string().min(1).max(50),
    tags: z.string().min(1).max(50),
});

type Props = {
    data?: Room;
};

const RoomForm = ({ data }: Props) => {
    const [isLoading, setisLoading] = useState(false);
    const [roomName, setroomName] = useState("");
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: data?.name || "",
            description: data?.description || "",
            githubRepo: data?.githubRepo || "",
            tags: data?.tags || "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setisLoading(true);
        const user = await getUserDetails();
        if (!user) {
            return;
        }
        try {
            const roomData = {
                id: data?.id || v4(),
                userId: user.id,
                name: values.name,
                description: values.description,
                tags: values.tags,
                githubRepo: values.githubRepo,
                createdAt: data?.createdAt,
                updatedAt: data?.updatedAt,
            };
            const room = await initRoom(roomData);
            setisLoading(false);
            toast("Room has been saved!", {
                description: `${moment(room?.createdAt)}`,
            });
            router.push("/rooms");
        } catch (error) {
            toast("Room has been saved!", {
                description: `${error}`,
            });
        }
    }

    const deleteRoomHandler = async () => {
        const id = data?.id || "";
        await deleteRoomById(id);
        toast("Room has been deleted", {
            description: `${moment(Date())}`,
        });
        router.push("/rooms");
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Dev_Pair Is Awesome"
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your public room name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        rows={5}
                                        {...field}
                                        placeholder="Im working on a side project, come join me"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Please describe what you are be coding on
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="githubRepo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Github Repo</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="https://github.com/@username/@project_repo"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Please put a link to the project you are
                                    working on
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="typescript, nextjs, tailwind"
                                    />
                                </FormControl>
                                <FormDescription>
                                    List your programming languages, frameworks,
                                    libraries so people can find you content
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" disabled={isLoading}>
                        {isLoading && (
                            <ReloadIcon className="w-4 h-4 animate-spin" />
                        )}
                        Save Room Data
                    </Button>
                </form>
            </Form>
            {data && (
                <div className="flex items-center justify-between p-8 bg-destructive-foreground rounded-md">
                    <h4 className="font-semibold text-destructive">
                        Delete this room?
                    </h4>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="destructive">Delete</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Are you absolutely sure?
                                </DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will
                                    permanently delete your room and remove your
                                    data from our servers. To delete type{" "}
                                    <span className="font-semibold text-black">
                                        {data.name}
                                    </span>
                                    <Input
                                        value={roomName}
                                        onChange={(e) =>
                                            setroomName(e.target.value)
                                        }
                                        placeholder="Enter room name"
                                        className="my-2"
                                    />
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                                <Button variant="outline">Cancel</Button>
                                <Button
                                    variant="destructive"
                                    disabled={roomName !== data.name}
                                    onClick={deleteRoomHandler}
                                >
                                    Delete
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            )}
        </>
    );
};

export default RoomForm;
