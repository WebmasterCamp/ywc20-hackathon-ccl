"use client";
import { CartProvider } from "./CartContext";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";

export default function AppShell({ children }) {
  const [search, setSearch] = useState("");
  return (
    <CartProvider>
      <Navbar value={search} onSearch={setSearch} />
      {children && React.cloneElement(children, { search })}
      <Footer />
    </CartProvider>
  );
} 