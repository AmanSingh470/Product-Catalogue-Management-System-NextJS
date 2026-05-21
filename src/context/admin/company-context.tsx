"use client";
import { createContext, useContext, useState } from "react";

type CompanyModalContext = {
  isAddCompanyModalOpen: boolean;
  openAddCompanyModal: () => void;
  closeAddCompanyModal: () => void;

  isEditCompanyModalOpen: boolean;
  openEditCompanyModal: () => void;
  closeEditCompanyModal: () => void;

  isDeleteCompanyModalOpen: boolean;
  openDeleteCompanyModal: () => void;
  closeDeleteCompanyModal: () => void;
};

const CompanyModalContext = createContext<CompanyModalContext | null>(null);

export function CompanyModalProvider({ children }: { children: React.ReactNode }) {

  const [isAddCompanyModalOpen, setIsAddCompanyModalOpen] = useState(false);
  const openAddCompanyModal = () => setIsAddCompanyModalOpen(true);
  const closeAddCompanyModal = () => setIsAddCompanyModalOpen(false);

  const [isEditCompanyModalOpen, setIsEditCompanyModalOpen] = useState(false);
  const openEditCompanyModal = () => setIsEditCompanyModalOpen(true);
  const closeEditCompanyModal = () => setIsEditCompanyModalOpen(false);

  const [isDeleteCompanyModalOpen, setIsDeleteCompanyModalOpen] = useState(false);
  const openDeleteCompanyModal = () => setIsDeleteCompanyModalOpen(true);
  const closeDeleteCompanyModal = () => setIsDeleteCompanyModalOpen(false);

  return (
    <CompanyModalContext.Provider
      value={{
        isAddCompanyModalOpen,
        openAddCompanyModal,
        closeAddCompanyModal,

        isEditCompanyModalOpen,
        openEditCompanyModal,
        closeEditCompanyModal,

        isDeleteCompanyModalOpen,
        openDeleteCompanyModal,
        closeDeleteCompanyModal
      }}>
      {children}
    </CompanyModalContext.Provider>
  );
}

export function useCompanyModal() {
  const context = useContext(CompanyModalContext);

  if (!context) {
    throw new Error("useCompanyModal() must be used inside CompanyModalProvider");
  }

  return context;
}