"use client";
import {useProductModal} from "@/context/admin/product-context";
import EditIcon from "@/components/Icons/EditIcon";
import ProductMedia from "@/components/Admin/Product/ProductMedia";
import CrossIcon from "@/components/Icons/CrossIcon";
import CalenderIcon from "@/components/Icons/CalenderIcon";
import TickIcon from "@/components/Icons/TickIcon";

export default function EditProductModal() {
  const {closeEditProductModal} = useProductModal();    

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-180 max-w-5xl overflow-hidden rounded-[10px] bg-white shadow-2xl">

        {/* HEADER */}
        <div className="flex items-start justify-between border-b border-gray-200 px-3 py-3 sm:px-3">
          <div className="flex items-start gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
              <EditIcon />
            </div>

            <div>
              <h2 className="text-md font-bold text-[#1E1E1E]">
                Edit Product
              </h2>

              <p className="mt-1 text-xs text-[#7A7A7A]">
                Update the product details below.
              </p>
            </div>

          </div>

          <button className="rounded-lg p-2 transition hover:bg-gray-100 cursor-pointer"
            onClick={closeEditProductModal}
          >
            <CrossIcon color="black"/>
          </button>
        </div>

        {/* BODY */}
        <div className="max-h-[85vh] overflow-y-auto px-4 py-4 sm:px-8">

          <form className="space-y-3">

            {/* TITLE */}
            <div>
              <label className="mb-2 block text-xs font-semibold text-[#1E1E1E]">
                Product Title <span className="text-red-500">*</span>
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

              {/* CREATED */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#1E1E1E]">
                  Created At
                </label>

                <div className="flex h-8 items-center gap-3 rounded-[8px] border border-[#E5E7EB] bg-[#F7F8FA] px-2 text-[#6B7280]">

                  <CalenderIcon />

                  <span className="text-xs">
                    06 May 2026 02:30 PM
                  </span>
                </div>
              </div>

              {/* UPDATED */}
              <div>
                <label className="mb-1 block text-xs font-semibold text-[#1E1E1E]">
                  Updated At
                </label>

                <div className="flex h-8 items-center gap-3 rounded-[8px] border border-[#E5E7EB] bg-[#F7F8FA] px-2 text-[#6B7280]">

                  <CalenderIcon />

                  <span className="text-xs">
                    10 May 2026 01:32 PM
                  </span>
                </div>
              </div>

            </div>

             {/* PRODUCT MEDIA */}
              <div>
                <div className="rounded-[10px] border border-[#D9DDE3] p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <ProductMedia />
                  </div>
                </div>
              </div>

            {/* FOOTER */}
            <div className="flex flex-col-reverse justify-end gap-4 pt-2 sm:flex-row">

              <button
                type="button"
                className="h-10 rounded-[8px] border border-[#D9DDE3] px-8 text-xs font-medium text-[#1E1E1E] transition hover:bg-gray-100 cursor-pointer"
                onClick={closeEditProductModal}
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