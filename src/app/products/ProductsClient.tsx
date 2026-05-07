"use client"
import Navbar from "@/components/Layout/Navbar";
import NotificationDropDown from "@/components/Layout/NotificationDropDown";
import { NotificationProvider } from "@/context/notification-context";
import ProfileDropDown from "@/components/Layout/ProfileDropDown";
import { ProfileProvider } from "@/context/profile-context";
import ProductsLandingPage from "@/components/Products/ProductsLandingPage";
import Main from "@/components/Products/Main";
import BackButton from "@/components/Layout/BackButton";
import { getProductById } from "@/services/product.service";

export default function ProductsClient() {
    const data = getProductById(1);
    console.log("Data from client side: ", data);
    
    return <>
        <NotificationProvider>
            <ProfileProvider>
                <Navbar />
                <NotificationDropDown />
                <ProfileDropDown />
            </ProfileProvider>
        </NotificationProvider>
        <BackButton />
        <div className="ml-5 mr-5 md:ml-10 md:mr-10 mb-10">
        <ProductsLandingPage />
        <Main />
        </div>

    </>
}
