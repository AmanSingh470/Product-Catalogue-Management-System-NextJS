import AdminClient from "@/app/admin/AdminClient";
import { ToggleSidebarProvider } from "@/context/admin/sidebar-context";

export default function page() {
  return (
    <ToggleSidebarProvider>
      <AdminClient />        
    </ToggleSidebarProvider>
  )
}
