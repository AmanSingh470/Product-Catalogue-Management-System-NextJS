import { ToggleSidebarProvider } from "@/context/admin/sidebar-context";
import SideBar from "@/components/Admin/SideBar";
import Header from "@/components/Admin/Dashboard/Header";
import ProductIcon from "@/components/Icons/ProductIcon";
import ProductTable from "@/components/Admin/Product/ProductTable";
import { ProductModalProvider } from "@/context/admin/product-context";
import ActiveProductIcon from "@/components/Icons/ActiveProductIcon";
import InActiveProductIcon from "@/components/Icons/InActiveProductIcon";
import Searchbar from "@/components/Admin/Searchbar";
import ResetIcon from "@/components/Icons/ResetIcon";

export default function page() {

  return (
    <>
      <ToggleSidebarProvider>
        <ProductModalProvider>
          {/* <DeleteProductModal /> */}
          <div className="flex">
            <SideBar />
            <div className="flex-1 min-w-0 p-5">
              <Header />
              <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 gap-3">
                <div className="flex w-full h-25 text-center bg-white rounded-sm shadow-md justify-evenly items-center">
                  <div className="w-10 bg-black rounded-lg p-2">
                    <ProductIcon />
                  </div>
                  <div>
                    <h6 className="text-xs font-semibold mb-1">Total Products</h6>
                    <h6 className="text-xl text-red-500 font-medium">1,284</h6>
                    <p className="text-xs">All Products</p>

                  </div>
                </div>
                <div className="flex w-full h-25 text-center bg-white rounded-sm shadow-md justify-evenly items-center">
                  <div className="w-10 bg-black rounded-lg p-2">
                    <ActiveProductIcon />
                  </div>
                  <div>
                    <h6 className="text-xs font-semibold mb-1">Active Products</h6>
                    <h6 className="text-xl text-green-500 font-medium">86</h6>
                    <p className="text-xs">88.6% Active</p>
                  </div>
                </div>
                <div className="flex w-full h-25 text-center bg-white rounded-sm shadow-md justify-evenly items-center">
                  <div className="w-10 bg-black rounded-lg p-2">
                    <InActiveProductIcon />
                  </div>
                  <div>
                    <h6 className="text-xs font-semibold mb-1">Inactive Product</h6>
                    <h6 className="text-xl text-red-500 font-medium">24</h6>
                    <p className="text-xs">10.3% Inactive</p>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white px-5 py-4 mt-5">
                <div className="flex flex-wrap items-end gap-4">

                  <div className="min-w-[210px] flex-1">
                    <p className="text-[12px] font-[600] text-[#111111] mb-[8px]">
                      Search Product
                    </p>

                    <Searchbar />
                  </div>

                  <div className="w-[150px]">
                    <p className="text-[12px] font-[600] text-[#111111] mb-[8px]">
                      Category
                    </p>
                    <div className="flex border border-gray-400 hover:border-black px-3 h-11 rounded-xs">
                      <select className="w-full rounded-xs bg-white text-xs text-[#6b7280] outline-none items-center">
                        <option>All Categories</option>
                        <option>All Categories</option>
                        <option>All Categories</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-[150px]">
                    <p className="text-[12px] font-[600] text-[#111111] mb-[8px]">
                      Segment
                    </p>
                    <div className="flex border border-gray-400 hover:border-black px-3 h-11 rounded-xs">
                      <select className="w-full rounded-xs bg-white text-xs text-[#6b7280] outline-none items-center">
                        <option>All Segments</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-[150px]">
                    <p className="text-[12px] font-[600] text-[#111111] mb-[8px]">
                      Division
                    </p>
                    <div className="flex border border-gray-400 hover:border-black px-3 h-11 rounded-xs">
                      <select className="w-full rounded-xs bg-white text-xs text-[#6b7280] outline-none items-center">
                        <option>All Divisions</option>
                      </select>
                    </div>
                  </div>

                  <div className="w-[150px]">
                    <p className="text-[12px] font-[600] text-[#111111] mb-[8px]">
                      Status
                    </p>
                    <div className="flex border border-gray-400 hover:border-black px-3 h-11 rounded-xs">
                      <select className="w-full rounded-xs bg-white text-xs text-[#6b7280] outline-none items-center">
                        <option>All Status</option>
                      </select>
                    </div>
                  </div>

                  <button className="w-[80px] h-11 border border-gray-400 hover:border-black rounded-xs bg-white text-xs font-medium text-[#6b7280] flex items-center px-3 cursor-pointer">
                    <ResetIcon />

                    Reset
                  </button>

                </div>
              </div>

              <div className="mt-5">
                <ProductTable />
              </div>

            </div>
          </div>
        </ProductModalProvider>
      </ToggleSidebarProvider>

    </>
  )
}
