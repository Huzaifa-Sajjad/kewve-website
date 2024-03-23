'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppinsRegular, josefinSemiBold, titleFont, josefinRegular } from '@/utils';
import CTAButtons from '@/containers/CTAButtons';

function IncreaseSales() {
  return (
    <section className='relative bg-muted-orange pb-10 lg:pt-40'>
      <div className='grid grid-cols-2 items-center gap-4 lg:gap-x-20'>
        <div className='col-span-2 lg:col-span-1 order-2 lg:order-1 py-8 px-4 lg:p-20'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='mb-6 xl:mb-10 text-center lg:text-left'>
            <Image
              src='/images/sales_growth.svg'
              alt='Sales Growth'
              width={48}
              height={48}
              className='mb-4 mx-auto lg:mx-0'
            />
            <h3 className={`text-xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>Sales Growth</h3>
            <p
              className={`tex-sm lg:text-base text-black max-w-full lg:max-w-[55ch] leading-relaxed ${poppinsRegular.className}`}>
              Explore a lucrative market expansion strategy with KEWVE&apos;s unique African product integration,
              connecting African suppliers to global buyers for increased sales and market reach.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='mb-6 xl:mb-10 text-center lg:text-left'>
            <Image
              src='/images/fusion.svg'
              alt='Global Fusion'
              width={48}
              height={48}
              className='mb-4 mx-auto lg:mx-0'
            />
            <h3 className={`text-xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>Global Fusion</h3>
            <p
              className={`tex-sm lg:text-base text-black max-w-full lg:max-w-[55ch] leading-relaxed ${poppinsRegular.className}`}>
              Access exclusive African food products offerings, market insights, supplier connections, and streamlined
              procurement to broaden your global food category.
            </p>
          </motion.div>
        </div>
        <div className='col-span-2 lg:col-span-1 order-1 lg:order-2'>
          <div className='bg-yellow py-14 px-4 lg:py-20 lg:pl-40 lg:pr-20 rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] lg:rounded-tl-[200px] lg:rounded-bl-[200px] lg:rounded-tr-none lg:rounded-br-none'>
            <div className='flex flex-col items-center lg:items-start mb-8'>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                className={`text-3xl md:text-4xl xl:text-6xl text-black font-bold text-center lg:text-left mb-6 ${titleFont.className}`}>
                Increase Your Sales
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 }}
                className={`text-base lg:text-lg text-black leading-normal max-w-full lg:max-w-[50ch]  text-center lg:text-left ${josefinRegular.className}`}>
                Explore a lucrative market expansion strategy with KEWVE&apos;s unique African product integration,
                connecting wholesalers to global buyers for increased sales and market reach.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className='bg-yellow-dark w-[80%] lg:w-[60%] h-auto rounded-3xl p-6 mx-auto lg:mx-0 mb-8'>
              <Image src='/images/sales.png' alt='World Food' height={350} width={350} className='w-full h-full' />
            </motion.div>
            <div className='flex justify-center lg:justify-start'>
              <CTAButtons className='mt-2' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IncreaseSales;
