"use client";

import React, {useState, useEffect} from 'react';

interface CountdownProps {
    targetDate: string;
}

interface TimeRemaining {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Countdown: React.FC<CountdownProps> = ({targetDate}) => {
    const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeRemaining = (): TimeRemaining => {
            const difference = +new Date(targetDate) - +new Date();
            let time: TimeRemaining = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };

            // Если время истекло, устанавливаем все значения в 0
            if (difference <= 0) {
                time = {
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                };
            }

            return time;
        };

        const timer = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [targetDate]);

    return (
        <div className="grid grid-flow-col auto-cols-max gap-5 text-center justify-between text-white">
            <div className="flex flex-col">
    			<span className="countdown font-mono text-5xl">
    			  <span>{timeRemaining.days}</span>
    			</span>
                days
            </div>
            <div className="flex flex-col">
   				 <span className="countdown font-mono text-5xl">
   				   <span>{timeRemaining.hours}</span>
   				 </span>
                hours
            </div>
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span>{timeRemaining.minutes}</span>
                </span>
                min
            </div>
            <div className="flex flex-col">
                <span className="countdown font-mono text-5xl">
                  <span>{timeRemaining.seconds}</span>
                </span>
                sec
            </div>
        </div>
    );
};

export default Countdown;
