import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/global/mode-toggle";

function Page() {
    return (
        <div className="space-y-6 mt-6">
            <div className="flex justify-between mb-8">
                <h4 className="font-bold text-3xl">Settings</h4>
            </div>
            <Table>
                <TableCaption>Manage your settings here.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[400px]"></TableHead>

                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">
                            Logout your account.
                        </TableCell>

                        <TableCell className="text-right">
                            <Button variant="destructive">Logout</Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Set Theme</TableCell>

                        <TableCell className="text-right">
                            <ModeToggle large={true} />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}

export default Page;
