import Image from 'next/image';
import Link from 'next/link';

const RoomButton = () => {
  return (
    <div className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-10 mx-4 sm:mx-6 md:mx-8 lg:mx-10 flex justify-center items-center h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-4rem)] lg:w-[calc(100%-5rem)] rounded-xl overflow-hidden shadow-lg">
      <div className="relative w-full h-full">
        <Image 
          src="/Home/banner.png" 
          alt="banner background" 
          fill 
          className="object-cover object-center" 
          priority 
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/30">
        <Link href="/room" className="transform hover:scale-105 transition-transform duration-200">
          <button className="bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-bold text-base sm:text-lg md:text-xl lg:text-2xl shadow-xl transition-all duration-200 border-2 border-white hover:border-orange-300">
            เข้าชมห้องโถง
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RoomButton
