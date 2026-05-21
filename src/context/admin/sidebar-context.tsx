"use client";
import { createContext, useContext, useState } from "react";

type toggleSidebarContext = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const ToggleSideBarContext = createContext<toggleSidebarContext | null>(null);

export function ToggleSidebarProvider({ children }: { children: React.ReactNode }) {

    const [isSidebarOpen, setIsSidebarIsOpen] = useState(true);
    const openSidebar = () => setIsSidebarIsOpen(true);
    const closeSidebar = () => setIsSidebarIsOpen(false);
    
  return (
    <ToggleSideBarContext.Provider 
    value={{ 
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        }}>
      {children}
    </ToggleSideBarContext.Provider>
  );
}

export function useToggleSidebar() {
  const context = useContext(ToggleSideBarContext);

  if (!context) {
    throw new Error("useToggleSidebar() must be used inside ToggleSidebarProvider");
  }

  return context;
}