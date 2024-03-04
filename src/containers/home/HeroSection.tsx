'use client';

import { motion } from 'framer-motion';
import { kanitBold, poppinsRegular, marker } from '@/utils';
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';
import { AllDocumentTypes } from '../../../prismicio-types';

interface HeroSectionProps {
  items: AllDocumentTypes[];
}

function HeroSection({ items }: HeroSectionProps) {
  return (
    <section className='bg-orange relative min-h-[100vh] flex flex-col items-center pt-28 overflow-x-hidden'>
      <h2
        className={`huge-bg-text huge-bg-text-top text-[100px] md:text-[180px] lg:text-[250px] xl:text-[400px] text-uppercase tracking-widest text-white opacity-10 text-with-shadow ${marker.className}`}>
        KEWVE
      </h2>
      <div className='spacing relative z-10'>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-6xl lg:text-9xl text-white uppercase text-center tracking-wide text-with-shadow ${kanitBold.className}`}>
          Love Africa
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`text-5xl lg:text-8xl text-white uppercase text-center tracking-wide text-with-shadow ${kanitBold.className}`}>
          Taste Africa
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`text-lg lg:text-xl text-white text-center max-w-[60ch] mx-auto mt-6 mb-8 lg:mb-10 ${poppinsRegular.className}`}>
          Discover the vibrant tapestry of flavors woven throughout Africa with our extensive array of handpicked
          African culinary delights.
        </motion.p>
      </div>
      <InfiniteMovingCards items={items} />
    </section>
  );
}

export default HeroSection;
