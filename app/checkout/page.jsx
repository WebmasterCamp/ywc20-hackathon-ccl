"use client";
import { useCart } from "../components/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const [form, setForm] = useState({ name: "", address: "", phone: "", payment: "cod" });
  const router = useRouter();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    router.push("/order-success");
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-2 md:px-0">
      <h1 className="text-2xl font-bold mb-6">ชำระเงิน</h1>
      <form className="bg-white rounded-xl shadow p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label className="block font-semibold mb-1">ชื่อ-นามสกุล</label>
          <input name="name" required className="w-full border rounded-lg px-3 py-2" value={form.name} onChange={handleChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">ที่อยู่จัดส่ง</label>
          <textarea name="address" required className="w-full border rounded-lg px-3 py-2" rows={2} value={form.address} onChange={handleChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">เบอร์โทรศัพท์</label>
          <input name="phone" required className="w-full border rounded-lg px-3 py-2" value={form.phone} onChange={handleChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">วิธีชำระเงิน</label>
          <select name="payment" className="w-full border rounded-lg px-3 py-2" value={form.payment} onChange={handleChange}>
            <option value="cod">เก็บเงินปลายทาง (COD)</option>
            <option value="bank">โอนเงินผ่านธนาคาร (mock)</option>
            <option value="credit">บัตรเครดิต/เดบิต (mock)</option>
          </select>
        </div>
        <div className="border-t pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold">ยอดชำระ: <span className="text-green-700">THB {total.toLocaleString()}</span></div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-lg font-semibold">ยืนยันสั่งซื้อ</button>
        </div>
      </form>
    </div>
  );
} 