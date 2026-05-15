"use client";
import BrandLogo from "@/components/Icons/BrandLogo";
import GuardIcon from "@/components/Icons/GuardIcon";
import RedCube from "@/components/Icons/RedCube";
import LineGraphIcon from "@/components/Icons/LineGraphIcon";
import { useIsLargeScreen } from "@/hooks/useIsLargeScreen";
import LoginForm from '@/components/Admin/LoginForm';
import Navbar from "@/components/Layout/Navbar";

export default function Login() {
    const isLargeScreen = useIsLargeScreen();
    return (isLargeScreen) ?
        (
            <div className="grid grid-cols-2 h-screen relative">
                <div className="flex flex-col justify-end items-left col-span-1 bg-[url('/assets/images/login-bg.png')] bg-cover bg-center bg-no-repeat text-white p-10 relative" id="login-bg">
                    <div className="text-white absolute inset-0 z-1">
                        <div className="p-3 flex items-center ml-5">
                            <div className={`mr-2 text-red-500`}>
                                <BrandLogo />
                            </div>
                            <div>
                                <h1 id="main-heading"
                                    className={`text-sm sm:text-xl md:text-xl lg:text-xl font-bold text-red-500`}>
                                    Product Catalogue
                                </h1>
                                <h2 className={`text-sm font-light text-white`}>Management System</h2>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-black/20  to-black/90 absolute inset-0"></div>
                    <h3 className="text-4xl font-medium z-1 mb-3">Manage. Organize. <br /> Streamline.</h3>
                    <p className="text-sm z-1 mb-5">Secure admin access to manage your automotive <br />product catalogue efficiently.</p>
                    <div className="flex text-white justify-evenly z-1">
                        <div className="w-full h-30">
                            <div className="size-10 rounded-md flex items-center justify-center shadow-[inset_0_0_6px_rgba(239,68,68,0.9)]">
                                <GuardIcon />
                            </div>
                            <h4 className="font-medium text-sm mt-4">Secure Access</h4>
                            <p className="text-xs text-gray-200">Protected admin authentication</p>
                        </div>
                        <div className="w-full h-30">
                            <div className="size-10 rounded-md flex items-center justify-center shadow-[inset_0_0_6px_rgba(239,68,68,0.9)]">
                                <RedCube />
                            </div>
                            <h4 className="font-medium text-sm mt-4">Centralized Control</h4>
                            <p className="text-xs text-gray-200">Manage products, categories, segments & more</p>
                        </div>
                        <div className="w-full h-30">
                            <div className="size-10 rounded-md flex items-center justify-center shadow-[inset_0_0_6px_rgba(239,68,68,0.9)]">
                                <LineGraphIcon />
                            </div>
                            <h4 className="font-medium text-sm mt-4">Real-time Updates</h4>
                            <p className="text-xs text-gray-200">Stay updated with latest catalogue changes</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <LoginForm />
                </div>
            </div>
        )
        :
        (
            <>
                <div className="h-screen flex flex-col justify-start lg:justify-end items-center md:items-left bg-[url('/assets/images/login-bg.png')] bg-cover bg-center bg-no-repeat text-white p-2 md:p-5 relative" id="login-bg">
                    <Navbar />
                    <div className="text-white absolute inset-0 z-1 mb-5 md:mb-0">
                    </div>
                    <div className="bg-gradient-to-b from-black to-black/60 md:from-black md:to-black/60 absolute inset-0"></div>
                    <h3 className="md:text-4xl font-medium z-1 mb-3 mt-5">Manage. Organize. Streamline.</h3>
                    <p className="text-sm z-1 mb-5">Secure admin access to manage your automotive <br />product catalogue efficiently.</p>
                    <div className="flex text-white justify-center z-1 flex-wrap">
                        <div className="w-30 sm:w-50 md:w-60 lg:w-full h-30 flex flex-col justify-center items-center text-center m-5">
                            <div className="size-10 rounded-md flex items-center justify-center shadow-[inset_0_0_6px_rgba(239,68,68,0.9)]">
                                <GuardIcon />
                            </div>
                            <h4 className="font-medium text-xs md:text-sm mt-4">Secure Access</h4>
                            <p className="text-xs text-gray-200">Protected admin authentication</p>
                        </div>
                        <div className="w-30 sm:w-50 md:w-60 lg:w-full h-30 flex flex-col justify-center items-center text-center m-5">
                            <div className="size-10 rounded-md flex items-center justify-center shadow-[inset_0_0_6px_rgba(239,68,68,0.9)]">
                                <RedCube />
                            </div>
                            <h4 className="font-medium text-xs md:text-sm mt-4">Centralized Control</h4>
                            <p className="text-xs text-gray-200">Manage products, categories, segments & more</p>
                        </div>
                        <div className="w-30 sm:w-50 md:w-60 lg:w-full h-30 flex flex-col justify-center items-center text-center m-5">
                            <div className="size-10 rounded-md flex items-center justify-center shadow-[inset_0_0_6px_rgba(239,68,68,0.9)]">
                                <LineGraphIcon />
                            </div>
                            <h4 className="font-medium text-xs md:text-sm mt-4">Real-time Updates</h4>
                            <p className="text-xs text-gray-200">Stay updated with latest catalogue changes</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center m-10">
                    <LoginForm />
                </div>
            </>
        )
}
