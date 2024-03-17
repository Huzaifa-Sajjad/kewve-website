'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { josefinRegular, poppinsRegular, josefinSemiBold, regalDisplay } from '@/utils';
import CTAButtons from '@/containers/CTAButtons';

function SimplifySourcing() {
  return (
    <section className='bg-muted-orange py-10 lg:py-0 lg:-mt-8 xl:-mt-16'>
      <div className='spacing container xl:w-[80%] mx-auto'>
        <div className='flex flex-col items-center mb-8 lg:mb-16 xl:mb-24'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`text-3xl md:text-4xl xl:text-6xl text-center text-black font-bold mb-6 ${regalDisplay.className}`}>
            Simplify Your <br />
            Sourcing Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className={`text-base lg:text-lg text-black leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${josefinRegular.className}`}>
            Delve into the heart of African culinary heritage with our platform, offering unparalleled access to an
            extensive selection of authentic food products sourced directly from the continent.
          </motion.p>
        </div>
        <div className='grid grid-cols-2 gap-4 gap-y-8 items-center'>
          <div className='col-span-2 lg:col-span-1 order-2 lg:order-1'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className='mb-6 xl:mb-10 text-center lg:text-left'>
              <Image
                src='/images/save_time.svg'
                alt='Save Time'
                width={48}
                height={48}
                className='mb-4 mx-auto lg:mx-0'
              />
              <h3 className={`text-xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>
                Effortless Procurement
              </h3>
              <p
                className={`tex-sm lg:text-base text-black max-w-full lg:max-w-[45ch] leading-relaxed ${poppinsRegular.className}`}>
                Save time with KEWVE, sourcing from trusted African brands for efficient procurement, ensuring a
                seamless experience.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3 }}
              className='mb-6 xl:mb-10 text-center lg:text-left'>
              <Image
                src='/images/sourcing.svg'
                alt='Save Time'
                width={48}
                height={48}
                className='mb-5 mx-auto lg:mx-0'
              />
              <h3 className={`text-xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>
                Effortless Sourcing
              </h3>
              <p
                className={`text-sm lg:text-base text-black max-w-full lg:max-w-[45ch] leading-relaxed ${poppinsRegular.className}`}>
                Efficiently streamline sourcing for UK and European food retailers, ensuring convenience and seamless
                procurement experience for all involved.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6 }}
              className='text-center lg:text-left'>
              <Image
                src='/images/platform.svg'
                alt='Save Time'
                width={48}
                height={48}
                className='mb-1 mx-auto lg:mx-0'
              />
              <h3 className={`text-xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>Seamless Access</h3>
              <p
                className={`text-sm lg:text-base text-black max-w-full lg:max-w-[45ch] leading-relaxed ${poppinsRegular.className}`}>
                Connect effortlessly with trusted African food brands, saving time and effort in the search for reliable
                suppliers.
              </p>
            </motion.div>
            <div className='flex justify-center lg:justify-start'>
              <CTAButtons />
            </div>
          </div>
          <div className='col-span-2 lg:col-span-1 order-1 lg:order-2'>
            <div className='relative'>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 1 }}
                src='/images/products/chin-chin.jpg'
                alt='Chin Chin'
                width={600}
                height={400}
                className='relative w-full h-auto aspect-square rounded-xl shadow-lg z-20'
              />
              <motion.img
                initial={{ translateX: 0, rotate: 0, opacity: 0 }}
                whileInView={{ translateX: '56px', rotate: '12deg', opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                src='/images/products/drink.jpg'
                alt='Drink'
                width={600}
                height={400}
                className='hidden xl:block w-full h-auto aspect-square rounded-xl shadow absolute z-0 top-0'
              />
              <motion.img
                initial={{ translateX: 0, rotate: 0, opacity: 0 }}
                whileInView={{ translateX: '-56px', rotate: '-12deg', opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                src='/images/products/sauce.jpg'
                alt='Sauce'
                width={600}
                height={400}
                className='hidden xl:block w-full h-auto aspect-square rounded-xl shadow absolute z-0 top-0'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SimplifySourcing;
