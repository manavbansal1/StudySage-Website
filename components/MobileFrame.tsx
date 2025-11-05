'use client';
import Image from 'next/image';

interface MobileFrameProps {
  image: string;
  alt: string;
  className?: string;
}

export default function MobileFrame({ image, alt, className = '' }: MobileFrameProps) {
  return (
    <div className={`mobile-frame-container ${className}`}>
      {/* Phone Frame */}
      <div className="relative mx-auto" style={{ width: '300px' }}>
        {/* Phone Body - Android style */}
        <div className="phone-body relative bg-gray-900 dark:bg-gray-950 rounded-[2rem] p-2.5 shadow-2xl border-[6px] border-gray-800 dark:border-gray-900 transition-transform duration-300">
          
          {/* Screen Container */}
          <div className="relative bg-white dark:bg-slate-900 rounded-[1.75rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
            {/* Punch-hole Camera (Top Center - Android Style) */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-900 dark:bg-black rounded-full z-20 border-2 border-gray-800"></div>
            
            {/* Screenshot */}
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 45%' }}
                sizes="300px"
              />
            </div>
            
            {/* Screen Reflection Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
          </div>
          
          {/* Power Button (Right side, higher up - Android style) */}
          <div className="absolute right-0 top-20 w-1 h-14 bg-gray-700 rounded-l"></div>
          
          {/* Volume Buttons (Left side - Android style) */}
          <div className="absolute left-0 top-16 w-1 h-10 bg-gray-700 rounded-r"></div>
          <div className="absolute left-0 top-28 w-1 h-10 bg-gray-700 rounded-r"></div>
        </div>
        
        {/* Phone Shadow - Purple gradient for your brand */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#652497]/20 to-[#8b5cf6]/20 blur-2xl rounded-[3rem] scale-95 opacity-50"></div>
      </div>
    </div>
  );
}