import Link from 'next/link';

const RoomButton = () => {
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <Link href="/room" className="w-4/5 h-[60vh] bg-gray-300 flex items-center justify-center rounded-lg shadow-lg hover:shadow-2xl transition cursor-pointer">
        <span className="text-2xl font-medium">ห้องโถง</span>
      </Link>
    </div>
  )
}

export default RoomButton
