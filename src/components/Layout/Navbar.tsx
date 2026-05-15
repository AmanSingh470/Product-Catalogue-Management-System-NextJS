"use client"
import { useScrollNavbar } from "@/hooks/useScrollNavbar";
import BrandLogo from "@/components/Icons/BrandLogo";
import Link from "next/link";

interface NavbarProps {
    mode?: "" | "home";
}

export default function Navbar({ mode = "" }: NavbarProps) {
    const scrolled = useScrollNavbar();

    if (mode === "home") {
        return (
            <nav id="navbar"
                className={`flex justify-between fixed w-full top-0 z-50 h-15 transition-all duration-300 ${scrolled ? "bg-white" : "bg-transparent"}`}>
                <Link className="p-3 flex justify-between items-center ml-5 cursor-pointer" href="/">
                    <div className={`mr-2 ${scrolled ? "text-red-500" : "text-white"}`}>
                        <BrandLogo />
                    </div>
                    <div>
                        <h1 id="main-heading"
                            className={`text-sm sm:text-xl md:text-xl lg:text-xl font-bold ${scrolled ? "text-red-500" : "text-white"}`}>
                            Product Catalogue
                        </h1>
                        <h2 className={`text-sm font-light ${scrolled ? "text-red-500" : "text-white"}`}>Management System</h2>
                    </div>
                </Link>
            </nav>
        )
    }
    return (
        <nav id="navbar"
            className={`flex justify-between sticky w-full top-0 z-50 h-15 transition-all duration-300 ${scrolled ? "bg-white" : "bg-transparent"}`}>
            <Link className="p-3 flex justify-between items-center ml-5 cursor-pointer" href="/">
                <div className={`mr-2 text-red-500`}>
                    <BrandLogo />
                </div>
                <div>
                    <h1 id="main-heading"
                        className={`text-sm sm:text-xl md:text-xl lg:text-xl font-bold text-red-500`}>
                        Product Catalogue
                    </h1>
                    <h2 className={`text-sm font-light text-red-500`}>Management System</h2>
                </div>
            </Link>
        </nav>
    )
}
