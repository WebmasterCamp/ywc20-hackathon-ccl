'use client';
import RoomButton from "./components/RoomButton";
import Search from "./components/Search";
import DealCard from "./components/DealCard";
import mockDeals from "./components/mockDeals";
import Link from "next/link";
import Banner from "./components/Banner";

export default function Home() {
  const categories = [
    "ฮีลใจ",
    "สร้างพลังบวก",
    "แอบเศร้า",
    "อินเลิฟ",
    "ตลก",
    "ขวัญผวา",
    "แฟนตาซี",
    "คลาสสิค",
    "นุ่มลึก"
  ]

  return (
    <div className="bg-white min-h-screen w-full">
      <div className="mx-auto">
        <Banner />
        <RoomButton />
        <div className="flex flex-col items-center justify-center mt-12 sm:mt-20 px-4 text-center">
          <p className="text-xl sm:text-2xl md:text-3xl mb-2 font-bold text-[#333333] leading-tight">"เพราะศิลปินทุกคนต่างมีแสงเฉพาะตัวที่ไม่เหมือนใคร"</p>
          <p className="text-base sm:text-lg text-[#666666] mb-8">เปล่งประกายในแบบของคุณเอง</p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] mx-auto">
            {categories.map((category) => (
              <div 
                key={category} 
                className="cursor-pointer flex items-center justify-center bg-gradient-to-l from-orange-400 to-orange-500 text-white rounded-xl px-6 sm:px-8 py-2 sm:py-3 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <p className="text-sm sm:text-base">{category}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Section ดีลสินค้า */}
        <div className="mt-12 sm:mt-16 px-15">
          <h2 className="text-2xl font-bold mb-6 sm:mb-8 text-[#333333] text-center sm:text-left sm:ml-3 md:ml-6">ดาวรุ่งพุ่งแรง</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {mockDeals.map((deal) => (
              <Link 
                key={deal.id} 
                href={`/deal/${deal.id}`} 
                className="mx-auto hover:scale-105 transition-transform duration-300 w-full max-w-sm"
              >
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
    </div>
  )
}
