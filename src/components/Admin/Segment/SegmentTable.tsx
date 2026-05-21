"use client";

import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { useSegmentModal } from "@/context/admin/segment-context";
import AddSegmentModal from "@/components/Admin/Segment/Modal/AddSegmentModal";
import EditSegmentModal from "@/components/Admin/Segment/Modal/EditSegmentModal";
import DeleteSegmentModal from "@/components/Admin/Segment/Modal/DeleteSegmentModal";
import EditIcon from "@/components/Icons/EditIcon";
import DeleteIcon from "@/components/Icons/DeleteIcon";
import AddIcon from "@/components/Icons/AddIcon";

export default function SegmentTable() {

    const Segments = Array.from({ length: 1284 }, (_, i) => ({
        id: i + 1,
        name: "Car Dashboard Panel",
        updatedAt: "11:30 PM"
    }));

    const itemsPerPage = 10;

    const [currentPage, setCurrentPage] = useState(0);

    const offset = currentPage * itemsPerPage;

    const currentItems = useMemo(() => {
        return Segments.slice(offset, offset + itemsPerPage);
    }, [currentPage]);

    const pageCount = Math.ceil(Segments.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        setCurrentPage(event.selected);
    };

    const { isAddSegmentModalOpen, openAddSegmentModal, isEditSegmentModalOpen, openEditSegmentModal, isDeleteSegmentModalOpen, openDeleteSegmentModal } = useSegmentModal();

    return (
        <>
            {
                isAddSegmentModalOpen ? <AddSegmentModal /> : ""
            }
            {
                isEditSegmentModalOpen ? <EditSegmentModal /> : ""
            }
            {
                isDeleteSegmentModalOpen ? <DeleteSegmentModal /> : ""
            }
            <div className="w-full bg-white rounded-xs border border-[#ebebeb]">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-5 py-2 border-b border-[#ebebeb]">

                    <div className="flex items-center gap-3">
                        <h2 className="text-lg font-[700] text-[#111111]">
                            All Segments
                        </h2>

                        <div className="h-7 px-3 rounded-full bg-[#ffe9e9] text-[#ff3b30] text-xs font-[600] flex items-center justify-center">
                            1,284
                        </div>
                        <button className="h-15 lg:h-10 px-3 rounded-[8px] border border-[#dddddd] bg-red-500 text-xs font-[500] text-white flex items-center gap-2 cursor-pointer"
                            onClick={openAddSegmentModal}
                        >
                        <AddIcon color="white" size="6"/>
                            Add Segment
                        </button>
                    </div>

                    <div className="flex items-center gap-3">
                        <p className="text-xs text-[#666666]">
                            Show
                        </p>
                        <select className="w-[80px] h-[42px] rounded-lg border border-[#e5e5e5] bg-white px-3 text-xs outline-none">
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>

                        <p className="text-xs text-[#666666]">
                            entries
                        </p>
                    </div>

                </div>

                <div className="overflow-x-auto">

                    <table className="min-w-[1250px]">

                    <thead className="bg-[#fafafa] border-b border-[#ebebeb]">
                        <tr>

                            <th className="px-5 py-2 text-left text-[13px] font-[700] text-[#111111]">
                                #
                            </th>

                            <th className="px-5 py-2 text-left text-[13px] font-[700] text-[#111111]">
                                Name
                            </th>

                            <th className="px-5 py-2 text-left text-[13px] font-[700] text-[#111111]">
                                Updated At
                            </th>

                            <th className="px-5 py-2 text-left text-[13px] font-[700] text-[#111111]">
                                Actions
                            </th>

                        </tr>
                    </thead>

                    <tbody>

                        {currentItems.map((item, index) => (

                            <tr
                                key={item.id}
                                className="border-b border-[#ebebeb] hover:bg-[#fafafa]"
                            >

                                <td className="px-5 py-2 text-xs text-[#111111]">
                                    {offset + index + 1}
                                </td>

                                <td className="px-5 py-2 text-xs text-[#555555] whitespace-nowrap">
                                    {item.name}
                                </td>

                                <td className="px-5 py-2 text-xs text-[#555555] whitespace-nowrap">
                                    {item.updatedAt}
                                </td>

                                <td className="px-5 py-2">

                                    <div className="flex items-center gap-2">

                                        <button className="w-9 h-9 rounded-lg border border-[#e5e5e5] flex items-center justify-center hover:bg-[#f5f5f5] cursor-pointer"
                                        onClick={openEditSegmentModal}
                                        >
                                            <EditIcon />
                                        </button>

                                        <button className="w-9 h-9 rounded-lg border border-[#e5e5e5] text-red-500 flex items-center justify-center hover:bg-[#fff5f5] cursor-pointer"
                                        onClick={openDeleteSegmentModal}
                                        >
                                            <DeleteIcon color="red"/>
                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 px-5 py-2">

                    <p className="text-xs text-[#666666]">
                        Showing {offset + 1} to{" "}
                        {Math.min(offset + itemsPerPage, Segments.length)} of{" "}
                        {Segments.length} entries
                    </p>

                    <ReactPaginate
                        previousLabel="<"
                        nextLabel=">"
                        breakLabel="..."
                        pageCount={pageCount}
                        onPageChange={handlePageClick}

                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}

                        containerClassName="flex items-center gap-2"

                        pageClassName="w-10 h-10 rounded-lg border border-[#e5e5e5] flex items-center justify-center text-xs font-[500] text-[#555555] cursor-pointer hover:bg-[#f5f5f5]"

                        activeClassName="!bg-[#ff0000] !text-white !border-[#ff0000]"

                        previousClassName="w-10 h-10 rounded-lg border border-[#e5e5e5] flex items-center justify-center cursor-pointer hover:bg-[#f5f5f5]"

                        nextClassName="w-10 h-10 rounded-lg border border-[#e5e5e5] flex items-center justify-center cursor-pointer hover:bg-[#f5f5f5]"

                        breakClassName="px-2 text-[#555555]"

                        disabledClassName="opacity-40 cursor-not-allowed"
                    />

                </div>

            </div>
        </>
    );
}