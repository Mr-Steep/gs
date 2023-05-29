import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Countdown from "@/app/components/countdown";

const navigation = [
    {name: "Dashboard", href: "/dashboard"},
    {name: "Contact", href: "/contact"},
    {name: "Login", href: "/login"},
];

export default function Home() {
    return (
        <div
            className="bg-black flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <nav className="my-8 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <div className="my-8 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500 ">
                    Hello World! <br/>
                    we working
                    to create a new application <br/>
                </h2>
            </div>

            <h1 className="z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                Global Stake
            </h1>
            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>
            <div className="my-6 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500">
                    Time to change the vision for the financial world...
                </h2>
                <h2 className="text-sm text-zinc-500">
                    The Next Era of Cryptocurrency Is Coming Soon!
                </h2>
            </div>
            <div className="text-center animate-fade-in">
                <Countdown targetDate={'2023-09-01'}/>
            </div>
        </div>
    );
}
