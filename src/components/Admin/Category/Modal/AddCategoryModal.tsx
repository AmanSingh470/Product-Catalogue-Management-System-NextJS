"use client";
import {useCategoryModal} from "@/context/admin/category-context";
import AddIcon from "@/components/Icons/AddIcon";
import TickIcon from "@/components/Icons/TickIcon";
import CrossIcon from "@/components/Icons/CrossIcon";

export default function AddCategoryModal() {
    const {closeAddCategoryModal} = useCategoryModal();    
    
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
                Add Category
              </h2>

              <p className="mt-1 text-xs text-[#7A7A7A]">
                Update the category details below.
              </p>
            </div>

          </div>

          <button className="rounded-lg p-2 transition hover:bg-gray-100 cursor-pointer"
            onClick={closeAddCategoryModal}
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
                defaultValue="Electrical and Electronics"
                className="h-8 w-full rounded-[8px] border border-[#D9DDE3] px-2 text-xs outline-none transition focus:border-red-500"
              />
            </div>

            {/* FOOTER */}
            <div className="flex flex-col-reverse justify-end gap-4 pt-2 sm:flex-row">

              <button
                type="button"
                className="h-10 rounded-[8px] border border-[#D9DDE3] px-8 text-xs font-medium text-[#1E1E1E] transition hover:bg-gray-100 cursor-pointer"
                onClick={closeAddCategoryModal}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="flex h-10 items-center justify-center gap-3 rounded-[8px] bg-[#FF0000] px-8 text-xs font-medium text-white transition hover:bg-red-700 cursor-pointer"
              >
                <TickIcon />

                Save Category
              </button>

            </div>

          </form>

        </div>
      </div>
    </div>
  );
}