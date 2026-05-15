"use client";
import ParallelBarIcon from "@/components/Icons/ParallelBarIcon"
import ProductIcon from "@/components/Icons/ProductIcon";
import CategoryIcon from "@/components/Icons/CategoryIcon";
import SegmentIcon from "@/components/Icons/SegmentIcon";
import DivisionIcon from "@/components/Icons/DivisionIcon";
import UserIcon from "@/components/Icons/UserIcon";
import ManagementModuleCard from "@/components/Admin/ManagementModuleCard";
import RecentModifiedProducts from "@/components/Admin/RecentModifiedProducts";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import Link from "next/link";
import SideBar from "@/components/Admin/SideBar";

export default function Dashboard() {
    const modules = ["Product Management", "Category Management", "Segment Management", "Division Management", "Company Management", "Contact Person Management", "User Management", "Admin Profile Management"];

    return (
        <div className="flex">
            <div className="w-60 bg-black h-screen sticky top-0">
                <SideBar/>
            </div>
            <div className="flex-1 h-full p-5">
                <div className="flex justify-between">
                    <div className="flex justify-between items-center w-34 mb-4">
                        <div>
                            <ParallelBarIcon />
                        </div>
                        <div className="font-medium">Dashboard</div>
                    </div>
                    <div>Aman Singh</div>
                </div>
                <div className="h-55 rounded-lg p-10 bg-[url('/assets/images/background.png')] bg-cover bg-center bg-no-repeat relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-black/20 rounded-lg"></div>
                    <h4 className="text-red-500 text-xs font-medium mb-3 relative">WELCOME ADMIN</h4>
                    <div className="w-70 relative">
                        <h2 className="text-white font-medium text-2xl mb-3 ">Product Cataloge Management System</h2>
                        <h5 className="text-white text-xs font-light">Manage and organize your automotive product catalogue efficiently.</h5>
                    </div>
                </div>
                <div className="flex mt-5 gap-3">
                    <div className="flex w-full h-25 text-center bg-white rounded-sm shadow-md justify-evenly items-center">
                        <div className="w-10 bg-black rounded-lg p-2">
                            <ProductIcon />
                        </div>
                        <div>
                            <h6 className="text-xs font-semibold mb-1">Total Products</h6>
                            <h6 className="text-xl text-red-500 font-medium">1,284</h6>
                            <p className="text-xs">All Products</p>
                        </div>
                    </div>
                    <div className="flex w-full h-25 text-center bg-white rounded-sm shadow-md justify-evenly items-center">
                        <div className="w-10 bg-black rounded-lg p-2">
                            <CategoryIcon />
                        </div>
                        <div>
                            <h6 className="text-xs font-semibold mb-1">Categories</h6>
                            <h6 className="text-xl text-red-500 font-medium">86</h6>
                            <p className="text-xs">All Categories</p>
                        </div>
                    </div>
                    <div className="flex w-full h-25 text-center bg-white rounded-sm shadow-md justify-evenly items-center">
                        <div className="w-10 bg-black rounded-lg p-2">
                            <SegmentIcon />
                        </div>
                        <div>
                            <h6 className="text-xs font-semibold mb-1">Segments</h6>
                            <h6 className="text-xl text-red-500 font-medium">24</h6>
                            <p className="text-xs">All Segments</p>
                        </div>
                    </div>
                    <div className="flex w-full h-25 text-center bg-white rounded-sm shadow-md justify-evenly items-center">
                        <div className="w-10 bg-black rounded-lg p-2">
                            <DivisionIcon />
                        </div>
                        <div>
                            <h6 className="text-xs font-semibold mb-1">Divisions</h6>
                            <h6 className="text-xl text-red-500 font-medium">18</h6>
                            <p className="text-xs">All Divisions</p>
                        </div>
                    </div>
                    <div className="flex w-full h-25 text-center bg-white rounded-sm shadow-md justify-evenly items-center">
                        <div className="w-10 bg-black rounded-lg p-2">
                            <UserIcon />
                        </div>
                        <div>
                            <h6 className="text-xs font-semibold mb-1">Users</h6>
                            <h6 className="text-xl text-red-500 font-medium">42</h6>
                            <p className="text-xs">All Users</p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 gap-3">
                    <div className="bg-white rounded-md p-3">
                        <h3 className="font-medium text-md mb-3">Management Modules</h3>
                        <div className="w-170 grid grid-cols-4 justify-items-center gap-3">
                            {modules.map((module, index) => (
                                <ManagementModuleCard key={index} mode={module} />
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 p-3 bg-white rounded-md relative">
                        <RecentModifiedProducts />
                        <div className="flex absolute bottom-5 left-5 items-center w-37 justify-around">
                            <Link href="/" className="font-medium text-sm">
                                <p className="text-red-500">View All Products</p>
                            </Link>
                            <div className="size-6">
                                <ArrowIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-5 text-xs text-gray-800">
                    &copy; 2026 Product Catalogue Management System. All rights reserved.
                </div>
            </div>
        </div>
    )
}
