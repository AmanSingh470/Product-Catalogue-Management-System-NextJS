"use client";
import React, { createContext, useContext, useState } from "react";
export type FilterType = "all" | "division" | "company" | "segment";
import type { FilterItem, Filters } from "@/types/filter/productFilter";

type FilterContextType = {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  allProducts: FilterItem[];
  divisionProducts: FilterItem[];
  segmentProducts: FilterItem[];
  companyProducts: FilterItem[];
  categoryProducts: FilterItem[],
  setDivisionProducts: React.Dispatch<React.SetStateAction<FilterItem []>>;
  setSegmentProducts: React.Dispatch<React.SetStateAction<FilterItem[]>>;
  setCompanyProducts: React.Dispatch<React.SetStateAction<FilterItem[]>>;
  setAllProducts: React.Dispatch<React.SetStateAction<FilterItem[]>>;
  setCategoryProducts: React.Dispatch<React.SetStateAction<FilterItem[]>>;
};

const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children, initialFilters }: { children: React.ReactNode; initialFilters: Filters }) {
    const [activeFilter, setActiveFilter] = useState<FilterType>("all");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [allProducts, setAllProducts] = useState<FilterItem[]>(initialFilters.all);
    const [divisionProducts, setDivisionProducts] = useState<FilterItem[]>(initialFilters.divisions);
    const [segmentProducts, setSegmentProducts] = useState<FilterItem[]>(initialFilters.segments);
    const [companyProducts, setCompanyProducts] = useState<FilterItem[]>(initialFilters.companies);
    const [categoryProducts, setCategoryProducts] = useState<FilterItem[]>(initialFilters.categories);

  return (
    <FilterContext.Provider 
    value={{ 
        activeFilter,
        setActiveFilter,
        isModalOpen,
        openModal,
        closeModal,
        allProducts,
        divisionProducts,
        segmentProducts,
        companyProducts,
        categoryProducts,
        setAllProducts,
        setDivisionProducts,
        setSegmentProducts,
        setCompanyProducts,
        setCategoryProducts
        }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used inside FilterProvider");
  }

  return context;
}