"use client"
import { useEffect, useState } from "react";
import NavbarMenu from "./navbar.menu.component";

export default function Navbar({ fixed, className }: { fixed: boolean, className?: string }) {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hamberger, setHamberger] = useState(false);
    const toggleHamberger = () => { setHamberger(!hamberger) }

    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            current > lastScrollY ? setHidden(true) : setHidden(false)
            setLastScrollY(current);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
    return (
        <nav className={`${className} flex z-50 bg-white duration-700  ease-in w-screen data-[hidden=false]:text-gray-4 data-[hidden=true]:text-black data-[fixed=true]:fixed sticky justify-center top-0 left-0 max-h-27 p-6 data-[position=0]:bg-transparent data-[hidden=true]:animate-fade transition-all data-[hidden=true]:hidden data-[hidden=false]:animate-fade-down`} data-fixed={fixed} data-position={lastScrollY} data-hidden={hidden}>
            <div className=" flex  p-4 w-full justify-between items-center max-w-7xl font-semibold ">
                <NavbarMenu title="logo" link="/" />
                <div className=" flex gap-8 ">
                    <NavbarMenu title="หน้าหลัก" link="/" />
                    <NavbarMenu title="สินค้า" target_id="product" />
                    <NavbarMenu title="แคตตาล็อค" link="/catalog" />
                    <NavbarMenu title="บทความ" link="/blogs" />
                    <NavbarMenu title=" เกี่ยวกับเรา" link="/about" />
                </div>
            </div>
        </nav>

    )

};
