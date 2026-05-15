import BrandLogo from "@/components/Icons/BrandLogo";
import ProductIcon from "@/components/Icons/ProductIcon";
import CategoryIcon from "@/components/Icons/CategoryIcon";
import SegmentIcon from "@/components/Icons/SegmentIcon";
import DivisionIcon from "@/components/Icons/DivisionIcon";
import CompanyIcon from "@/components/Icons/CompanyIcon";
import UserIcon from "@/components/Icons/UserIcon";
import ContactPersonIcon from "@/components/Icons/CompanyContactPersonIcon";
import AdminIcon from "@/components/Icons/AdminIcon";
import DashboardIcon from "@/components/Icons/DashboardIcon";
import LogoutIcon from "@/components/Icons/LogoutIcon";

export default function SideBar() {
    return (
        <>
            <div className="p-3 flex mb-3">
                <div className={`mr-2 text-red-500`}>
                    <BrandLogo />
                </div>
                <div>
                    <h1 id="main-heading"
                        className={`text-sm sm:text-xl md:text-xl lg:text-xl font-bold text-red-500`}>
                        Product Catalogue
                    </h1>
                    <h2 className={`text-sm font-light text-white`}>Management System</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 text-white grid-rows-[repeat(10,1fr)] h-110 text-sm mx-3">
                <div className="flex items-center hover:bg-red-500 cursor-pointer">
                    <DashboardIcon size="5" />
                    <h4 className="ml-2 text-xs">Dashboard</h4>
                </div>
                <div className="flex items-center hover:bg-red-500 cursor-pointer">
                    <ProductIcon size="5" />
                    <h4 className="ml-2 text-xs">Product Management</h4>
                </div>
                <div className="flex items-center hover:bg-red-500 cursor-pointer">
                    <CategoryIcon size="5" /> 
                    <h4 className="ml-2 text-xs">Cateogry Management</h4>
                </div>
                <div className="flex items-center hover:bg-red-500 cursor-pointer">
                    <SegmentIcon size="5" />
                    <h4 className="ml-2 text-xs">Segment Management</h4>
                </div>
                <div className="flex items-center hover:bg-red-500 cursor-pointer">
                    <DivisionIcon size="5" />
                    <h4 className="ml-2 text-xs">Division Management</h4>
                </div>
                <div className="flex items-center hover:bg-red-500 cursor-pointer">
                    <ContactPersonIcon size="5" />
                    <h4 className="ml-2 text-xs">Contact Person Management</h4>
                </div>
                <div className="flex items-center hover:bg-red-500 cursor-pointer">
                    <CompanyIcon size="5" />
                    <h4 className="ml-2 text-xs">Company  Management</h4>
                </div>
                <div className="flex items-center hover:bg-red-500 cursor-pointer">
                    <UserIcon size="5" />
                    <h4 className="ml-2 text-xs">User Management</h4>
                </div>
                <div className="flex items-center hover:bg-red-500 cursor-pointer">
                    <AdminIcon size="5"/>
                    <h4 className="ml-2 text-xs">Admin Profile</h4>
                </div>
                <div className="flex items-center hover:bg-red-500 cursor-pointer">
                    <LogoutIcon size="5"/>
                    <h4 className="ml-2 text-xs">Logout</h4>
                </div>
            </div>
        </>
    )
}
