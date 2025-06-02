import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set the end date for the event (1 week from now)
  const calculateEndDate = () => {
    const now = new Date();
    const endDate = new Date(now);
    endDate.setDate(now.getDate() + 7);
    return endDate;
  };

  useEffect(() => {
    const endDate = calculateEndDate();

    const calculateTimeLeft = () => {
      const difference = endDate - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Update countdown every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Initial calculation
    calculateTimeLeft();

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F97B1F] w-full py-4 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Event Details */}
        <div className="text-white mb-4 sm:mb-0">
          <h2 className="text-2xl sm:text-2xl font-bold mb-1">ศิลป์เล็ก เปรี้ยงใหญ่ Mini Art Fest 2025 🎨</h2>
          <p className="text-white/90">✨ของทำมือสุดน่ารัก ของสะสม วันที่ 9 พฤษภาคม 2025 📍ศูนย์การค้า Art Mall ชั้น 3 โซนกิจกรรม</p>
        </div>

        {/* Countdown Timer */}
        <div className="flex gap-3 sm:gap-3">
          <div className="bg-white/20 rounded-lg p-2 sm:p-3 min-w-[60px] text-center">
            <div className="text-2xl sm:text-2xl font-bold text-white">{timeLeft.days}</div>
            <div className="text-xs text-white/80">วัน</div>
          </div>
          <div className="bg-white/20 rounded-lg p-2 sm:p-3 min-w-[60px] text-center">
            <div className="text-2xl sm:text-2xl font-bold text-white">{timeLeft.hours}</div>
            <div className="text-xs text-white/80">ชั่วโมง</div>
          </div>
          <div className="bg-white/20 rounded-lg p-2 sm:p-3 min-w-[60px] text-center">
            <div className="text-2xl sm:text-2xl font-bold text-white">{timeLeft.minutes}</div>
            <div className="text-xs text-white/80">นาที</div>
          </div>
          <div className="bg-white/20 rounded-lg p-2 sm:p-3 min-w-[60px] text-center">
            <div className="text-2xl sm:text-2xl font-bold text-white">{timeLeft.seconds}</div>
            <div className="text-xs text-white/80">วินาที</div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
    </div>
  );
};

export default Banner;
