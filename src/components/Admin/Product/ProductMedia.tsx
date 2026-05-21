"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { Upload, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback} from "react";

const products = [
    "/assets/images/background.png",
    "/assets/images/background.png",
    "/assets/images/background.png",
    "/assets/images/background.png",
    "/assets/images/background.png",
    "/assets/images/background.png",
];


export default function ProductMedia() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        dragFree: true,
        containScroll: "trimSnaps",
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="w-full">
            <div className="flex items-start justify-between mb-3 gap-3">
                <div>
                    <h2 className="text-[16px] font-semibold text-black">
                        Product Media
                    </h2>

                    <p className="text-[12px] text-[#6b7280] mt-1">
                        Upload product images, videos, and documents
                    </p>
                </div>

                <div className="px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 text-red-500 text-[11px] font-medium whitespace-nowrap">
                    Max 10 Files
                </div>
            </div>

            <div className="border border-dashed border-[#d1d5db] rounded-[18px] min-h-[220px] flex flex-col items-center justify-center text-center p-4 transition-all duration-300 hover:border-red-400 hover:bg-red-50/20 cursor-pointer">
                <div className="w-9 h-9 rounded-xs bg-black flex items-center justify-center shadow-md">
                    <Upload className="w-4 h-4 text-white stroke-[2]" />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-black">
                    Drag & Drop Files Here
                </h3>

                <p className="mt-2 text-[12px] leading-3 text-[#6b7280] max-w-[360px]">
                    Upload thumbnails, gallery images,
                    videos or PDF documents.
                </p>

                <button className="mt-3 h-8 px-3 rounded-xl bg-black text-white text-[13px] font-medium hover:bg-red-500 transition-all duration-300 cursor-pointer"
                    type="button"
                >
                    Browse Files
                </button>

                <div className="flex items-center gap-2 mt-3 flex-wrap justify-center">
                    {["PNG", "JPG", "WEBP", "MP4", "PDF"].map((item) => (
                        <div
                            key={item}
                            className="h-8 px-4 rounded-lg border border-[#e5e5e5] bg-white flex items-center justify-center text-[11px] font-medium text-[#6b7280] cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative mt-4">
                <button
                    type="button"
                    onClick={scrollPrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-red-500 transition-all duration-300 group cursor-pointer"
                >
                    <ChevronLeft className="w-4 h-4 text-black hover:text-white" />
                </button>

                <button
                    onClick={scrollNext}
                    type="button"
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-red-500 transition-all duration-300 group cursor-pointer"
                >
                    <ChevronRight className="w-4 h-4 text-black group-hover:text-white" />
                </button>

                <div className="overflow-hidden px-10" ref={emblaRef}>
                    <div className="flex gap-3">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="min-w-[130px] sm:min-w-[150px] border border-[#e5e5e5] rounded-[18px] p-2 bg-white relative group"
                            >
                                <button className="absolute top-2 right-2 z-10 w-7 h-7 rounded-lg bg-black shadow border border-[#eeeeee] flex items-center justify-center hover:bg-red-500 cursor-pointer">
                                    <X className="w-3.5 h-3.5 text-white group-hover:text-white" />
                                </button>

                                <div className="relative h-[130px] sm:h-[150px] rounded-[14px] overflow-hidden bg-[#f7f7f7]">
                                    <Image
                                        src={product}
                                        alt="product"
                                        fill
                                        className="object-contain p-3"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}