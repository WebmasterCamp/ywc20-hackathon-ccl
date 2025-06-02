import Image from 'next/image';
import Link from 'next/link';

const RoomButton = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
      <Image 
          src="/images/background-room.png" 
          alt="banner background" 
          fill 
          className="object-cover object-center" 
          priority 
        />
      <div className='absolute inset-0 flex flex-col mt-15 justify-start items-center'>
        <h1 className='text-4xl font-bold text-[#333333] mb-2 text-5xl'>ห้องโถงของคุณ</h1>
        <p className='text-[#333333] text-2xl'>พื้นที่สร้างคอมมูนิตี้</p>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end items-center">
        <Link href="/room" className="transform hover:scale-104 transition-transform duration-200">
          <button className="cursor-pointer bg-orange-500 text-white px-8 py-3 mb-10 rounded-full text-md shadow-xl transition-all duration-200 hover:border-orange-300">
            เข้าชมห้องโถง
          </button>
        </Link>
      </div>
    </div>
  )
}

export default RoomButton
