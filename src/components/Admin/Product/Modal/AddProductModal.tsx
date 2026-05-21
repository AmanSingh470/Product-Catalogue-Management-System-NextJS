"use client";
import { useProductModal } from "@/context/admin/product-context";
import AddIcon from "@/components/Icons/AddIcon";
import CrossIcon from "@/components/Icons/CrossIcon";
import TickIcon from "@/components/Icons/TickIcon";
import { Upload } from "lucide-react";

export default function AddProductModal() {
  const { closeAddProductModal } = useProductModal();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-180 max-w-5xl overflow-hidden rounded-[10px] bg-white shadow-2xl">

        {/* HEADER */}
        <div className="flex items-start justify-between border-b border-gray-200 px-3 py-3 sm:px-3">
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
              <AddIcon color="red" size="8"/>
            </div>

            <div>
              <h2 className="text-md font-bold text-[#1E1E1E]">
                Add Product
              </h2>

              <p className="mt-1 text-xs text-[#7A7A7A]">
                Update the product details below.
              </p>
            </div>

          </div>

          <button className="rounded-lg p-2 transition hover:bg-gray-100 cursor-pointer"
            onClick={closeAddProductModal}
          >
            <CrossIcon color="black" />
          </button>
        </div>

        {/* BODY */}
        <div className="max-h-[85vh] overflow-y-auto px-4 py-4 sm:px-8">

          <form className="space-y-3">

            {/* TITLE */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-[#1E1E1E]">
                Name <span className="text-red-500">*</span>
              </label>

              <input
                type="text"
                defaultValue="Car Dashboard Panel"
                className="h-8 w-full rounded-[8px] border border-[#D9DDE3] px-2 text-xs outline-none transition focus:border-red-500"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="mb-1 block text-xs font-semibold text-[#1E1E1E]">
                Description <span className="text-red-500">*</span>
              </label>

              <textarea
                rows={5}
                defaultValue="Premium dashboard panel with high durability and sleek finish."
                className="w-full resize-none rounded-[8px] border border-[#D9DDE3] px-2 py-2 text-xs outline-none transition focus:border-red-500"
              />
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {/* CATEGORY */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#1E1E1E]">
                  Category <span className="text-red-500">*</span>
                </label>

                <select className="h-8 w-full rounded-[8px] border border-[#D9DDE3] px-2 text-xs outline-none focus:border-red-500">
                  <option>Car Accessories</option>
                </select>
              </div>

              {/* SEGMENT */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#1E1E1E]">
                  Segment <span className="text-red-500">*</span>
                </label>

                <select className="h-8 w-full rounded-[8px] border border-[#D9DDE3] px-2 text-xs outline-none focus:border-red-500">
                  <option>Interior & Exterior Systems</option>
                </select>
              </div>

              {/* DIVISION */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#1E1E1E]">
                  Division <span className="text-red-500">*</span>
                </label>

                <select className="h-8 w-full rounded-[8px] border border-[#D9DDE3] px-2 text-xs outline-none focus:border-red-500">
                  <option>Polymer & Modules Division</option>
                </select>
              </div>

              {/* COMPANY */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#1E1E1E]">
                  Company <span className="text-red-500">*</span>
                </label>

                <select className="h-8 w-full rounded-[8px] border border-[#D9DDE3] px-2 text-xs outline-none focus:border-red-500">
                  <option>Mahindra & Mahindra</option>
                </select>
              </div>

              {/* CONTACT PERSON */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#1E1E1E]">
                  Company Contact Person <span className="text-red-500">*</span>
                </label>

                <select className="h-8 w-full rounded-[8px] border border-[#D9DDE3] px-2 text-xs outline-none focus:border-red-500">
                  <option>Neha Verma</option>
                </select>
              </div>

              {/* STATUS */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#1E1E1E]">
                  Status <span className="text-red-500">*</span>
                </label>

                <select className="h-8 w-full rounded-[8px] border border-[#D9DDE3] px-2 text-xs outline-none focus:border-red-500">
                  <option>Active</option>
                </select>
              </div>

            </div>

            {/* PRODUCT MEDIA */}
            <div className="w-full">
              <div className="flex items-start justify-between mb-3 gap-3">
                <div>
                  <h2 className="text-[16px] font-semibold text-black">
                    Product Media
                  </h2>

                  <p className="text-[12px] text-[#6b7280] mt-1">
                    Upload product images, videos, and documents
                  </p>
                </div>

                <div className="px-3 py-1.5 rounded-lg border border-red-200 bg-red-50 text-red-500 text-[11px] font-medium whitespace-nowrap">
                  Max 10 Files
                </div>
              </div>

              <div className="border border-dashed border-[#d1d5db] rounded-[18px] min-h-[220px] flex flex-col items-center justify-center text-center p-4 transition-all duration-300 hover:border-red-400 hover:bg-red-50/20 cursor-pointer">
                <div className="w-9 h-9 rounded-xs bg-black flex items-center justify-center shadow-md">
                  <Upload className="w-4 h-4 text-white stroke-[2]" />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-black">
                  Drag & Drop Files Here
                </h3>

                <p className="mt-2 text-[12px] leading-3 text-[#6b7280] max-w-[360px]">
                  Upload thumbnails, gallery images,
                  videos or PDF documents.
                </p>

                <button className="mt-3 h-8 px-3 rounded-xl bg-black text-white text-[13px] font-medium hover:bg-red-500 transition-all duration-300 cursor-pointer"
                  type="button"
                >
                  Browse Files
                </button>

                <div className="flex items-center gap-2 mt-3 flex-wrap justify-center">
                  {["PNG", "JPG", "WEBP", "MP4", "PDF"].map((item) => (
                    <div
                      key={item}
                      className="h-8 px-4 rounded-lg border border-[#e5e5e5] bg-white flex items-center justify-center text-[11px] font-medium text-[#6b7280]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>


            {/* FOOTER */}
            <div className="flex flex-col-reverse justify-end gap-4 pt-2 sm:flex-row">

              <button
                type="button"
                className="h-10 rounded-[8px] border border-[#D9DDE3] px-8 text-xs font-medium text-[#1E1E1E] transition hover:bg-gray-100 cursor-pointer"
                onClick={closeAddProductModal}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex h-10 items-center justify-center gap-3 rounded-[8px] bg-[#FF0000] px-8 text-xs font-medium text-white transition hover:bg-red-700 cursor-pointer"
              >
                <TickIcon />
                Save Product
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}