"use client";
import { createContext, useContext, useState } from "react";

type SegmentModalContext = {
  isAddSegmentModalOpen: boolean;
  openAddSegmentModal: () => void;
  closeAddSegmentModal: () => void;

  isEditSegmentModalOpen: boolean;
  openEditSegmentModal: () => void;
  closeEditSegmentModal: () => void;

  isDeleteSegmentModalOpen: boolean;
  openDeleteSegmentModal: () => void;
  closeDeleteSegmentModal: () => void;
};

const SegmentModalContext = createContext<SegmentModalContext | null>(null);

export function SegmentModalProvider({ children }: { children: React.ReactNode }) {

  const [isAddSegmentModalOpen, setIsAddSegmentModalOpen] = useState(false);
  const openAddSegmentModal = () => setIsAddSegmentModalOpen(true);
  const closeAddSegmentModal = () => setIsAddSegmentModalOpen(false);

  const [isEditSegmentModalOpen, setIsEditSegmentModalOpen] = useState(false);
  const openEditSegmentModal = () => setIsEditSegmentModalOpen(true);
  const closeEditSegmentModal = () => setIsEditSegmentModalOpen(false);

  const [isDeleteSegmentModalOpen, setIsDeleteSegmentModalOpen] = useState(false);
  const openDeleteSegmentModal = () => setIsDeleteSegmentModalOpen(true);
  const closeDeleteSegmentModal = () => setIsDeleteSegmentModalOpen(false);

  return (
    <SegmentModalContext.Provider
      value={{
        isAddSegmentModalOpen,
        openAddSegmentModal,
        closeAddSegmentModal,

        isEditSegmentModalOpen,
        openEditSegmentModal,
        closeEditSegmentModal,

        isDeleteSegmentModalOpen,
        openDeleteSegmentModal,
        closeDeleteSegmentModal
      }}>
      {children}
    </SegmentModalContext.Provider>
  );
}

export function useSegmentModal() {
  const context = useContext(SegmentModalContext);

  if (!context) {
    throw new Error("useSegmentModal() must be used inside SegmentModalProvider");
  }

  return context;
}