"use client";
import Image from "next/image";

export default function RecentProductCard() {
    return (
        <div className="contents group">
            <div className="p-2 border border-transparent border-b-gray-300 group-hover:bg-gray-100 group-hover:border group-hover:border-black group-hover:border-r-transparent cursor-pointer">
                <div className="bg-black w-full h-full rounded-lg relative">
                    <Image
                        src={`/assets/images/background.png`}
                        alt="Product Image"
                        className="rounded object-cover"
                        fill
                    />
                </div>
            </div>
            <div className="p-2 border border-transparent border-b-gray-300 group-hover:bg-gray-100 group-hover:border group-hover:border-black group-hover:border-r-transparent group-hover:border-l-transparent cursor-pointer">
                <h3 className="text-sm font-medium">Car Dashboard Panel</h3>
                <p className="text-xs text-gray-600">Category: Car Accessories</p>
            </div>
            <div className="p-2 text-right text-xs text-gray-600 cursor-pointer border border-transparent border-b-gray-300 group-hover:bg-gray-100 group-hover:border-black group-hover:border-l-transparent">
                <p>10 Sep 2026</p>
                <p>12:57 PM</p>
            </div>
        </div>
    )
}
