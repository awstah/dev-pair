import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import GoogleSignin from "@/components/global/google-auth";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

async function Page() {
    const session = await getSession();
    if (session?.user) {
        return redirect("/rooms");
    }
    return (
        <div className="container flex items-center justify-center">
            <div className="mt-20">
                <Card className="w-[400px]">
                    <CardHeader>
                        <CardTitle>Sign in</CardTitle>
                        <CardDescription>
                            Login with google and enjoy the pair programming
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <GoogleSignin />
                    </CardContent>
                    <CardFooter className="flex justify-between"></CardFooter>
                </Card>
            </div>
        </div>
    );
}

export default Page;
