"use client";
import { createContext, useContext, useState } from "react";

type CompanyContactPersonModalContext = {
  isAddCompanyContactPersonModalOpen: boolean;
  openAddCompanyContactPersonModal: () => void;
  closeAddCompanyContactPersonModal: () => void;

  isEditCompanyContactPersonModalOpen: boolean;
  openEditCompanyContactPersonModal: () => void;
  closeEditCompanyContactPersonModal: () => void;

  isDeleteCompanyContactPersonModalOpen: boolean;
  openDeleteCompanyContactPersonModal: () => void;
  closeDeleteCompanyContactPersonModal: () => void;
};

const CompanyContactPersonModalContext = createContext<CompanyContactPersonModalContext | null>(null);

export function CompanyContactPersonModalProvider({ children }: { children: React.ReactNode }) {

  const [isAddCompanyContactPersonModalOpen, setIsAddCompanyContactPersonModalOpen] = useState(false);
  const openAddCompanyContactPersonModal = () => setIsAddCompanyContactPersonModalOpen(true);
  const closeAddCompanyContactPersonModal = () => setIsAddCompanyContactPersonModalOpen(false);

  const [isEditCompanyContactPersonModalOpen, setIsEditCompanyContactPersonModalOpen] = useState(false);
  const openEditCompanyContactPersonModal = () => setIsEditCompanyContactPersonModalOpen(true);
  const closeEditCompanyContactPersonModal = () => setIsEditCompanyContactPersonModalOpen(false);

  const [isDeleteCompanyContactPersonModalOpen, setIsDeleteCompanyContactPersonModalOpen] = useState(false);
  const openDeleteCompanyContactPersonModal = () => setIsDeleteCompanyContactPersonModalOpen(true);
  const closeDeleteCompanyContactPersonModal = () => setIsDeleteCompanyContactPersonModalOpen(false);

  return (
    <CompanyContactPersonModalContext.Provider
      value={{
        isAddCompanyContactPersonModalOpen,
        openAddCompanyContactPersonModal,
        closeAddCompanyContactPersonModal,

        isEditCompanyContactPersonModalOpen,
        openEditCompanyContactPersonModal,
        closeEditCompanyContactPersonModal,

        isDeleteCompanyContactPersonModalOpen,
        openDeleteCompanyContactPersonModal,
        closeDeleteCompanyContactPersonModal
      }}>
      {children}
    </CompanyContactPersonModalContext.Provider>
  );
}

export function useCompanyContactPersonModal() {
  const context = useContext(CompanyContactPersonModalContext);

  if (!context) {
    throw new Error("useCompanyContactPersonModal() must be used inside CompanyContactPersonModalProvider");
  }

  return context;
}