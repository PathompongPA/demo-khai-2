"use client"
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import useReveal from "./reveal.hook";

const revealStyle = cva(
    [
        "data-[in-view=true]:[animation-fill-mode:both]",
        "data-[in-view=false]:opacity-0",
    ], {
    variants: {
        delay: {
            "0": "data-[in-view=true]:[animation-delay:0ms]",
            "1": "data-[in-view=true]:[animation-delay:500ms]",
            "2": "data-[in-view=true]:[animation-delay:700ms]",
            "3": "data-[in-view=true]:[animation-delay:1200ms]",
            "4": "data-[in-view=true]:[animation-delay:1500ms]",
        },
        type: {
            "fade": "data-[in-view=true]:animate-fade",
            "fade-up": "data-[in-view=true]:animate-fade-up",
            "fade-down": "data-[in-view=true]:animate-fade-down",
            "fade-left": "data-[in-view=true]:animate-fade-left",
            "fade-right": "data-[in-view=true]:animate-fade-left",
        }
    }, defaultVariants: {
        delay: "0",
        type: "fade"
    }

})
type props = {
    children: ReactNode,
    className?: string,
} & VariantProps<typeof revealStyle>;

export default function Reveal({ children, className, delay, type }: props) {
    const [ref, inView] = useReveal();
    return (
        <div className={revealStyle({ className, delay, type })} data-in-view={inView} ref={ref}>
            {children}
        </div>
    )
};
