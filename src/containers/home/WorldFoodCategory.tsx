'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppinsRegular, josefinSemiBold, regalDisplay, josefinRegular } from '@/utils';
import CTAButtons from '@/containers/CTAButtons';

function WorldFoodCategory() {
  return (
    <section className='relative bg-muted-orange py-10 lg:pt-40'>
      <div className='grid grid-cols-2 items-center gap-4 lg:gap-x-20'>
        <div className='col-span-2 lg:col-span-1'>
          <div className='bg-yellow py-14 px-4 lg:p-20 rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] lg:rounded-tr-[200px] lg:rounded-br-[200px] lg:rounded-tl-none lg:rounded-bl-none'>
            <div className='flex flex-col items-center lg:items-start mb-8'>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                className={`text-3xl md:text-4xl xl:text-6xl text-black font-bold text-center lg:text-left mb-6 ${regalDisplay.className}`}>
                Build Your World <br /> Food Category
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className={`text-base lg:text-lg text-black leading-normal max-w-full lg:max-w-[50ch]  text-center lg:text-left ${josefinRegular.className}`}>
                Unlock new opportunities with KEWVE&apos;s comprehensive solutions, broadening your market reach and
                enhancing your offerings.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className='bg-yellow-dark w-[80%] lg:w-[60%] h-auto rounded-3xl p-6 mx-auto lg:mx-0 mb-8'>
              <Image src='/images/world_food.png' alt='World Food' height={350} width={350} className='w-full h-full' />
            </motion.div>
            <div className='flex justify-center lg:justify-start'>
              <CTAButtons />
            </div>
          </div>
        </div>
        <div className='col-span-2 lg:col-span-1 py-8 px-4 lg:p-20'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='mb-6 xl:mb-10 text-center lg:text-left'>
            <Image
              src='/images/global.svg'
              alt='Global Expansion'
              width={48}
              height={48}
              className='mb-4 mx-auto lg:mx-0'
            />
            <h3 className={`text-xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>Global Expansion</h3>
            <p
              className={`tex-sm lg:text-base text-black max-w-full lg:max-w-[55ch] leading-relaxed ${poppinsRegular.className}`}>
              Globalize your offerings with KEWVE, diversify your offerings and cater to the growing demand for unique
              and authentic flavours.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='mb-6 xl:mb-10 text-center lg:text-left'>
            <Image
              src='/images/marketplace.svg'
              alt='African Marketplace'
              width={48}
              height={48}
              className='mb-4 mx-auto lg:mx-0'
            />
            <h3 className={`text-xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>
              African Marketplace
            </h3>
            <p
              className={`tex-sm lg:text-base text-black max-w-full lg:max-w-[55ch] leading-relaxed ${poppinsRegular.className}`}>
              Access exclusive African food products offerings, market insights, supplier connections, and streamlined
              procurement to broaden your global food category.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WorldFoodCategory;
