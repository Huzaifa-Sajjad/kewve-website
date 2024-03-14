'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { cn, getRandomColor, josefinSemiBold, regalDisplay } from '@/utils';
import type { AllDocumentTypes } from '../../../prismicio-types';

interface InfiniteMovingCardsProps {
  items: AllDocumentTypes[];
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
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className={cn('scroller relative z-20 tw-w-full overflow-hidden', className)}>
      <div
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 lg:gap-8 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}>
        {items.map((item, idx) => {
          const color = getRandomColor();
          return (
            <div className='relative w-[333px] max-w-full flex-shrink-0' key={item.data.name}>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'></div>
              <div
                className='relative w-full h-[430px] flex items-center rounded-[200px]'
                style={{ backgroundColor: color }}>
                <Image
                  src={item.data.image?.url ?? ''}
                  width={item.data.image?.dimensions?.width ?? 600}
                  height={item.data.image?.dimensions?.height ?? 600}
                  className='w-3/4 h-auto aspect-square object-contain mx-auto'
                  alt={item.data.image?.alt ?? 'Product'}
                />
              </div>
              <div className='relative z-20 flex mt-6 flex-col items-center'>
                <h4
                  className={`${regalDisplay.className} text-xl lg:text-2xl text-black font-bold tracking-wide uppercase mb-4`}>
                  {item.data.name}
                </h4>
                <Link
                  prefetch
                  href={`/products/${item.uid}`}
                  className={`rounded-full py-3 px-10 text-lg text-black tracking-wide ${josefinSemiBold.className}`}
                  style={{ backgroundColor: color }}>
                  Know More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
