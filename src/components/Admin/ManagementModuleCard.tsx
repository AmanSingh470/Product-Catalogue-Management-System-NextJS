
import ArrowIcon from "@/components/Icons/ArrowIcon";
import ProductIcon from "@/components/Icons/ProductIcon";
import CategoryIcon from "@/components/Icons/CategoryIcon";
import SegmentIcon from "@/components/Icons/SegmentIcon";
import DivisionIcon from "@/components/Icons/DivisionIcon";
import CompanyIcon from "@/components/Icons/CompanyIcon";
import UserIcon from "@/components/Icons/UserIcon";
import ContactPersonIcon from "@/components/Icons/CompanyContactPersonIcon";
import AdminIcon from "@/components/Icons/AdminIcon";

export default function ManagementModuleCard({ mode }: { mode: string }) {
    const modeIcons: any = {
        "Product Management": < ProductIcon/>,
        "Category Management": < CategoryIcon/>,
        "Segment Management": < SegmentIcon/>,
        "Division Management": < DivisionIcon/>,        
        "Company Management": < CompanyIcon/>,
        "User Management": < UserIcon/>,
        "Contact Person Management": < ContactPersonIcon/>,
        "Admin Profile Management": < AdminIcon/>
    };
    return (
        <div className="flex flex-col w-full h-40 bg-gray-100 p-2 rounded-sm relative border border-transparent hover:border-black cursor-pointer hover:bg-gray-200">
            <div className="flex justify-center items-center gap-2">
                <div className="flex size-8 bg-black p-1 rounded-md">
                    {modeIcons[mode] || ""}
                </div>
                <h3 className="text-sm font-medium">{mode}</h3>
            </div>
            <div>
                <ul className="text-xs list-disc pl-5 mt-3 space-y-1 text-gray-600">
                    <li>Add Product</li>
                    <li>Update Product</li>
                    <li>Delete Product</li>
                    <li>List Product</li>
                </ul>
            </div>
            <div className="absolute bottom-1 right-1 size-6">
                <ArrowIcon />
            </div>
        </div>
    )
}