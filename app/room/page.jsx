'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Shop from '../components/Shop';
import { useRouter } from 'next/navigation';

const RoomPage = () => {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [characterPosition, setCharacterPosition] = useState(-20); // Center position
  const [isSelectedShop, setIsSelectedShop] = useState(false);

  useEffect(() => {
    // Add scrollbar hiding styles to html and body
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollbarWidth = 'none';
      document.documentElement.style.msOverflowStyle = 'none';
      document.body.style.overflow = 'scroll';
      document.body.style.msOverflowStyle = 'none';
      document.body.style.scrollbarWidth = 'none';
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollPosition / maxScroll) * 100;
      setScrollProgress(progress);
      // Update character position based on scroll
      setCharacterPosition(-20); // Character stays centered while world moves
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Reset styles when component unmounts
      if (typeof document !== 'undefined') {
        document.documentElement.style.scrollbarWidth = '';
        document.documentElement.style.msOverflowStyle = '';
        document.body.style.overflow = '';
        document.body.style.msOverflowStyle = '';
        document.body.style.scrollbarWidth = '';
      }
    };
  }, []);

  const stores = [
    {
      id: 1,
      name: 'ร้านศิลป์จิ๋ว',
      description: 'รวมของตกแต่งศิลปะขนาดเล็กแฮนด์เมด',
      position: (0 * 50) - (scrollProgress % 100),
    },
    {
      id: 2,
      name: 'มุมงานปั้น',
      description: 'ร้านงานปั้นดินญี่ปุ่นและโมเดลขนาดเล็ก',
      position: (1 * 50) - (scrollProgress % 100),
    },
    {
      id: 3,
      name: 'บ้านงานศิลป์',
      description: 'ของขวัญศิลปะทำมือสำหรับคนรักงานคราฟต์',
      position: (2 * 50) - (scrollProgress % 100),
    },
    {
      id: 4,
      name: 'ห้องศิลปะจิ๋ว',
      description: 'โมเดลจิ๋ว บ้านตุ๊กตา และของตกแต่งน่ารัก',
      position: (3 * 50) - (scrollProgress % 100),
    },
    {
      id: 5,
      name: 'กล่องศิลปะเล็กๆ',
      description: 'ชุดศิลปะ DIY สำหรับทำเล่นที่บ้าน',
      position: (4 * 50) - (scrollProgress % 100),
    }
  ];

  const items = [
    {
      id: 1,
      image: '/images/item1.png',
    },
    {
      id: 2,
      image: '/images/item2.png',
    },
    {
      id: 3,
      image: '/images/item3.png',
    },
    {
      id: 4,
      image: '/images/item4.png',
    }
  ];

  return (
    <>
      <div className="relative w-full min-h-screen overflow-x-hidden bg-[#fcdbc8]">
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="cursor-pointer fixed top-25 left-6 z-50 bg-white/80 hover:bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>

        {/* Background Room */}
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#fbf8f2] to-[#fcdbc8]" />

        {/* Path/Road */}
        <div className="fixed bottom-0 left-0 w-full h-[14vh] flex items-center justify-center">
          <div
            className="fixed w-[100%] h-50 bg-[#fcdbc8]"
          />
        </div>

        {/* Stores */}
        <div className="fixed inset-0">
          {stores.map((store) => (
            <Shop key={store.id} store={store} items={items} characterPosition={characterPosition} onClick={() => setIsSelectedShop(!isSelectedShop)} />
          ))}
        </div>

        {isSelectedShop && (
          <div className="fixed top-1/2 -translate-y-1/2 left-20 w-140 h-[80%] bg-white/40 rounded-3xl backdrop-blur-lg transition-opacity p-8 overflow-hidden">
            <div className="flex flex-col h-full">
              {/* Shop Profile Section */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-[#E8F1F8] rounded-full overflow-hidden"></div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">ร้านศิลป์จิ๋ว</h2>
                  <p className="text-gray-600">รวมของตกแต่งศิลปะขนาดเล็กแฮนด์เมด</p>
                </div>
              </div>

              {/* Product Gallery */}
              <div>
                <h3 className="text-xl font-bold mb-6">Our Products</h3>
                <div className="grid grid-cols-3 gap-3">
                  {items.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                      <Image
                        src={item.image}
                        alt={`Product ${item.id}`}
                        width={200}
                        height={200}
                        className="w-full h-40 object-cover rounded-lg mb-3"
                      />
                      <p className="text-sm font-medium">ชื่อ</p>
                      <p className="text-xs text-gray-500">Description</p>
                      <p className="text-sm font-semibold mt-2">฿ ราคา</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Centered Character */}
        <div className="fixed left-1/2 bottom-[5%] -translate-x-1/2 pointer-events-none">
          <Image
            src="/images/character.gif"
            alt="Character"
            width={350}
            height={350}
            className="animate-bounce-subtle"
          />
        </div>

        {/* Scrollable Space */}
        <div className="h-[1000vh]"></div>
      </div>
    </>
  );
};

export default RoomPage;
