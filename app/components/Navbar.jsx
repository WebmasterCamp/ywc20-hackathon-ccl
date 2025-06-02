"use client";

import React, { useState } from 'react';
import Link from 'next/link'
import { useCart } from './CartContext';
import Search from './Search';
import { useRouter } from 'next/navigation';

export default function Navbar({ value, onSearch }) {
    const router = useRouter();
    const { cart } = useCart?.() || { cart: [] };
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-white px-4 sm:px-8 py-3 flex items-center justify-between shadow w-full relative z-20">
            {/* โลโก้ + icon */}
            <div className="flex items-center gap-2 flex-shrink-0">
                <img src="/Navbar/Group 209.jpg" alt="Artco Logo" className="h-10 sm:h-14 w-auto" />
            </div>

            {/* Hamburger (mobile) */}
            <button
                className="sm:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-orange-50 transition"
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle menu"
            >
                <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
                </svg>
            </button>

            {/* เมนูนำทาง (desktop) */}
            <ul className="hidden sm:flex gap-8 text-lg font-medium text-gray-700">
                <li className="hover:text-orange-500 cursor-pointer" onClick={() => router.push('/')}>หน้าหลัก</li>
                <li className="hover:text-orange-500 cursor-pointer">เกี่ยวกับเรา</li>
            </ul>

            {/* ช่องค้นหา (desktop) */}
            <div className="hidden sm:flex items-center bg-[#fcfaf5] rounded-xl px-4 py-2 w-[250px] lg:w-[350px] mx-6">
                <Search value={value} onSearch={onSearch} className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400"/>
            </div>

            {/* ปุ่มกลมสีส้มขวาสุด + ตะกร้า (desktop) */}
            <div className="hidden sm:flex items-center gap-3">
                {/* ปุ่มตะกร้า */}
                <Link href="/cart" className="relative">
                    <button className="w-11 h-11 rounded-full bg-white border border-orange-500 flex items-center justify-center text-orange-500 text-xl shadow hover:bg-orange-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.385c.138.518.602.88 1.14.88h9.246c.538 0 1.002-.362 1.14-.88l1.7-6.385m-15.396 0h15.396M6.75 21a.75.75 0 100-1.5.75.75 0 000 1.5zm10.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold min-w-[20px] text-center">{cartCount}</span>
                        )}
                    </button>
                </Link>
                {/* ปุ่ม Login */}
                <button
                    className="w-24 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white text-base font-semibold shadow hover:bg-orange-400 transition"
                    onClick={() => router.push('/login')}
                >
                    Login
                </button>
            </div>

            {/* เมนู (mobile dropdown) */}
            {menuOpen && (
                <div className="absolute left-0 top-full w-full bg-white shadow-lg rounded-b-xl flex flex-col items-stretch gap-2 py-4 px-4 sm:hidden animate-fadeIn z-30">
                    <ul className="flex flex-col gap-2 text-base font-medium text-gray-700">
                        <li className="hover:text-orange-500 cursor-pointer py-2" onClick={() => { setMenuOpen(false); router.push('/'); }}>หน้าหลัก</li>
                        <li className="hover:text-orange-500 cursor-pointer py-2">เกี่ยวกับเรา</li>
                    </ul>
                    <div className="flex items-center bg-[#fcfaf5] rounded-xl px-3 py-2 mt-2">
                        <Search value={value} onSearch={onSearch} className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400"/>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <Link href="/cart" className="relative flex-1">
                            <button className="w-full h-11 rounded-full bg-white border border-orange-500 flex items-center justify-center text-orange-500 text-xl shadow hover:bg-orange-100 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.385c.138.518.602.88 1.14.88h9.246c.538 0 1.002-.362 1.14-.88l1.7-6.385m-15.396 0h15.396M6.75 21a.75.75 0 100-1.5.75.75 0 000 1.5zm10.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                </svg>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold min-w-[20px] text-center">{cartCount}</span>
                                )}
                            </button>
                        </Link>
                        <button
                            className="flex-1 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white text-base font-semibold shadow hover:bg-orange-400 transition"
                            onClick={() => { setMenuOpen(false); router.push('/login'); }}
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
