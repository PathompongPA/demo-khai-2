import { Navbar } from "@/components";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col items-center w-full *:w-full">
            <Navbar fixed={false} className="" />
            {children}
        </div>
    )

};
