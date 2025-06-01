import Link from "next/link";

export default function OrderSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <div className="text-2xl font-bold mb-2">สั่งซื้อสำเร็จ!</div>
        <div className="text-gray-600 mb-6 text-center">ขอบคุณสำหรับการสั่งซื้อของคุณ<br />ระบบได้รับออเดอร์เรียบร้อยแล้ว</div>
        <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold mb-2 w-full text-center">กลับสู่หน้าแรก</Link>
        <Link href="/cart" className="text-blue-600 underline w-full text-center">ดูตะกร้าสินค้า</Link>
      </div>
    </div>
  );
} 