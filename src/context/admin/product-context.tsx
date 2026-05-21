"use client";
import { createContext, useContext, useState } from "react";

type ProductModalContext = {
  isAddProductModalOpen: boolean;
  openAddProductModal: () => void;
  closeAddProductModal: () => void;

  isEditProductModalOpen: boolean;
  openEditProductModal: () => void;
  closeEditProductModal: () => void;

  isDeleteProductModalOpen: boolean;
  openDeleteProductModal: () => void;
  closeDeleteProductModal: () => void;
};

const ProductModalContext = createContext<ProductModalContext | null>(null);

export function ProductModalProvider({ children }: { children: React.ReactNode }) {

  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const openAddProductModal = () => setIsAddProductModalOpen(true);
  const closeAddProductModal = () => setIsAddProductModalOpen(false);

  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const openEditProductModal = () => setIsEditProductModalOpen(true);
  const closeEditProductModal = () => setIsEditProductModalOpen(false);

  const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] = useState(false);
  const openDeleteProductModal = () => setIsDeleteProductModalOpen(true);
  const closeDeleteProductModal = () => setIsDeleteProductModalOpen(false);

  return (
    <ProductModalContext.Provider
      value={{
        isAddProductModalOpen,
        openAddProductModal,
        closeAddProductModal,

        isEditProductModalOpen,
        openEditProductModal,
        closeEditProductModal,

        isDeleteProductModalOpen,
        openDeleteProductModal,
        closeDeleteProductModal
      }}>
      {children}
    </ProductModalContext.Provider>
  );
}

export function useProductModal() {
  const context = useContext(ProductModalContext);

  if (!context) {
    throw new Error("useProductModal() must be used inside ProductModalProvider");
  }

  return context;
}