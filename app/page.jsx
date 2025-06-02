'use client';
import RoomButton from "./components/RoomButton";
import Search from "./components/Search";
import DealCard from "./components/DealCard";
import mockDeals from "./components/mockDeals";
import Link from "next/link";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <div className="bg-white container mx-auto">
      <Banner/>
      <RoomButton/>
      {/* Section ดีลสินค้า */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 ml-4">Today's big deals</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {mockDeals.map((deal) => (
            <Link key={deal.id} href={`/deal/${deal.id}`} className="hover:scale-105 transition-transform">
              <DealCard {...deal} />
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="flex gap-4 justify-center mt-8">
        <Link href="/cart" className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold">ดูตะกร้าสินค้า</Link>
        <Link href="/checkout" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold">ไปชำระเงิน</Link>
      </div> */}
    </div>
  )
}
