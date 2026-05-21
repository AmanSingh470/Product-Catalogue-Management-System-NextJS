"use client";
import { createContext, useContext, useState } from "react";

type CategoryModalContext = {
  isAddCategoryModalOpen: boolean;
  openAddCategoryModal: () => void;
  closeAddCategoryModal: () => void;

  isEditCategoryModalOpen: boolean;
  openEditCategoryModal: () => void;
  closeEditCategoryModal: () => void;

  isDeleteCategoryModalOpen: boolean;
  openDeleteCategoryModal: () => void;
  closeDeleteCategoryModal: () => void;
};

const CategoryModalContext = createContext<CategoryModalContext | null>(null);

export function CategoryModalProvider({ children }: { children: React.ReactNode }) {

  const [isAddCategoryModalOpen, setIsAddCategoryModalOpen] = useState(false);
  const openAddCategoryModal = () => setIsAddCategoryModalOpen(true);
  const closeAddCategoryModal = () => setIsAddCategoryModalOpen(false);

  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  const openEditCategoryModal = () => setIsEditCategoryModalOpen(true);
  const closeEditCategoryModal = () => setIsEditCategoryModalOpen(false);

  const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] = useState(false);
  const openDeleteCategoryModal = () => setIsDeleteCategoryModalOpen(true);
  const closeDeleteCategoryModal = () => setIsDeleteCategoryModalOpen(false);

  return (
    <CategoryModalContext.Provider
      value={{
        isAddCategoryModalOpen,
        openAddCategoryModal,
        closeAddCategoryModal,

        isEditCategoryModalOpen,
        openEditCategoryModal,
        closeEditCategoryModal,

        isDeleteCategoryModalOpen,
        openDeleteCategoryModal,
        closeDeleteCategoryModal
      }}>
      {children}
    </CategoryModalContext.Provider>
  );
}

export function useCategoryModal() {
  const context = useContext(CategoryModalContext);

  if (!context) {
    throw new Error("useCategoryModal() must be used inside CategoryModalProvider");
  }

  return context;
}