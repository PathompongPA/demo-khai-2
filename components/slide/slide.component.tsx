"use client"
import { ReactNode, useEffect, useState } from "react";
import Counter from "./slide.counter.component";

type prop = {
    children: ReactNode
    interval?: number

}
export default function Slide({ children, interval = 6000 }: prop) {
    const [counterNumber, setCounterNumber] = useState(0);
    const on = {
        setIndex: (counterNumber: number): void => { setCounterNumber(counterNumber); }
    }

    const items = Array.isArray(children) ? children : [children];
    const count = items.map((item, _index) =>
        <Counter
            key={_index}
            onSetCountNumber={on.setIndex}
            index={_index}
            countNumber={counterNumber}
        />
    )

    useEffect(() => {
        const timer = setInterval(() => {
            setCounterNumber((prev) => (prev + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval]);

    return children && (
        <div className="relative h-screen w-full ">
            {items[counterNumber]}
            <div className=" flex flex-row gap-2 justify-center p-8 absolute bottom-16 left-1/2 -translate-x-1/2  ">
                {count}
            </div>
        </div>
    )
};
