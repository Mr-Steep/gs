'use client'
import Newsletter from "./components/newsletter";
import Particles from "./components/particles";
import Countdown from "@/app/components/countdown";
import React, { useState, useEffect } from 'react';

const navigation = [
    {name: "Dashboard", href: "/dashboard"},
    // {name: "About", href: "/about"},
];

const TypingEffect: React.FC<{ text: string }> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(prevText => prevText + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Интервал между добавлением символов

        return () => {
            clearInterval(interval); // Очистка интервала при размонтировании компонента
        };
    }, [text]);

    return <div dangerouslySetInnerHTML={{ __html: displayedText.replace(/\/\\/g, '&#92;').replace(/\//g, '<br>') }} />;
};



export default function Home() {
    return (
        <div className="font-mono flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tr from-black via-zinc-600/20 to-black">
            {/*<nav className="my-8 animate-fade-in">*/}
            {/*    <ul className="flex items-center justify-center gap-4">*/}
            {/*        {navigation.map((item) => (*/}
            {/*            <Link*/}
            {/*                key={item.href}*/}
            {/*                href={item.href}*/}
            {/*                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"*/}
            {/*            >*/}
            {/*                {item.name}*/}
            {/*            </Link>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={500}
                staticity={20}
                ease={30}
            />

            <div className="mb-6 text-center animate-fade-in">
                <h2 className="text-xs text-zinc-300">
                    Hello World!
                </h2>
            </div>



            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>

            <h1 className="z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
                Global Stake
            </h1>
            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"/>

            <div className="text-center animate-fade-in  mt-5 ">
                <Countdown targetDate={'2023-09-01'}/>
            </div>

            <div className="text-center animate-fade-in w-full sm:w-5/6 md:w-[32rem] mt-5 ">
               <Newsletter/>
            </div>
            <div className="mb-10 text-center animate-fade-in mt-3">
                <h2 className="text-xs text-zinc-300">
                    <TypingEffect text="   Time to change the vision for the financial world... / The Next Era of Cryptocurrency Is Coming Soon!" />
                </h2>
            </div>



        </div>
    );
}
