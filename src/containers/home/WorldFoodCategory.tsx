'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppinsRegular, josefinSemiBold } from '@/utils';

function WorldFoodCategory() {
  return (
    <section className='relative bg-yellow'>
      <div className='spacing container xl:w-[80%] mx-auto'>
        <div className='flex flex-col items-center mb-8 xl:mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`text-3xl md:text-4xl xl:text-5xl text-black-muted text-center mb-4 ${josefinSemiBold.className}`}>
            Build Your World Food Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className={`text-base md:text-lg text-black-muted leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${poppinsRegular.className}`}>
            Unlock new opportunities with KEWVE&apos;s comprehensive solutions, broadening your market reach and
            enhancing your offerings.
          </motion.p>
        </div>
        <div className='grid grid-cols-2 gap-4 lg:gap-10'>
          <div className='col-span-2 lg:col-span-1 flex flex-col justify-center lg:-px-6 order-2 lg:order-1'>
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className={`text-2xl xl:text-3xl text-black-muted text-center lg:text-left leading-normal mb-4 ${josefinSemiBold.className}`}>
              Global Expansion
            </motion.h3>
            <ul className='ml-4 list-disc'>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className={`text-sm md:text-base text-black-muted leading-relaxed mb-4 xl:max-w-[60ch] ${poppinsRegular.className}`}>
                Globalize your offerings with KEWVE, diversify your offerings and cater to the growing demand for unique
                and authentic flavours.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className={`text-sm md:text-base text-black-muted leading-relaxed xl:max-w-[60ch] ${poppinsRegular.className}`}>
                Access exclusive African food products offerings, market insights, supplier connections, and streamlined
                procurement to broaden your global food category.
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
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-2 lg:col-span-1 order-1 lg:order-2 overflow-hidden'>
            <Image
              src='/images/world_food.jpg'
              alt='Spices from Africa'
              width={640}
              height={800}
              className='w-full h-auto aspect-square object-cover rounded shadow'
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WorldFoodCategory;
