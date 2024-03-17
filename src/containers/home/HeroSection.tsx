'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { josefinRegular } from '@/utils';
import { regalDisplay, josefinSemiBold, getRandomColor } from '@/utils';
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';
import { ProductDocument } from '../../../prismicio-types';

interface HeroSectionProps {
  items: ProductDocument[];
}

function HeroSection({ items }: HeroSectionProps) {
  return (
    <section className='landing-hero relative min-h-[100vh] flex flex-col items-center pt-16 pb-10 lg:pt-40 lg:pb-0 overflow-x-hidden'>
      <div className='spacing relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-6xl lg:text-9xl text-white font-black uppercase text-center tracking-wide text-with-shadow ${regalDisplay.className}`}>
          Love Africa
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-5xl lg:text-8xl text-white font-black uppercase text-center tracking-wide text-with-shadow ${regalDisplay.className}`}>
          Taste Africa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`text-[20px] lg:text-[22px] text-white text-center max-w-[60ch] mx-auto mt-6 mb-8 lg:mb-10 ${josefinRegular.className}`}>
          Discover the vibrant tapestry of flavours woven throughout Africa with our extensive array of handpicked
          African culinary delights.
        </motion.p>
      </div>
      <InfiniteMovingCards>
        <>
          {items.map((item, idx) => {
            const color = getRandomColor();
            return (
              <div className='relative w-[333px] max-w-full flex-shrink-0 cursor-grab' key={item.data.name}>
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
                    className='w-3/4 h-auto aspect-square object-contain mx-auto pointer-events-none'
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
        </>
      </InfiniteMovingCards>
    </section>
  );
}

export default HeroSection;
