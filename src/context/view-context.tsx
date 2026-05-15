"use client";
import { createContext, useContext, useState } from "react";

type ViewContextType = {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
};

const ViewContext = createContext<ViewContextType | null>(null);

export function ViewProvider({ children }: {children: React.ReactNode}) {
  const [view, setView] = useState("grid");

  return (
    <ViewContext.Provider
      value={{
        view,
        setView
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);

  if (!context) {
    throw new Error("useView must be used inside ViewProvider");
  }

  return context;
}