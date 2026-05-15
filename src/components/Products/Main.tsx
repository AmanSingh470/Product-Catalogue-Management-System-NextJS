
"use client";
import MainProductCarousel from "@/components/Products/MainProductCarousel";
import SeeOtherProductCarousel from "@/components/Products/SeeOtherProductCarousel";
import { useProductDetail } from "@/context/product-detail-context";
import type { ProductDetail } from "@/types/product/productDetail";

export default function Main() {
    const { productDetail } = useProductDetail();
    const { main_advantages, key_facts, intellectual_properties, applications, status }: ProductDetail = productDetail as ProductDetail;
    const activeStatus = parseInt(status);
        
    return (
        <div>
            <div className="mb-20 md:mb-30">
                <MainProductCarousel />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

                <div className="col-span-1">
                    <h2 className="text-xl mb-4">Main Advantages</h2>
                    <div className="grid gap-4">
                        {Object.keys(main_advantages).map((title, index) => (
                            <div key={index}>
                                <h3 className="text-sm text-[var(--grey-800)]">
                                    {title}
                                </h3>

                                <p className="text-[var(--grey-600)] text-sm">
                                    {main_advantages[title]}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1">
                    <h2 className="mb-4 text-xl">Key facts</h2>
                    <ul className="grid gap-4">
                        {key_facts.map((description: string, index: number) => (
                            <li className="text-[var(--grey-600)] text-sm" key={index}>
                                {description}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-1">
                    <h2 className="mb-4 text-xl">Intellectual Property</h2>
                        <ul className="text-[var(--grey-600)] text-sm grid gap-4">
                            {intellectual_properties.map((description: string, index: number) => (
                                <li key={index}>{description}</li>
                            ))}
                        </ul>
                </div>
                <div className="col-span-1">
                    <h2 className="mb-4 text-xl">Applications / Compliance</h2>
                        <ul className="text-[var(--grey-600)] text-sm grid gap-4">
                            {applications.map((description: string, index: number) => (
                                <li key={index}>{description}</li>
                            ))}
                        </ul>
                </div>

            </div>

            <div className="md:my-10 md:mx-10 lg:my-25 lg:mx-30">
                <h2 className="text-xl">Status</h2>
                <div className="w-full py-10">
                    <div className="relative flex justify-between items-start">

                        <div className="absolute top-6 left-0 w-full h-[1px] bg-black"></div>

                        <div className="flex flex-col items-start text-center w-40">
                            <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full z-10 ${activeStatus === 1 ? "bg-black" : "bg-gray-400"}`}>
                                <span className="text-white">1</span>
                            </div>
                            <p className="mt-2 text-xs md:text-sm text-[var(--grey-600)] text-left m-1">
                                Idea / feasibility study
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center w-40">
                            <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full z-10 ${activeStatus === 2 ? "bg-black" : "bg-gray-400"}`}>
                                <span className="text-white">2</span>
                            </div>
                            <p className="mt-2 text-xs md:text-sm text-[var(--grey-600)] m-1">
                                Advance development
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center w-40">
                            <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full z-10 ${activeStatus === 3 ? "bg-black" : "bg-gray-400"}`}>
                                <span className="text-white">3</span>
                            </div>
                            <p className="mt-2 text-xs md:text-sm text-[var(--grey-600)] m-1">
                                Serial development
                            </p>
                        </div>

                        <div className="flex flex-col items-end text-center w-40">
                            <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full z-10 ${activeStatus === 4 ? "bg-black" : "bg-gray-400"}`}>
                                <span className="text-white">4</span>
                            </div>
                            <p className="mt-2 text-xs text-[var(--grey-600)] m-1">
                                In production
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl mb-5">See other products</h2>
                <SeeOtherProductCarousel />
            </div>
        </div>
    )
}