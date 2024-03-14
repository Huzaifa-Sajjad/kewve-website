'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { regalDisplay, josefinRegular, josefinSemiBold, poppinsRegular } from '@/utils';
import CTAButtons from '@/containers/CTAButtons';

function BlogSection() {
  return (
    <section className='bg-cream py-10 lg:py-0'>
      <div className='spacing container xl:w-[80%] mx-auto'>
        <div className='flex flex-col items-center'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`text-3xl md:text-4xl xl:text-6xl text-black font-bold text-center mb-4 ${regalDisplay.className}`}>
            African Connections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className={`text-lg text-black leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${josefinRegular.className}`}>
            Discover and connect with African food brands and suppliers effortlessly. Explore authentic ingredients and
            products, fostering culinary partnerships and celebrating the richness of African cuisine.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
