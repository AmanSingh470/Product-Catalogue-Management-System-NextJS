"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { getProducts } from "@/services/product.service";
import { useProductDetail } from "@/context/product-detail-context";
import { useState, useEffect } from "react";
import type { ProductListing } from "@/types/product/productListing";

export default function SeeOtherProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const { productDetail } = useProductDetail();
  const  segment_id  = productDetail?.segment_id || 1;

  const [sideProducts, setSideProducts] = useState<ProductListing[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchInitialProducts = async () => {
    setPage((prev) => prev + 1);
    setHasMore(true);

    const res = await getProducts({
      page: page,
      filters: {
        search: "",
        division: [],
        company: [],
        segment: [segment_id],
      },
    });

    setSideProducts(res.items);
    setHasMore(res.hasMore);
    setPage(res.current_page);
  };

  const BASEURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    fetchInitialProducts();
    return () => { }
  }, []);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = async () => {
      const currentIndex = emblaApi.selectedScrollSnap();
      const totalSlides = emblaApi.scrollSnapList().length;

      // when reached near end
      if (
        currentIndex >= totalSlides - 2 &&
        hasMore &&
        !loading
      ) {
        setLoading(true);

        const nextPage = page + 1;

        const res = await getProducts({
          page: nextPage,
          filters: {
            search: "",
            division: [],
            company: [],
            segment: [segment_id],
          },
        });

        setSideProducts((prev: ProductListing[]) => [...prev, ...res.items]);
        setHasMore(res.hasMore);
        setPage(res.current_page);
        setLoading(false);
      }
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, page, hasMore, loading, segment_id]);

  return (
    <div className="relative w-full mx-auto">

      <button
        onClick={() => { emblaApi?.scrollPrev() }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-3 py-1 rounded"
      >
        ←
      </button>

      <button
        onClick={() => { emblaApi?.scrollNext() }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white px-3 py-1 rounded"
        disabled={!hasMore}
      >
        →
      </button>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {sideProducts.map((item: ProductListing, index: number) =>
          (
            <div key={index} className={`flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_25%] px-2`}>
              <Link href={`/products/${item.id}`} prefetch={false}>
                <div className="relative h-50 md:h-80 lg:h-60 cursor-pointer">
                  <Image
                    src={`${BASEURL}/storage/images/products/${item.thumbnail}`}
                    alt={`slide-${item.id}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Link>
              <h3 className="text-gray-700">{item.title}</h3>
              <h3 className="text-gray-700">{item.segment}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}