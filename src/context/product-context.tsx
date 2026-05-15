"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { ProductListing } from "@/types/product/productListing";
import { getProducts } from "@/services/product.service";
import { useIsLargeScreen } from "@/hooks/useIsLargeScreen";

type SkeletonItem = {
  __skeleton: true;
};

interface ProductContextType {
  products: ProductListing[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCompanies: number[];
  setSelectedCompanies: React.Dispatch<React.SetStateAction<number[]>>;
  selectedSegments: number[];
  setSelectedSegments: React.Dispatch<React.SetStateAction<number[]>>;
  selectedDivisions: number[];
  setSelectedDivisions: React.Dispatch<React.SetStateAction<number[]>>;
  resetFilters: () => void;
  fetchNextProducts: () => void;
  hasMore: boolean;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  dataWithSkeletons: (ProductListing | SkeletonItem)[];
}

const ProductContext = createContext<ProductContextType | null>(null);

export function ProductProvider({ children, initialProducts }: { children: React.ReactNode; initialProducts: ProductListing[] }) {
  const [products, setProducts] = useState<ProductListing[]>(initialProducts);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCompanies, setSelectedCompanies] = useState<number[]>([]);
  const [selectedSegments, setSelectedSegments] = useState<number[]>([]);
  const [selectedDivisions, setSelectedDivisions] = useState<number[]>([]);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [loading, setLoading] = useState(false);

  const skeletonCount = useIsLargeScreen() ? 4 : 2;
  const dataWithSkeletons = loading
    ? [
      ...products,
      ...Array.from({ length: skeletonCount }, ():SkeletonItem => ({ __skeleton: true })),
    ]
    : products;

  // MAIN FILTER LOGIC
  const filtersKey = JSON.stringify({
    search: searchQuery,
    companies: selectedCompanies,
    segments: selectedSegments,
    divisions: selectedDivisions,
  });
  useEffect(() => {
    const t = setTimeout(async () => {
      // reset state
      setPage(1);
      setHasMore(true);

      // fetch first page with current filters
      // getProducts(page);
      const res = await getProducts({
        page: 1,
        filters: {
          search: searchQuery,
          division: selectedDivisions,
          company: selectedCompanies,
          segment: selectedSegments,
        },
      });
      setProducts(res.items);
      setHasMore(res.hasMore);
      setPage(1);
    }, 400); // debounce (important for search)
    return () => clearTimeout(t);
  }, [filtersKey]);

  // FETCH NEXT PAGE
  const fetchNextProducts = async () => {
    if (!hasMore || loading) return;

    try {
      // const res = await fetch(`http://localhost:8000/api/get-products?page=${page + 1}`);
      setLoading(true);
      const nextPage = page + 1;
      // const res = await getProducts(nextPage);
      const res = await getProducts({
        page: nextPage,
        filters: {
          search: searchQuery,
          division: selectedDivisions,
          company: selectedCompanies,
          segment: selectedSegments
        },
      });

      const data = res;

      if (data.hasMore === false) {
        setHasMore(false);
      }
      setProducts((prev) => [...prev, ...data.items]);
      // setPage(res.current_page);
      setPage((prev) => prev + 1);
    } catch (err) {

    }
    finally {
      setLoading(false);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        searchQuery,
        setSearchQuery,
        selectedCompanies,
        setSelectedCompanies,
        selectedSegments,
        setSelectedSegments,
        selectedDivisions,
        setSelectedDivisions,
        resetFilters: () => {
          setSearchQuery("");
          setSelectedCompanies([]);
          setSelectedSegments([]);
          setSelectedDivisions([]);
          setPage(1);
          setHasMore(true);
        },
        fetchNextProducts,
        hasMore,
        loading,
        setLoading,
        dataWithSkeletons
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used inside ProductProvider");
  }
  return context;
};