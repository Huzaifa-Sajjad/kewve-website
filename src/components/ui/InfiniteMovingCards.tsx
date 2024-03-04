'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { cn, formatCurrency, getRandomColor, josefinSemiBold } from '@/utils';
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
              key={item.data.name}>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'></div>
              <Image
                src={item.data.image?.url ?? ''}
                width={item.data.image?.dimensions?.width ?? 600}
                height={item.data.image?.dimensions?.height ?? 600}
                className='w-3/4 h-auto aspect-square object-contain mx-auto'
                alt={item.data.image?.alt ?? 'Product'}
              />
              <div className='relative z-20 mt-6 flex flex-col items-center justify-center'>
                <h4 className={`${josefinSemiBold.className} text-xl text-black-muted uppercase mb-2`}>
                  {item.data.name}
                </h4>
                <h5 className={`${josefinSemiBold.className} text-xl text-black-muted mb-4`}>
                  {formatCurrency(Number(item.data.price))}
                </h5>
                <Link
                  prefetch
                  href={`/products/${item.uid}`}
                  className={`bg-orange rounded-full py-3 px-10 text-lg text-white shadow-lg tracking-wide ${josefinSemiBold.className}`}>
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
