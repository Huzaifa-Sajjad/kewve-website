'use client';

import { motion } from 'framer-motion';
import { josefinRegular, marker } from '@/utils';
import { regalDisplay } from '@/utils/fonts';
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';
import { AllDocumentTypes } from '../../../prismicio-types';

interface HeroSectionProps {
  items: AllDocumentTypes[];
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
          Discover the vibrant tapestry of flavors woven throughout Africa with our extensive array of handpicked
          African culinary delights.
        </motion.p>
      </div>
      <InfiniteMovingCards items={items} />
    </section>
  );
}

export default HeroSection;
