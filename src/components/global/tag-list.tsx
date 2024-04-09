"use client";

import { Badge } from "../ui/badge";

export function TagsList({ tags }: { tags: string | undefined }) {
    const tagsArray = tags?.split(", ");
    return (
        <div className="flex gap-2 flex-wrap">
            {tagsArray?.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
            ))}
        </div>
    );
}
