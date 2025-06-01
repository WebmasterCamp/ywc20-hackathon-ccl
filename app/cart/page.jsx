"use client";
import { useCart } from "../components/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, updateQty, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-3xl mx-auto py-8 px-2 md:px-0">
      <h1 className="text-2xl font-bold mb-6">ตะกร้าสินค้า</h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">ไม่มีสินค้าในตะกร้า <Link href="/" className="text-blue-600 underline">เลือกซื้อสินค้า</Link></div>
      ) : (
        <>
          <div className="flex flex-col gap-4 mb-6">
            {cart.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-4 items-center bg-white rounded-xl shadow p-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1 w-full">
                  <div className="font-semibold text-lg mb-1">{item.title}</div>
                  <div className="text-gray-500 text-sm mb-1">{Object.entries(item.options).map(([k, v]) => v && (<span key={k} className="mr-2">{k}: <span className="font-medium">{v}</span></span>))}</div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-700 font-bold">THB {(item.price * item.qty).toLocaleString()}</span>
                    <span className="text-gray-400 text-xs">(ชิ้นละ {item.price})</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <input type="number" min={1} value={item.qty} onChange={e => updateQty(idx, Number(e.target.value))} className="w-16 border rounded px-2 py-1" />
                    <button className="text-red-500 hover:underline ml-2" onClick={() => removeFromCart(idx)}>ลบ</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-4">
            <div className="text-xl font-bold">รวมทั้งหมด: <span className="text-green-700">THB {total.toLocaleString()}</span></div>
            <div className="flex gap-2">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold" onClick={clearCart}>ล้างตะกร้า</button>
              <Link href="/checkout" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">ไปชำระเงิน</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
} 