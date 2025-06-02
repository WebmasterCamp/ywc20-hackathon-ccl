import Image from 'next/image';
import Link from 'next/link';

const RoomButton = () => {
  return (
    <div className="relative mt-6 sm:mt-10 flex justify-center items-center h-[35vh] sm:h-[50vh] md:h-[60vh] w-full rounded-xl overflow-hidden shadow-lg">
      <Image src="/Home/banner.png" alt="banner background" fill className="object-cover" priority />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/20">
        <Link href="/room">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-lg sm:text-2xl shadow-xl transition-all duration-200">
            เข้าชมห้องโถง
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RoomButton
