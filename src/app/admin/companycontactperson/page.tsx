import { ToggleSidebarProvider } from "@/context/admin/sidebar-context";
import SideBar from "@/components/Admin/SideBar";
import Header from "@/components/Admin/Dashboard/Header";
import CompanyContactPersonIcon from "@/components/Icons/CompanyContactPersonIcon";
import CompanyContactPersonTable from "@/components/Admin/CompanyContactPerson/CompanyContactPersonTable";
import { CompanyContactPersonModalProvider } from "@/context/admin/companycontactperson-context";
import Searchbar from "@/components/Admin/Searchbar";

export default function page() {

  return (
    <>
      <ToggleSidebarProvider>
        <CompanyContactPersonModalProvider>
        {/* <DeleteCompanyContactPersonModal /> */}
        <div className="flex">
          <SideBar />
          <div className="flex-1 min-w-0 p-5">
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-3 mt-5 gap-3">
              <div className="flex w-full h-25 text-center bg-white rounded-sm shadow-md justify-evenly items-center">
                <div className="w-10 bg-black rounded-lg p-2">
                  <CompanyContactPersonIcon />
                </div>
                <div>
                  <h6 className="text-xs font-semibold mb-1">Total Company Contact Persons</h6>
                  <h6 className="text-xl text-red-500 font-medium">1,284</h6>
                  <p className="text-xs">All Company Contact Person</p>

                </div>
              </div>
            </div>

            <div className="w-full bg-white px-5 py-4 mt-5">
              <div className="flex flex-wrap items-end gap-4">

                <div className="flex-1">
                  <p className="text-[12px] font-[600] text-[#111111] mb-[8px]">
                    Search Company Contact Person
                  </p>
                  <Searchbar/>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <CompanyContactPersonTable />
            </div>

          </div>
        </div>
        </CompanyContactPersonModalProvider>
      </ToggleSidebarProvider>
    </>
  )
}
