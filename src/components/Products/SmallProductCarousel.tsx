"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { useProductDetail } from "@/context/product-detail-context";
import PlayButton from "@/components/Layout/PlayButton";

export default function SmallProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const { productDetail }: any = useProductDetail();
  const { media }: any = productDetail || {};

  const { image = [], video = [] }: any = media || {};

  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const allMedia = [
    ...image.map((img: string) => ({
      type: "image",
      url: `${baseURL}/storage/images/products/${img}`,
    })),

    ...video.map((vid: string) => ({
      type: "video",
      url: `${baseURL}/storage/videos/products/${vid}`,
    })),
  ];

  const [mainMedia, setMainMedia] = useState(allMedia[0]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-3 py-1 rounded"
      >
        ←
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-3 py-1 rounded"
      >
        →
      </button>

      <div className="overflow-hidden rounded-lg" ref={emblaRef}>
        <div className="flex">
          {allMedia.map((item: any, index: number) => (
            <div
              key={index}
              className="min-w-full relative h-64 md:h-80 cursor-pointer"
              onClick={() => setMainMedia(item)}
            >
              {item.type === "video" ? (
                <div className="relative w-full h-full">

                  <video
                    src={item.url}
                    className={`w-full h-full object-cover rounded-lg border-2 ${
                      mainMedia?.url === item.url
                        ? "border-black"
                        : "border-transparent"
                    }`}
                    muted
                    controls
                    autoPlay
                  />
                </div>
              ) : (
                <Image
                  src={item.url}
                  alt={`slide-${index}`}
                  fill
                  className={`object-cover rounded-lg border-2 ${
                    mainMedia?.url === item.url
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  unoptimized
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}