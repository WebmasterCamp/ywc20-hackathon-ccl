import React from "react";

export default function DealCard({ image, title, price, oldPrice, discount, rating, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col w-full max-w-xs overflow-hidden border border-gray-100 transition-transform duration-300">
      {/* รูปภาพสินค้า */}
      <div className="relative w-full aspect-square bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-t-2xl" />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">-{discount}%</span>
        )}
        <span className="absolute top-3 right-3 bg-white/80 text-yellow-500 text-sm font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
          <svg width="16" height="16" fill="currentColor" className="inline-block"><path d="M8 12.5l-4.33 2.28.83-4.84L1 6.77l4.87-.7L8 1.5l2.13 4.57 4.87.7-3.5 3.17.83 4.84z"/></svg>
          {rating}
        </span>
      </div>
      {/* ข้อมูลสินค้า */}
      <div className="flex flex-col flex-1 px-5 py-4 gap-1">
        <div className="font-semibold text-lg text-gray-800 truncate" title={title}>{title}</div>
        {description && <div className="text-gray-500 text-sm truncate mb-1">{description}</div>}
        <div className="flex items-end gap-2 mt-1">
          <span className="text-green-600 font-bold text-xl">฿{price.toLocaleString()}</span>
          {oldPrice && <span className="text-gray-400 line-through text-sm">฿{oldPrice.toLocaleString()}</span>}
        </div>
        <div className="flex justify-center mt-3">
          <button className="w-10 h-10 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white w-[300px] rounded-lg shadow transition" title="เพิ่มลงตะกร้า">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0l1.7 6.385c.138.518.602.88 1.14.88h9.246c.538 0 1.002-.362 1.14-.88l1.7-6.385m-15.396 0h15.396M6.75 21a.75.75 0 100-1.5.75.75 0 000 1.5zm10.5 0a.75.75 0 100-1.5.75.75 0 000 1.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
} 