
import ArrowIcon from "@/components/Icons/ArrowIcon";
import ProductIcon from "@/components/Icons/ProductIcon";
import CategoryIcon from "@/components/Icons/CategoryIcon";
import SegmentIcon from "@/components/Icons/SegmentIcon";
import DivisionIcon from "@/components/Icons/DivisionIcon";
import CompanyIcon from "@/components/Icons/CompanyIcon";
import ContactPersonIcon from "@/components/Icons/CompanyContactPersonIcon";
import Link from "next/link";

export default function ManagementModuleCard({ mode }: { mode: string }) {
    const modeIcons: any = {
        "Product Management": [
            < ProductIcon/>,
            "product"
        ],
        "Category Management": [
            < CategoryIcon/>,
            "category"
        ],
        "Segment Management": [
            < SegmentIcon/>,
            "segment"
        ],
        "Division Management": [
            < DivisionIcon/>,
            "division"
        ],
        "Company Management": [
            < CompanyIcon/>,
            "company"
        ],
        "Contact Person Management": [
            < ContactPersonIcon/>,
            "companycontactperson"
        ],
    };//////
    return (
        <Link className="flex flex-col w-full h-40 bg-gray-100 p-2 rounded-sm relative border border-transparent hover:border-black cursor-pointer hover:bg-gray-200 text-gray-600 hover:text-black" href={`/admin/${modeIcons[mode][1]}`}>
            <div className="flex justify-center items-center gap-2">
                <div className="flex size-8 bg-black p-1 rounded-md">
                    {modeIcons[mode][0] || ""}
                </div>
                <h3 className="text-sm font-medium text-black">{mode}</h3>
            </div>
            <div>
                <ul className="text-xs list-disc pl-5 mt-3 space-y-1">
                    <li>Add Product</li>
                    <li>Update Product</li>
                    <li>Delete Product</li>
                    <li>List Product</li>
                </ul>
            </div>
            <div className="absolute bottom-1 right-1 size-6">
                <ArrowIcon />
            </div>
        </Link>
    )
}