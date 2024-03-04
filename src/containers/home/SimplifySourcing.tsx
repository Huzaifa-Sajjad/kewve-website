'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppinsRegular, josefinSemiBold } from '@/utils';

function SimplifySourcing() {
  return (
    <section className='relative bg-orange'>
      <div className='spacing container xl:w-[80%] mx-auto'>
        <div className='flex flex-col items-center mb-8 lg:mb-12'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`text-3xl md:text-4xl xl:text-5xl text-white text-center mb-4 ${josefinSemiBold.className}`}>
            Simplify Your Sourcing Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2 }}
            className={`text-base lg:text-lg text-white leading-normal max-w-full lg:max-w-[65ch] mx-auto text-center ${poppinsRegular.className}`}>
            Revolutionize your procurement journey with KEWVE&apos;s seamless solution. Unlock direct access to
            top-quality African brands, streamlining your sourcing needs effortlessly. Experience efficiency and
            reliability like never before.
          </motion.p>
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-3 lg:col-span-1 p-8 bg-yellow-pattern rounded shadow-md text-center'>
            <Image
              src='/images/save_time.svg'
              alt='Save Time'
              width={64}
              height={64}
              className='mx-auto mb-4 xl:mb-6'
            />
            <h3 className={`text-xl text-black-muted leading-tight mb-4 ${josefinSemiBold.className}`}>
              Effortless Procurement
            </h3>
            <p className={`text-sm text-black-muted leading-relaxed ${poppinsRegular.className}`}>
              Save time using KEWVE. Easily source from trusted African brands, streamlining your procurement journey
              for enhanced efficiency and a seamless experience
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3 }}
            className='col-span-3 lg:col-span-1 p-8 bg-yellow-pattern rounded shadow-md text-center'>
            <Image src='/images/sourcing.svg' alt='Save Time' width={64} height={64} className='mx-auto mb-4 xl:mb-6' />
            <h3 className={`text-xl text-black-muted leading-tight mb-4 ${josefinSemiBold.className}`}>
              Effortless Sourcing
            </h3>
            <p className={`text-sm text-black-muted leading-relaxed ${poppinsRegular.className}`}>
              We streamline sourcing for UK and European food retailers and wholesalers, ensuring efficiency and
              convenience in the procurement process for a seamless experience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.6 }}
            className='col-span-3 lg:col-span-1 p-8 bg-yellow-pattern rounded shadow-md text-center'>
            <Image src='/images/platform.svg' alt='Save Time' width={64} height={64} className='mx-auto mb-4 xl:mb-6' />
            <h3 className={`text-xl text-black-muted leading-tight mb-4 ${josefinSemiBold.className}`}>
              Seamless Access
            </h3>
            <p className={`text-sm text-black-muted leading-relaxed ${poppinsRegular.className}`}>
              Instead of spending time and effort searching for reliable suppliers, our platform connects you with
              trusted African food brands, ensuring a smooth sourcing experience
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1 }}
          className='flex flex-wrap justify-center gap-4 mt-8 lg:mt-14'>
          <button
            className={`w-full md:w-fit bg-white border-2 border-white rounded-full py-3 px-6 lg:py-4 lg:px-8  text-base lg:text-lg  text-black-muted hover:opacity-85 transition-all ${josefinSemiBold.className}`}>
            Become a Buyer
          </button>
          <button
            className={`w-full md:w-fit bg-transparent border-2 border-white rounded-full py-3 px-6 lg:py-4 lg:px-8  text-base lg:text-lg text-white hover:opacity-85 transition-all ${josefinSemiBold.className}`}>
            Become a Supplier
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default SimplifySourcing;
