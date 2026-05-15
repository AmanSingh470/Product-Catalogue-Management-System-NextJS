"use client";
import { createContext, useContext, useState } from "react";
import { ProductDetail } from "@/types/product/productDetail";

interface ProductDetailContextType {
    productDetail: ProductDetail | null;
    setProductDetail: React.Dispatch<React.SetStateAction<ProductDetail|null>>;
}

const ProductDetailContext = createContext<ProductDetailContextType | null>(null);

export function ProductDetailProvider({ children, initialDetailProducts }: { children: React.ReactNode, initialDetailProducts: ProductDetail}) {
    const [productDetail, setProductDetail] = useState<ProductDetail | null>(initialDetailProducts);
    return (
        <ProductDetailContext.Provider
            value={{
                productDetail,
                setProductDetail
            }}
        >
            {children}
        </ProductDetailContext.Provider>
    );
}

export const useProductDetail = (): ProductDetailContextType => {
    const context = useContext(ProductDetailContext);
    if (!context) {
        throw new Error("useProductDetail must be used inside ProductDetail Provider");
    }
    return context;
};