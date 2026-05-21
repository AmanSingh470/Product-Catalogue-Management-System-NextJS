"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BrandLogo from "@/components/Icons/BrandLogo";
import ProductIcon from "@/components/Icons/ProductIcon";
import CategoryIcon from "@/components/Icons/CategoryIcon";
import SegmentIcon from "@/components/Icons/SegmentIcon";
import DivisionIcon from "@/components/Icons/DivisionIcon";
import CompanyIcon from "@/components/Icons/CompanyIcon";
import ContactPersonIcon from "@/components/Icons/CompanyContactPersonIcon";
import AdminIcon from "@/components/Icons/AdminIcon";
import DashboardIcon from "@/components/Icons/DashboardIcon";
import LogoutIcon from "@/components/Icons/LogoutIcon";
import CrossIcon from "../Icons/CrossIcon";
import { useToggleSidebar } from "@/context/admin/sidebar-context";

export default function SideBar() {

    const pathname = usePathname();
    const {isSidebarOpen, closeSidebar} = useToggleSidebar();

    const menus = [
        {
            title: "Dashboard",
            path: "/admin",
            icon: <DashboardIcon size="5" />
        },
        {
            title: "Product Management",
            path: "/admin/product",
            icon: <ProductIcon size="5" />
        },
        {
            title: "Category Management",
            path: "/admin/category",
            icon: <CategoryIcon size="5" />
        },
        {
            title: "Segment Management",
            path: "/admin/segment",
            icon: <SegmentIcon size="5" />
        },
        {
            title: "Division Management",
            path: "/admin/division",
            icon: <DivisionIcon size="5" />
        },
        {
            title: "Contact Person Management",
            path: "/admin/companycontactperson",
            icon: <ContactPersonIcon size="5" />
        },
        {
            title: "Company Management",
            path: "/admin/company",
            icon: <CompanyIcon size="5" />
        }
    ];

    return (
        isSidebarOpen ?
            <div className="lg:w-60 bg-black/80 lg:bg-black h-full lg:h-screen fixed lg:sticky top-0 z-10">
                <div className="p-3 flex mb-3">
                    <div className="mr-2 text-red-500">
                        <BrandLogo />
                    </div>

                    <div>
                        <h1
                            id="main-heading"
                            className="text-sm sm:text-xl md:text-xl lg:text-xl font-bold text-red-500"
                        >
                            Product Catalogue
                        </h1>

                        <h2 className="text-sm font-light text-white">
                            Management System
                        </h2>
                    </div>
                    <div className="lg:hidden">
                        <button
                            className="cursor-pointer"
                            onClick={() => closeSidebar()}
                        >
                        <CrossIcon color="white" />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 text-white grid-rows-[repeat(7,1fr)] h-110 text-sm">
                    {menus.map((menu, index) => (
                        <Link
                            key={index}
                            href={menu.path}
                            className={`flex items-center px-3 cursor-pointer transition-all
                            
                            ${pathname === menu.path
                                    ? "bg-red-500"
                                    : "hover:bg-red-500"
                                }
                        `}
                        >
                            {menu.icon}

                            <h4 className="ml-2 text-xs">
                                {menu.title}
                            </h4>
                        </Link>
                    ))}
                </div>
            </div>
            :
            ""
    );
}