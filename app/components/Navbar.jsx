"use client";

import Link from 'next/link'
import { useCart } from './CartContext';
import Search from './Search';
import { useRouter } from 'next/navigation';

export default function Navbar({ value, onSearch }) {
    const router = useRouter();
    const { cart } = useCart?.() || { cart: [] };
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
    return (
        <nav className="bg-white border-t-4 border-purple-300 px-8 py-3 flex items-center justify-between shadow container">
            {/* โลโก้ + icon */}
            <div className="flex items-center gap-2">
                <img src="/Navbar/Group 209.jpg" alt="Artco Logo" className="h-14 w-auto" />
            </div>

            {/* toggle ศิลปิน/ผู้ซื้อ */}
            <div className="flex items-center bg-[#fcfaf5] rounded-full p-1 mx-6">
                <button className="px-5 py-1 rounded-full text-gray-500 text-base font-medium focus:outline-none">ศิลปิน</button>
                <button className="px-5 py-1 rounded-full bg-orange-500 text-white text-base font-medium shadow focus:outline-none">ผู้ซื้อ</button>
            </div>

            {/* เมนูนำทาง */}
            <ul className="flex gap-8 text-lg font-medium text-gray-700">
                <li className="hover:text-orange-500 cursor-pointer" onClick={() => router.push('/')}>หน้าหลัก</li>
                <li className="hover:text-orange-500 cursor-pointer">เกี่ยวกับเรา</li>
            </ul>

            {/* ช่องค้นหา */}
            <div className="flex items-center bg-[#fcfaf5] rounded-xl px-4 py-2 w-[350px] mx-6">
                <Search value={value} onSearch={onSearch} className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400"/>
            </div>

            {/* ปุ่มกลมสีส้มขวาสุด + ตะกร้า */}
            <div className="flex items-center gap-3">
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
                    className="w-28 h-11 rounded-full bg-orange-500 flex items-center justify-center text-white text-base font-semibold shadow hover:bg-orange-400 transition"
                    onClick={() => router.push('/login')}
                >
                    Login
                </button>
            </div>
        </nav>
    )
}
