"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";

export default function LargeProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    loop: false,
    align: "start",
    slidesToScroll: 1,
    dragFree: false,
  });

  const images = [
    "/assets/images/5_Gearbox_Assembly.png",
    "/assets/images/card.jpg",
    "/assets/images/card2.png",
    "/assets/images/card2.png",
  ];
  const [mainImage, setMainImage] = useState("/assets/images/5_Gearbox_Assembly.png");

  return (

    <>
      <div className="grid grid-cols-6 gap-5 h-140 mb-30">
        <div className="col-span-5 relative">
          <Image
            src={mainImage}
            alt="product"
            fill
            className="rounded object-cover"
          />
        </div>

        <div className="lg:col-span-1 h-full relative">

          {/* buttons now belong ONLY to side carousel */}
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

          {/* viewport */}
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex flex-col h-full">
              {images.map((img, i) => (
                <div
                  key={i}
                  className="flex-[0_0_33.33%] p-2"
                  onClick={() => setMainImage(img)}
                >
                  <div
                    className={`relative h-full cursor-pointer border-2 rounded ${mainImage === img ? "border-black" : "border-transparent"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`product ${i}`}
                      fill
                      className="object-cover rounded"
                      unoptimized
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}