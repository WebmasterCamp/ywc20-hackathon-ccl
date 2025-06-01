'use client';
import React from "react";
import mockDeals from "../../components/mockDeals";
import { notFound } from "next/navigation";
import { useState } from "react";
import { useCart } from "../../components/CartContext";

export default function DealDetailPage(props) {
  const params = React.use(props.params);
  const deal = mockDeals.find((d) => d.id === params.id);
  if (!deal) return notFound();
  const { addToCart } = useCart();

  // หาชื่อ label ของ options (dynamic)
  const optionKeys = Object.keys(deal.options || {});
  const [selected, setSelected] = useState(() => Object.fromEntries(optionKeys.map(k => [k, ""])))
  const [qty, setQty] = useState(1);
  const [personal, setPersonal] = useState("");

  const handleSelect = (key, value) => {
    setSelected((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddToCart = () => {
    addToCart({
      id: deal.id,
      title: deal.title,
      image: deal.image,
      price: deal.price,
      options: selected,
      qty,
      personal,
    });
    alert("เพิ่มสินค้าลงตะกร้าแล้ว!");
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 py-6 px-2 md:px-6 max-w-6xl mx-auto w-full">
      {/* Gallery */}
      <div className="flex flex-col gap-3 items-center md:items-start w-full md:w-1/2">
        <div className="relative w-full max-w-xs aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-md">
          <img src={deal.image} alt={deal.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="flex gap-2 flex-wrap justify-center md:justify-start mt-2">
          {deal.images?.map((img, idx) => (
            <img key={idx} src={img} alt="thumb" className="w-14 h-14 object-cover rounded-md border border-gray-200 hover:border-blue-400 transition" />
          ))}
        </div>
      </div>
      {/* Detail */}
      <div className="flex-1 w-full max-w-xl mx-auto md:mx-0">
        <div className="text-green-700 font-bold text-2xl md:text-3xl mb-1 flex flex-wrap items-center gap-2">
          THB {deal.price.toLocaleString()}
          <span className="text-gray-400 line-through text-lg font-normal">THB {deal.oldPrice.toLocaleString()}</span>
          <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">{deal.discount}% off</span>
        </div>
        <div className="text-xl md:text-2xl font-semibold mb-2 break-words">{deal.title}</div>
        <div className="text-gray-500 mb-2 whitespace-pre-line">{deal.description}</div>
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span>โดย <span className="font-medium">{deal.seller}</span></span>
          <span className="text-yellow-500 flex items-center gap-1">★ {deal.rating}</span>
        </div>
        {/* Options */}
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {optionKeys.map((key) => (
            <div key={key}>
              <div className="font-bold mb-1 uppercase tracking-wide text-sm text-gray-700">{key.replace(/_/g, ' ')}</div>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 transition" value={selected[key]} onChange={e => handleSelect(key, e.target.value)}>
                <option value="">เลือกตัวเลือก</option>
                {deal.options[key].map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          ))}
        </div>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-bold text-sm text-gray-700">จำนวน</span>
          <input type="number" min={1} value={qty} onChange={e => setQty(Number(e.target.value))} className="w-20 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 transition" />
        </div>
        <div className="mb-2 font-bold text-sm text-gray-700">Add your personalization</div>
        <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 transition mb-4" rows={3} placeholder="Please leave us your personalization details..." maxLength={1024} value={personal} onChange={e => setPersonal(e.target.value)} />
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 rounded-lg font-semibold transition shadow" onClick={handleAddToCart}>Add to cart</button>
        <a href={`/camera?img=${encodeURIComponent(deal.image)}`} className="w-full block mt-3 bg-green-600 hover:bg-green-700 text-white text-lg py-3 rounded-lg font-semibold text-center transition shadow">ทดลองการใช้งานจริง</a>
      </div>
    </div>
  );
} 