'use client';
import { useEffect, useRef, useState } from 'react';

export default function CameraPage() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [overlay, setOverlay] = useState({ x: 0, y: 0, scale: 1, rotate: 0, rotateX: 0, rotateY: 0, dragging: false, offsetX: 0, offsetY: 0 });

  // ดึง url รูปจาก query string
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      setImgUrl(params.get('img'));
    }
  }, []);

  // เปิดกล้อง
  useEffect(() => {
    if (navigator.mediaDevices && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          videoRef.current.srcObject = stream;
        });
    }
  }, []);

  // ฟังก์ชันลาก overlay
  const handlePointerDown = (e) => {
    setOverlay((prev) => ({ ...prev, dragging: true, offsetX: e.clientX - prev.x, offsetY: e.clientY - prev.y }));
  };
  const handlePointerMove = (e) => {
    if (overlay.dragging) {
      setOverlay((prev) => ({ ...prev, x: e.clientX - prev.offsetX, y: e.clientY - prev.offsetY }));
    }
  };
  const handlePointerUp = () => {
    setOverlay((prev) => ({ ...prev, dragging: false }));
  };

  // pinch zoom/rotate (มือถือ)
  // (เบื้องต้น: รองรับ pinch zoom เฉยๆ)
  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (!overlay.lastDist) {
        setOverlay((prev) => ({ ...prev, lastDist: dist }));
      } else {
        const scale = Math.max(0.2, Math.min(overlay.scale * (dist / overlay.lastDist), 5));
        setOverlay((prev) => ({ ...prev, scale, lastDist: dist }));
      }
    }
  };
  const handleTouchEnd = (e) => {
    setOverlay((prev) => ({ ...prev, lastDist: undefined, dragging: false }));
  };

  // ฟังก์ชันปรับ perspective
  const handleSlider = (key, value) => {
    setOverlay((prev) => ({ ...prev, [key]: Number(value) }));
  };

  // reset perspective
  const handleReset = () => {
    setOverlay((prev) => ({ ...prev, rotateX: 0, rotateY: 0 }));
  };

  return (
    <div className="relative w-full h-[100dvh] bg-black overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{ background: '#000' }}
      />
      {imgUrl && (
        <img
          ref={overlayRef}
          src={imgUrl}
          alt="overlay"
          className="absolute left-1/2 top-1/2 z-10 select-none touch-none drop-shadow-xl"
          style={{
            transform: `translate(-50%, -50%) translate(${overlay.x}px,${overlay.y}px) scale(${overlay.scale}) rotate(${overlay.rotate}deg) perspective(600px) rotateX(${overlay.rotateX}deg) rotateY(${overlay.rotateY}deg)`,
            maxWidth: '60vw', maxHeight: '60vh', minWidth: 80, minHeight: 80,
            cursor: overlay.dragging ? 'grabbing' : 'grab',
            touchAction: 'none',
            borderRadius: 16,
            background: 'rgba(255,255,255,0.1)'
          }}
          draggable={false}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      )}
      {/* Controls */}
      <div className="fixed bottom-0 left-0 w-full z-20 flex flex-col items-center justify-center pb-2 pointer-events-none">
        <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-lg px-4 py-3 flex flex-col md:flex-row gap-4 md:gap-8 items-center w-full max-w-2xl mx-auto pointer-events-auto">
          <div className="flex flex-col items-center w-full max-w-xs">
            <label className="text-xs font-semibold mb-1 flex items-center gap-1"><span className="material-symbols-outlined text-base">swap_horiz</span>เอียงซ้าย-ขวา (Y)</label>
            <input type="range" min={-60} max={60} value={overlay.rotateY} onChange={e => handleSlider('rotateY', e.target.value)} className="w-full accent-blue-500" />
          </div>
          <div className="flex flex-col items-center w-full max-w-xs">
            <label className="text-xs font-semibold mb-1 flex items-center gap-1"><span className="material-symbols-outlined text-base">swap_vert</span>เอียงบน-ล่าง (X)</label>
            <input type="range" min={-60} max={60} value={overlay.rotateX} onChange={e => handleSlider('rotateX', e.target.value)} className="w-full accent-blue-500" />
          </div>
          <button onClick={handleReset} className="mt-2 md:mt-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold shadow flex items-center gap-1"><span className="material-symbols-outlined text-base">refresh</span>รีเซ็ต</button>
        </div>
      </div>
      <a href="/" className="fixed top-4 left-4 z-20 bg-white/80 rounded-full px-4 py-2 text-gray-700 font-semibold shadow flex items-center gap-2"><span className="material-symbols-outlined">arrow_back</span>กลับ</a>
    </div>
  );
} 