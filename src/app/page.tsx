"use client";
import { HeroHighlight, Highlight } from "@/components/global/hero-highlight";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <section>
                <HeroHighlight>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-5xl leading-relaxed lg:leading-snug text-center mx-auto "
                    >
                        Largest pair programing site. Connect with devs
                        <Highlight className="text-black dark:text-white">
                            and solve the programing issue
                        </Highlight>
                    </motion.h1>
                    <div className="w-full flex justify-center mt-10">
                        <Link href="/auth">
                            <Button size="lg">Get Started</Button>
                        </Link>
                    </div>
                </HeroHighlight>
            </section>
        </main>
    );
}
