import React from 'react'

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-10 pb-2 px-6 mt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start">
        {/* ซ้าย: โลโก้ + location */}
        <div className="flex flex-col items-start min-w-[180px] mb-8 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <img src="/Navbar/Group 209.jpg" alt="Artco Logo" className="h-14 w-auto" />
          </div>
          <span className="text-gray-400 text-sm">Bangkok, Thailand</span>
        </div>
        {/* กลาง: Links + Help */}
        <div className="flex-1 flex flex-col md:flex-row justify-center items-start gap-12">
          <div className="flex flex-col items-start min-w-[120px]">
            <span className="text-gray-400 mb-2 font-medium">Links</span>
            <a href="#" className="font-semibold mb-1 hover:text-orange-500 transition">Home</a>
            <a href="#" className="font-semibold mb-1 hover:text-orange-500 transition">Shop</a>
            <a href="#" className="font-semibold mb-1 hover:text-orange-500 transition">About</a>
            <a href="#" className="font-semibold hover:text-orange-500 transition">Contact</a>
          </div>
          <div className="flex flex-col items-start min-w-[150px] mt-6 md:mt-0">
            <span className="text-gray-400 mb-2 font-medium">Help</span>
            <a href="#" className="font-semibold mb-1 hover:text-orange-500 transition">Payment Options</a>
            <a href="#" className="font-semibold mb-1 hover:text-orange-500 transition">Returns</a>
            <a href="#" className="font-semibold hover:text-orange-500 transition">Privacy Policies</a>
          </div>
        </div>
        {/* ขวา: Newsletter */}
        <div className="flex flex-col items-start min-w-[220px] mt-8 md:mt-0">
          <span className="text-gray-400 mb-2 font-medium">Newsletter</span>
          <div className="flex items-center gap-2 mb-2 w-full">
            <input type="email" placeholder="Enter Your Email Address" className="border-b border-gray-400 bg-transparent px-2 py-1 text-sm focus:outline-none flex-1" />
            <button className="text-xs font-bold border-b border-black hover:text-orange-500 transition">SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200" />
      <div className="text-xs text-gray-600 pl-2">2025 Artco. All rights reserved</div>
    </footer>
  )
}
