import React from "react";

export default function DealCard({ image, title, price, oldPrice, discount, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-64">
      <img src={image} alt={title} className="w-40 h-40 object-cover rounded-lg mb-3" />
      <div className="font-medium text-lg text-center mb-1 truncate w-full" title={title}>{title}</div>
      <div className="flex items-center gap-1 mb-1">
        <span className="text-green-600 font-bold text-xl">THB {price}</span>
        <span className="text-gray-400 line-through text-sm">THB {oldPrice}</span>
        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">{discount}% off</span>
      </div>
      <div className="flex items-center gap-1 text-sm text-gray-500">
        <span>{rating}</span>
        <span>★</span>
      </div>
    </div>
  );
} 