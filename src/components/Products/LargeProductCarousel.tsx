"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import { useProductDetail } from "@/context/product-detail-context";
import PlayButton from "@/components/Layout/PlayButton";

export default function LargeProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    loop: false,
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
  });

  const { productDetail }: any = useProductDetail();
  const { media }: any = productDetail;

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
    <div className="grid grid-cols-6 gap-5 h-140 mb-30">
      <div className="col-span-5 relative rounded overflow-hidden">
        {mainMedia?.type === "video" ? (
          <video
            src={mainMedia.url}
            controls
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          />
        ) : (
          <Image
            src={mainMedia?.url}
            alt="product"
            fill
            className="rounded object-cover"
            unoptimized
          />
        )}
      </div>

      <div className="lg:col-span-1 h-full relative">
        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="absolute top-2 left-1/2 -translate-x-1/2 z-10 bg-black/60 text-white px-2 py-1 rounded"
        >
          ↑
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 bg-black/60 text-white px-2 py-1 rounded"
        >
          ↓
        </button>

        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex flex-col h-full">
            {allMedia.map((item: any, i: number) => (
              <div
                key={i}
                className="flex-[0_0_33.33%] p-2"
                onClick={() => setMainMedia(item)}
              >
                <div
                  className={`relative h-full cursor-pointer border-2 rounded overflow-hidden ${mainMedia?.url === item.url
                      ? "border-black"
                      : "border-transparent"
                    }`}
                >
                  <PlayButton />
                  {item.type === "video" ? (
                    <video
                      src={item.url}
                      className="w-full h-full object-cover"
                      muted
                    />
                  ) : (
                    <Image
                      src={item.url}
                      alt={`product ${i}`}
                      fill
                      className="object-cover rounded"
                      unoptimized
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}