'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppinsRegular, josefinSemiBold } from '@/utils';

function IncreaseSales() {
  return (
    <section className='relative bg-cream'>
      <div className='spacing container xl:w-[80%] mx-auto'>
        <div className='flex flex-col items-center mb-8 xl:mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`text-3xl md:text-4xl xl:text-5xl text-black-muted text-center mb-4 ${josefinSemiBold.className}`}>
            Increase Your Sales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className={`text-base md:text-lg text-black-muted leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${poppinsRegular.className}`}>
            Explore a lucrative market expansion strategy with KEWVE&apos;s unique African product integration,
            connecting wholesalers to global buyers for increased sales and market reach.
          </motion.p>
        </div>
        <div className='grid grid-cols-2 gap-4 lg:gap-10'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-2 lg:col-span-1'>
            <Image
              src='/images/sales.jpg'
              alt='Increase your Sales'
              width={640}
              height={800}
              className='w-full h-auto aspect-square object-cover rounded shadow'
            />
          </motion.div>
          <div className='col-span-2 lg:col-span-1 flex flex-col justify-center lg:-px-6'>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className={`text-2xl xl:text-3xl text-black-muted text-center lg:text-left leading-normal mb-4 ${josefinSemiBold.className}`}>
              Sales Growth
            </motion.h3>
            <ul className='ml-4 list-disc'>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className={`text-sm md:text-base text-black-muted leading-relaxed mb-4 xl:max-w-[60ch] ${poppinsRegular.className}`}>
                Take a bite of a $3.2 billion market by integrating distinctive African products to your world food
                category.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className={`text-sm md:text-base text-black-muted leading-relaxed xl:max-w-[60ch] ${poppinsRegular.className}`}>
                Integrate distinctive African food products to broaden market reach globally. KEWVE connects UK
                wholesalers with international buyers, unlocking opportunities for expansion and increased global sales.
              </motion.li>
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className='flex justify-center lg:justify-start gap-4 mt-6 lg:mt-10'>
              <button
                className={`w-full md:w-fit bg-orange rounded-full py-3 px-6 lg:py-4 lg:px-8  text-base lg:text-lg shadow-md text-white ${josefinSemiBold.className}`}>
                Become a Buyer
              </button>
              <button
                className={`w-full md:w-fit bg-pink rounded-full py-3 px-6 lg:py-4 lg:px-8  text-base lg:text-lg shadow-md text-white ${josefinSemiBold.className}`}>
                Become a Supplier
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IncreaseSales;
