"use client";
import { HeroHighlight, Highlight } from "@/components/global/hero-highlight";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";

export default function Home() {
    return (
        <main className="container">
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
            <section>
                <h4 className="text-center text-gray-400">
                    This site is just basically showcase or hobby project
                </h4>
                <p className="text-center text-sm text-gray-400">
                    You can contact me on following:
                </p>
                <div className="flex items-center justify-center space-x-2 mt-4">
                    <Link href="https://github.com/awstah" target="_blank">
                        <GitHubLogoIcon className="w-8 h-8" />
                    </Link>
                    <Link
                        href="https://www.upwork.com/freelancers/mowaistr"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2rem"
                            height="2rem"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M17.47 6.07a4.54 4.54 0 0 0-4.38 3.69a19.9 19.9 0 0 1-2.28-4.9H8.55v6a2.14 2.14 0 1 1-4.28 0v-6L2 4.91v6a4.4 4.4 0 1 0 8.8-.05v-1a20.55 20.55 0 0 0 1.65 2.7l-1.38 6.61h2.32l1-4.81a5.61 5.61 0 0 0 3.11.89a4.57 4.57 0 0 0 0-9.14zm0 6.83a4.09 4.09 0 0 1-2.55-1l.23-.91v-.05c.16-1 .66-2.6 2.35-2.6a2.25 2.25 0 0 1 2.27 2.24a2.41 2.41 0 0 1-2.27 2.32z"
                            />
                        </svg>
                    </Link>
                    <Link
                        href="https://www.instagram.com/iawaistahir/"
                        target="_blank"
                    >
                        <InstagramLogoIcon className="w-8 h-8" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
