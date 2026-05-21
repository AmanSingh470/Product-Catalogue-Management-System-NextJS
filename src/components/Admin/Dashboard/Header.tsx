"use client"
import ParallelBarIcon from "@/components/Icons/ParallelBarIcon";
import { useToggleSidebar } from "@/context/admin/sidebar-context";
import DropDownIcon from "@/components/Icons/DropDownIcon";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
    const { isSidebarOpen, openSidebar, closeSidebar } = useToggleSidebar();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropDownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-center w-34">
                <div>
                    <button
                        className="cursor-pointer"
                        onClick={() => isSidebarOpen ? closeSidebar() : openSidebar()}>
                        <ParallelBarIcon />
                    </button>
                </div>
                <div className="font-medium">Dashboard</div>
            </div>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsDropDownOpen(true)} ref={dropdownRef}>
                <div className="mr-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-[16px] font-[700] text-white shadow-md ring-2 ring-[#f3f3f3]">
                    AS
                </div>
                <div className="ml-1 flex items-center relative">
                    <div className="font-medium">Aman Singh</div>
                    <div><DropDownIcon /></div>
                    <div className={`${isDropDownOpen ? "" : "hidden"} absolute right-0 top-full mt-2 w-52 bg-black rounded-md shadow-lg text-white`}>
                        <Link className="flex w-full px-4 py-3 text-left text-sm hover:bg-red-500 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)] cursor-pointer"
                            href="/admin/profile" prefetch={false}
                        >
                            Profile
                        </Link>
                        <Link className="flex w-full px-4 py-3 text-left text-sm hover:bg-red-500 shadow-[inset_0_1px_3px_rgba(0,0,0,0.12)] cursor-pointer"
                            href="/admin/logout" prefetch={false}
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
