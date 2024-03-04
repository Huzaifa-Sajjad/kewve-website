'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { poppinsRegular, josefinSemiBold } from '@/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function OurStory() {
  return (
    <>
      <Header />

      <section className='relative bg-cream pt-10 lg:pt-28'>
        <div className='spacing container xl:w-[80%] mx-auto'>
          <div className='flex flex-col items-center mb-8 xl:mb-12'>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`text-3xl md:text-4xl xl:text-5xl text-black-muted text-center mb-4 ${josefinSemiBold.className}`}>
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1 }}
              className={`text-base md:text-lg text-black-muted leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${poppinsRegular.className}`}>
              Kewve is your gateway to a delightful world of African flavours, connecting premium African food brands
              with international buyers.
            </motion.p>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className='col-span-2 lg:col-span-1'>
              <Image
                src='/images/oranges.jpg'
                alt='Oranges'
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
                Our user-friendly platform streamlines the entire process, making it easy for buyers to explore and
                purchase a rich variety of authentic African food products.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              className='col-span-2 lg:col-span-1 bg-pink-pattern rounded flex flex-col justify-center items-center py-6 px-4 md:px-6 xl:px-12 order-2 lg:order-1 min-h-[300px]'>
              <p
                className={`text-base xl:text-lg text-black-muted leading-relaxed text-center mx-auto max-w-full xl:max-w-[45ch] ${poppinsRegular.className}`}>
                Kewve makes it easy for buyers around the world to discover and enjoy African food, bringing a taste of
                the African to your home.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 }}
              className='col-span-2 lg:col-span-1 order-1 lg:order-2'>
              <Image
                src='/images/icecream.jpg'
                alt='Home'
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
      <section className='bg-orange'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 200'>
          <path
            fill='#fafaf0'
            fill-opacity='1'
            d='M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
        </svg>
      </section>
      <section className='bg-orange relative pb-10'>
        <Footer />
      </section>
    </>
  );
}

export default OurStory;
