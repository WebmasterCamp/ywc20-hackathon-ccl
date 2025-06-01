"use client";

import Link from 'next/link'

export default function Navbar() {
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

            {/* ปุ่มเข้าสู่ระบบ */}
            <Link href="/login" legacyBehavior>
                <a className="bg-white border border-blue-500 text-blue-500 px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                    เข้าสู่ระบบ
                </a>
            </Link>
        </nav>
    )
}
