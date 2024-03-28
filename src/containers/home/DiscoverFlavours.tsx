'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { titleFont, josefinRegular, josefinSemiBold, poppinsRegular } from '@/utils';
import CTAButtons from '@/containers/CTAButtons';

function DiscoverFlavours() {
  return (
    <section className='bg-yellow py-10 lg:py-0 lg:pb-4 lg:-mt-8 xl:-mt-16'>
      <div className='spacing container xl:w-[80%] mx-auto'>
        <div className='flex flex-col items-center mb-4 lg:mb-8 xl:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`text-3xl md:text-4xl xl:text-6xl text-black font-bold text-center mb-4 ${titleFont.className}`}>
            Love Africa! Taste Africa!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className={`text-lg lg:text-xl text-black leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${josefinRegular.className}`}>
            Discover the vibrant tapestry of flavours woven throughout Africa with our extensive array of handpicked
            African culinary delights.
          </motion.p>
        </div>
        <div className='grid grid-cols-4 gap-4 mb-8 lg:mb-16'>
          <div className='col-span-2 xl:col-span-1'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              src='/images/products/1.jpg'
              alt='Spices from Africa'
              width={640}
              height={400}
              className='w-full h-[300px] lg:h-[450px] aspect-square object-cover rounded-2xl'
            />
          </div>
          <div className='col-span-2 xl:col-span-1 mt-8'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src='/images/products/2.png'
              alt='Snacks from Africa'
              width={640}
              height={400}
              className='w-full h-[300px] lg:h-[450px] aspect-square object-cover rounded-2xl'
            />
          </div>
          <div className='col-span-2 xl:col-span-1'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src='/images/products/3.png'
              alt='Drinks from Africa'
              width={640}
              height={400}
              className='w-full h-[300px] lg:h-[450px] aspect-square object-cover object-left rounded-2xl'
            />
          </div>
          <div className='col-span-2 xl:col-span-1 mt-8'>
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              src='/images/products/4.png'
              alt='Sauces from Africa'
              width={640}
              height={400}
              className='w-full h-[300px] lg:h-[450px] aspect-square object-cover object-left rounded-2xl'
            />
          </div>
        </div>
        <div className='grid grid-cols-3 gap-4 lg:gap-8 xl:gap-10'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-4 lg:col-span-1 text-center'>
            <Image
              src='/images/direct_access.svg'
              alt='Direct Access'
              width={64}
              height={64}
              className='mb-4 mx-auto'
            />
            <h3 className={`text-xl lg:text-2xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>
              Direct Access
            </h3>
            <p className={`tex-base lg:text-lg text-black leading-relaxed ${poppinsRegular.className}`}>
              Say goodbye to middlemen and enjoy a diverse selection of African food.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-4 lg:col-span-1 text-center'>
            <Image
              src='/images/direct_sourcing.svg'
              alt='Direct Sourcing'
              width={64}
              height={64}
              className='mb-4 mx-auto'
            />
            <h3 className={`text-xl lg:text-2xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>
              Direct Sourcing
            </h3>
            <p className={`tex-base lg:text-lg text-black leading-relaxed ${poppinsRegular.className}`}>
              Bid farewell to unnecessary intermediaries, and embrace a direct connection with trusted suppliers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-4 lg:col-span-1 text-center'>
            <Image src='/images/easy_access.svg' alt='Easy Access' width={64} height={64} className='mb-4 mx-auto' />
            <h3 className={`text-xl lg:text-2xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>
              Easy Access
            </h3>
            <p className={`tex-base lg:text-lg text-black leading-relaxed ${poppinsRegular.className}`}>
              We make sourcing African food and drink brands as easy as it should be.
            </p>
          </motion.div>
        </div>
        <div className='flex justify-center mt-8'>
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}

export default DiscoverFlavours;
