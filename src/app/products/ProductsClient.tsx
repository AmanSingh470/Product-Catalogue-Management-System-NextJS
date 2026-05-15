"use client"
import Navbar from "@/components/Layout/Navbar";
import { NotificationProvider } from "@/context/notification-context";
import ProductsLandingPage from "@/components/Products/ProductsLandingPage";
import Main from "@/components/Products/Main";
import BackButton from "@/components/Layout/BackButton";
import {ProductDetailProvider} from "@/context/product-detail-context";
import type { ProductDetail } from "@/types/product/productDetail";

interface ProductsClientProps {
  initialDetailProducts: ProductDetail;
}

export default function ProductsClient({initialDetailProducts}: ProductsClientProps) {  
    return <>
        <NotificationProvider>
                <Navbar />
        </NotificationProvider>
        <BackButton />
        <div className="ml-5 mr-5 md:ml-10 md:mr-10 mb-10">
            <ProductDetailProvider initialDetailProducts={initialDetailProducts}>
                <ProductsLandingPage />
                <Main />
            </ProductDetailProvider>
        </div>
    </>
}
