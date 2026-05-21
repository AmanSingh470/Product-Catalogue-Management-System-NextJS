import { ToggleSidebarProvider } from "@/context/admin/sidebar-context";
import SideBar from "@/components/Admin/SideBar";
import Header from "@/components/Admin/Dashboard/Header";
import CategoryIcon from "@/components/Icons/CategoryIcon";
import CategoryTable from "@/components/Admin/Category/CategoryTable";
import { CategoryModalProvider } from "@/context/admin/category-context";
import Searchbar from "@/components/Admin/Searchbar";

export default function page() {

  return (
    <>
      <ToggleSidebarProvider>
        <CategoryModalProvider>
        {/* <DeleteCategoryModal /> */}
        <div className="flex">
          <SideBar />
          <div className="flex-1 min-w-0 p-5">
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 gap-3">
              <div className="flex w-full h-25 text-center bg-white rounded-sm shadow-md justify-evenly items-center">
                <div className="w-10 bg-black rounded-lg p-2">
                  <CategoryIcon />
                </div>
                <div>
                  <h6 className="text-xs font-semibold mb-1">Total Categories</h6>
                  <h6 className="text-xl text-red-500 font-medium">1,284</h6>
                  <p className="text-xs">All Categories</p>

                </div>
              </div>
            </div>

            <div className="w-full bg-white px-5 py-4 mt-5">
              <div className="flex flex-wrap items-end gap-4">

                <div className="flex-1">
                  <p className="text-[12px] font-[600] text-[#111111] mb-[8px]">
                    Search Category
                  </p>
                  <Searchbar/>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <CategoryTable />
            </div>

          </div>
        </div>
        </CategoryModalProvider>
      </ToggleSidebarProvider>
    </>
  )
}
