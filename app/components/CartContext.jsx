'use client';

import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // โหลด cart จาก localStorage (ถ้ามี)
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // sync cart กับ localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((i) => i.id === item.id && JSON.stringify(i.options) === JSON.stringify(item.options));
      if (found) {
        return prev.map((i) => i === found ? { ...i, qty: i.qty + item.qty } : i);
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (idx) => {
    setCart((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateQty = (idx, qty) => {
    setCart((prev) => prev.map((item, i) => i === idx ? { ...item, qty } : item));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart }}>
      {children}
    </CartContext.Provider>
  );
} 