import { useCompanyContactPersonModal } from "@/context/admin/companycontactperson-context"
import CrossIcon from "@/components/Icons/CrossIcon";
import DeleteIcon from "@/components/Icons/DeleteIcon";

export default function DeleteCompanyContactPersonModal() {
    const { closeDeleteCompanyContactPersonModal } = useCompanyContactPersonModal();
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

            <div className="relative rounded-[12px] bg-white shadow-2xl">

                {/* CROSS BUTTON */}


                {/* HEADER */}
                <div className="border-b border-[#E5E7EB] px-6 py-5">

                    <div className="flex items-start gap-4">

                        {/* ICON */}
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
                            <DeleteIcon color="red" />
                        </div>

                        {/* TEXT */}
                        <div className="relative">
                            <button className="absolute right-0 top-0 rounded-md transition hover:bg-gray-100 cursor-pointer"
                                onClick={closeDeleteCompanyContactPersonModal}
                            >
                                <CrossIcon color="black" />
                            </button>
                            <h2 className="text-lg font-bold text-[#1E1E1E]">
                                Delete Company Contact Person
                            </h2>

                            <p className="mt-2 text-sm leading-7 text-[#6B7280]">
                                Are you sure you want to delete this Company Contact Person?
                                This action cannot be undone.
                            </p>

                        </div>

                    </div>

                </div>

                {/* CompanyContactPerson INFO */}
                <div className="px-6 py-5">

                    <div className="flex items-center gap-4 rounded-[10px] border border-[#E5E7EB] bg-[#FAFAFA] p-4">
                            <h4 className="px-5 py-2 text-xs text-[#111111]">#1</h4>
                            <h4 className="px-5 py-2 text-xs text-[#111111]">Car dashboard Panel</h4>
                            <h4 className="px-5 py-2 text-xs text-[#111111]">abc@gmail.com</h4>
                            <h4 className="px-5 py-2 text-xs text-[#111111]">Manager</h4>
                            <h4 className="px-5 py-2 text-xs text-[#111111]">XYZ Technologies</h4>
                    </div>

                </div>

                {/* FOOTER */}
                <div className="flex flex-col-reverse gap-3 border-t border-[#E5E7EB] px-6 py-5 sm:flex-row sm:justify-end">

                    <button
                        type="button"
                        className="h-[52px] rounded-[8px] border border-[#D1D5DB] px-6 text-[15px] font-medium text-[#1E1E1E] transition hover:bg-gray-100 cursor-pointer"
                        onClick={closeDeleteCompanyContactPersonModal}
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        className="flex h-[52px] items-center justify-center gap-2 rounded-[8px] bg-[#FF0000] px-6 text-[15px] font-medium text-white transition hover:bg-red-700 cursor-pointer"
                    >

                        <DeleteIcon color="white" />

                        Delete Company Contact Person

                    </button>

                </div>

            </div>

        </div>
    )
}