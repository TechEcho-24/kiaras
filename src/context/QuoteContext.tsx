"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, PRODUCTS } from "@/data/products";

export interface QuoteItem {
  product: Product;
  quantity: number;
  notes?: string;
}

interface QuoteContextType {
  items: QuoteItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  isDrawerOpen: boolean;
  openDrawer: (withProduct?: Product) => void;
  closeDrawer: () => void;
  totalItems: number;
  quickViewProduct: Product | null;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  toastMessage: string | null;
  showToast: (message: string) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  // Initialize with the flagship Shahi Jal Mahal hamper for immediate richness
  const [items, setItems] = useState<QuoteItem[]>(() => {
    const defaultProduct = PRODUCTS.find((p) => p.id === "shahi-jal-mahal") || PRODUCTS[0];
    return defaultProduct ? [{ product: defaultProduct, quantity: 25 }] : [];
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  const addItem = (product: Product, quantity: number = 10) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added "${product.name}" to your quote request!`);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast("Item removed from quote.");
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearQuote = () => {
    setItems([]);
  };

  const openDrawer = (withProduct?: Product) => {
    if (withProduct) {
      addItem(withProduct, 10);
    }
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <QuoteContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearQuote,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        totalItems,
        quickViewProduct,
        openQuickView,
        closeQuickView,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}
