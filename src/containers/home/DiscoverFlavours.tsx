'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppinsRegular, josefinSemiBold } from '@/utils';

function DiscoverFlavours() {
  return (
    <section className='relative bg-cream'>
      <div className='spacing container xl:w-[80%] mx-auto'>
        <div className='flex flex-col items-center mb-8 xl:mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`text-3xl md:text-4xl xl:text-5xl text-black-muted text-center mb-4 ${josefinSemiBold.className}`}>
            Discover Authentic African Flavors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className={`text-base md:text-lg text-black-muted leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${poppinsRegular.className}`}>
            Delve into the heart of African culinary heritage with our platform, offering unparalleled access to an
            extensive selection of authentic food products sourced directly from the continent.
          </motion.p>
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-2 lg:col-span-1'>
            <Image
              src='/images/spices.jpg'
              alt='Spices from Africa'
              width={640}
              height={800}
              className='w-full h-[300px] lg:h-auto aspect-square object-cover rounded'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className='col-span-2 lg:col-span-1 bg-yellow-pattern rounded flex flex-col justify-center items-center py-6 px-4 md:px-6 xl:px-12 min-h-[300px]'>
            <p
              className={`text-sm xl:text-lg text-black-muted leading-relaxed text-center mx-auto max-w-full xl:max-w-[45ch] ${poppinsRegular.className}`}>
              KEWVE platform offers wholesalers like yourself access to a wide range of authentic African food products
              directly from the source.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-2 lg:col-span-1 bg-pink-pattern rounded flex flex-col justify-center items-center py-6 px-4 md:px-6 xl:px-12 order-2 lg:order-1 min-h-[300px]'>
            <p
              className={`text-base xl:text-lg text-black-muted leading-relaxed text-center mx-auto max-w-full xl:max-w-[45ch] ${poppinsRegular.className}`}>
              Say goodbye to middlemen and enjoy a diverse selection of African food. Bid farewell to unnecessary
              intermediaries, and embrace a direct connection with trusted suppliers. We make sourcing African food and
              drink brands as easy as it should be.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className='col-span-2 lg:col-span-1 order-1 lg:order-2'>
            <Image
              src='/images/bazar.jpg'
              alt='Flavours of Africa'
              width={640}
              height={960}
              className='w-full h-[300px] lg:h-auto aspect-square object-cover'
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className='flex flex-wrap justify-center gap-4 mt-8 lg:mt-14'>
          <a
            href='https://5y1f9ke4k38.typeform.com/to/x2Ut65IL'
            target='_blank'
            className={`w-full md:w-fit bg-orange rounded-full py-3 px-6 lg:py-4 lg:px-8  text-base lg:text-lg shadow-md text-white text-center ${josefinSemiBold.className}`}>
            Become a Buyer
          </a>
          <a
            href='https://5y1f9ke4k38.typeform.com/to/lEkbdbRx'
            target='_blank'
            className={`w-full md:w-fit bg-pink rounded-full py-3 px-6 lg:py-4 lg:px-8  text-base lg:text-lg shadow-md text-white text-center ${josefinSemiBold.className}`}>
            Become a Supplier
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default DiscoverFlavours;
