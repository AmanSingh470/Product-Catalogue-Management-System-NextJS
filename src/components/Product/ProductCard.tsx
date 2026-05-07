"use client"
import { useView } from "@/context/view-context";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductCard({id, title, segment, division, image_url }: any) {
    const { view } = useView();
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const [loaded, setLoaded] = useState(false);

    return (
        <div>
            {(
                view === "grid" ? (
                    <Link href={`/products/${id}`} prefetch={false}>
                        <div className="group relative rounded-sm flex flex-col overflow-hidden text-white w-full h-45 sm:h-70 md:h-85 lg:h-45 xl:h-55 2xl:h-60 product-item cursor-pointer">
                            {!loaded && (
                                <div className="absolute inset-0 bg-gray-300 overflow-hidden">
                                    <div className="absolute inset-0 shimmer"></div>
                                </div>
                            )}
                            <Image
                                src={`${baseURL}/storage/images/products/${image_url}`}
                                alt={title}
                                fill
                                className="rounded object-cover"
                                onLoad={() => setLoaded(true)}
                            />

                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-300"></div>

                            <div className="absolute flex flex-col justify-center bottom-3 left-1 p-2 text-xs font-medium">
                                <h2>{title}</h2>
                                <p className="uppercase">{segment}</p>
                            </div>

                        </div>
                    </Link>

                ) : (
                    <Link href={`/products/${id}`} prefetch={false}>
                        <div className="grid grid-cols-8 gap-4 items-center bg-white rounded-lg px-4 py-3 shadow-sm hover:bg-gray-50 transition cursor-pointer">

                            <div className="flex items-center col-span-3 gap-2">
                                <Image
                                    src={`${baseURL}/storage/images/products/${image_url}`}
                                    alt={title}
                                    className="w-10 h-10 rounded object-cover"
                                    width={40}
                                    height={40}
                                    onLoad={() => setLoaded(true)}
                                />
                                <span className="text-xs font-medium text-gray-800">
                                    {title}
                                </span>
                            </div>

                            <div className="text-xs text-gray-500 col-span-2">
                                {segment}
                            </div>

                            <div className="text-xs text-gray-500 col-span-2">
                                {division}
                            </div>

                            <div className="flex justify-end text-gray-400 col-span-1">
                                &#8594;
                            </div>

                        </div>
                    </Link>
                )
            )}
        </div>
    );
}