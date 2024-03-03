'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { cn, getRandomColor } from '@/utils';
import { Josefin_Sans } from 'next/font/google';

const josefinSemiBold = Josefin_Sans({ weight: '600', subsets: ['latin'] });

interface InfiniteMovingCardsProps {
  items: {
    name: string;
    image: string;
    price: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'slow',
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const [start, setStart] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };
  return (
    <div ref={containerRef} className={cn('scroller relative z-20 tw-w-full overflow-hidden', className)}>
      <div
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 lg:gap-8 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}>
        {items.map((item, idx) => {
          const color = getRandomColor();
          return (
            <div
              className='relative w-[350px] md:w-[450px] max-w-full rounded-lg flex-shrink-0 px-8 py-6'
              style={{
                background: `linear-gradient(to bottom, #ff5c35 35%, ${color} 35%, ${color} 100%)`,
              }}
              key={item.name}>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'></div>
              <Image
                src={item.image}
                width={600}
                height={600}
                className='w-3/4 h-auto aspect-square object-contain mx-auto'
                alt='Product Image'
              />
              <div className='relative z-20 mt-6 flex flex-col items-center justify-center'>
                <h4 className={`${josefinSemiBold.className} text-xl text-black-muted uppercase mb-2`}>{item.name}</h4>
                <h5 className={`${josefinSemiBold.className} text-xl text-black-muted mb-4`}>{item.price}</h5>
                <button
                  className={`bg-orange rounded-full py-3 px-10 text-lg text-white shadow-lg tracking-wide ${josefinSemiBold.className}`}>
                  Inquire
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
