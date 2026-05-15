"use client";

import Navbar from "@/components/Layout/Navbar";
import HeroSection from "@/components/Layout/HeroSection";
import Toolbar from "@/components/Product/Toolbar";
import Main from "@/components/Product/Main";
import { ViewProvider } from "@/context/view-context";
import { FilterProvider } from "@/context/filter-context";
import FilterProductModal from "@/components/FilterProduct/FilterProductModal";
import AddProductModal from "@/components/Product/AddProductModal";
import { AddProductProvider } from "@/context/add-product-context";
import { ProductProvider } from "@/context/product-context";
import { NotificationProvider } from "@/context/notification-context";
import type { ProductListing } from "@/types/product/productListing";
import type { Filters } from "@/types/filter/productFilter";

interface HomeClientProps {
  initialProducts: ProductListing[];
  initialFilters: Filters;
}

export default function HomeClient({ initialProducts, initialFilters }: HomeClientProps) {
  return (
    <>
      <NotificationProvider>
          <Navbar mode="home" />
      </NotificationProvider>
      <HeroSection />
      <ViewProvider>
        <AddProductProvider>
          <ProductProvider initialProducts={initialProducts}>
            <FilterProvider initialFilters={initialFilters}>
              <Toolbar />
              <Main />
              <FilterProductModal />
              <AddProductModal />
            </FilterProvider>
          </ProductProvider>
        </AddProductProvider>
      </ViewProvider>
    </>
  );
}