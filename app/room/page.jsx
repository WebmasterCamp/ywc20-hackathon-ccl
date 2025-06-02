'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const RoomPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const numberOfStores = 10; // Number of stores visible at once

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

  // Generate store positions with more spacing
  const stores = Array.from({ length: numberOfStores }, (_, index) => ({
    id: index,
    position: (index * 50) - (scrollProgress % 100), // Increased spacing between stores
  }));

  return (
    <>
      <div className="relative w-full min-h-screen overflow-x-hidden">
        {/* Background Room */}
        <div className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat">
          <Image 
            src="/images/room.jpg" 
            alt="Room" 
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Path/Road */}
        <div className="fixed bottom-0 left-0 w-full h-[20vh] flex items-center justify-center">
          <div 
            className="fixed w-[100%] h-50 bg-[#FFDBBB]"
          />
        </div>

        {/* Stores */}
        <div className="fixed inset-0 pointer-events-none">
          {stores.map((store) => (
            <div
              key={store.id}
              className="absolute bottom-[15vh] left-[60vw]"
              style={{
                transform: `translateX(${store.position}vw)`,
              }}
            >
              <Image
                src="/images/store.png"
                alt="Store"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
        
        {/* Centered Character */}
        <div className="fixed left-1/2 bottom-[10%] -translate-x-1/2">
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
