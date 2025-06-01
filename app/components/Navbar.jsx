"use client";

import Link from 'next/link'
import { useCart } from './CartContext';

export default function Navbar() {
    const { cart } = useCart?.() || { cart: [] };
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
    return (
        <nav className="bg-gray-200 px-8 py-3 flex items-center justify-between shadow container">
            {/* โลโก้ */}
            <div className="font-bold text-xl text-gray-800">Artco</div>

            {/* เมนูนำทาง */}
            <ul className="flex gap-8 text-lg font-medium text-gray-700">
                <li className="hover:text-blue-600 cursor-pointer">หน้าแรก</li>
                <li className="hover:text-blue-600 cursor-pointer">เกี่ยวกับเรา</li>
                <li className="hover:text-blue-600 cursor-pointer">บริการ</li>
                <li className="hover:text-blue-600 cursor-pointer">ติดต่อ</li>
            </ul>

            {/* ปุ่มเข้าสู่ระบบ + ตะกร้า */}
            <div className="flex items-center gap-4">
                <Link href="/cart" className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-700 hover:text-blue-600 transition">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.385c.138.518.602.88 1.14.88h9.246c.538 0 1.002-.362 1.14-.88l1.7-6.385m-15.396 0h15.396M6.75 21a.75.75 0 100-1.5.75.75 0 000 1.5zm10.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                    </svg>
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5 font-bold min-w-[20px] text-center">{cartCount}</span>
                    )}
                </Link>
                <Link
                    href="/login"
                    className="bg-white border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                >
                    เข้าสู่ระบบ
                </Link>
            </div>
        </nav>
    )
}
