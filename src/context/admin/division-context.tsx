"use client";
import { createContext, useContext, useState } from "react";

type DivisionModalContext = {
  isAddDivisionModalOpen: boolean;
  openAddDivisionModal: () => void;
  closeAddDivisionModal: () => void;

  isEditDivisionModalOpen: boolean;
  openEditDivisionModal: () => void;
  closeEditDivisionModal: () => void;

  isDeleteDivisionModalOpen: boolean;
  openDeleteDivisionModal: () => void;
  closeDeleteDivisionModal: () => void;
};

const DivisionModalContext = createContext<DivisionModalContext | null>(null);

export function DivisionModalProvider({ children }: { children: React.ReactNode }) {

  const [isAddDivisionModalOpen, setIsAddDivisionModalOpen] = useState(false);
  const openAddDivisionModal = () => setIsAddDivisionModalOpen(true);
  const closeAddDivisionModal = () => setIsAddDivisionModalOpen(false);

  const [isEditDivisionModalOpen, setIsEditDivisionModalOpen] = useState(false);
  const openEditDivisionModal = () => setIsEditDivisionModalOpen(true);
  const closeEditDivisionModal = () => setIsEditDivisionModalOpen(false);

  const [isDeleteDivisionModalOpen, setIsDeleteDivisionModalOpen] = useState(false);
  const openDeleteDivisionModal = () => setIsDeleteDivisionModalOpen(true);
  const closeDeleteDivisionModal = () => setIsDeleteDivisionModalOpen(false);

  return (
    <DivisionModalContext.Provider
      value={{
        isAddDivisionModalOpen,
        openAddDivisionModal,
        closeAddDivisionModal,

        isEditDivisionModalOpen,
        openEditDivisionModal,
        closeEditDivisionModal,

        isDeleteDivisionModalOpen,
        openDeleteDivisionModal,
        closeDeleteDivisionModal
      }}>
      {children}
    </DivisionModalContext.Provider>
  );
}

export function useDivisionModal() {
  const context = useContext(DivisionModalContext);

  if (!context) {
    throw new Error("useDivisionModal() must be used inside DivisionModalProvider");
  }

  return context;
}