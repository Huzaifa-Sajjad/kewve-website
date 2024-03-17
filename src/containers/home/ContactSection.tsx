'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Widget } from '@typeform/embed-react';
import { regalDisplay, josefinRegular, josefinSemiBold } from '@/utils';

function ContactSection() {
  return (
    <section className='bg-pink py-10 lg:py-0 lg:-mt-8 xl:-mt-16'>
      <div className='spacing container xl:w-[80%] mx-auto'>
        <div className='flex flex-col items-center mb-4 lg:mb-8 xl:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`text-3xl md:text-4xl xl:text-6xl text-black font-bold text-center mb-4 ${regalDisplay.className}`}>
            Connect with Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className={`text-lg text-black leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${josefinRegular.className}`}>
            Reach out to us and unlock the gateway to seamless communication and unparalleled assistance. Our dedicated
            team stands ready to address your queries, provide guidance, and foster meaningful connections.
          </motion.p>
        </div>
        <div className='grid grid-cols-3 gap-4 mb-4 lg:mb-8'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-3 md:col-span-1 mb-6 xl:mb-10 text-center'>
            <Image src='/images/phone.svg' alt='Save Time' width={36} height={36} className='mb-4 mx-auto' />
            <a
              href='tel:+441234567000'
              className={`text-xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>
              +44 123 4567 000
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-3 md:col-span-1 mb-6 xl:mb-10 text-center'>
            <Image src='/images/mail.svg' alt='Save Time' width={36} height={36} className='mb-4 mx-auto' />
            <a
              href='mailto:hello@kewve.com'
              className={`text-xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>
              hello@kewve.com
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className='col-span-3 md:col-span-1 mb-6 xl:mb-10 text-center'>
            <Image src='/images/address.svg' alt='Save Time' width={36} height={36} className='mb-4 mx-auto' />
            <a
              href='tel:+441234567000'
              className={`text-xl text-black leading-tight mb-2 ${josefinSemiBold.className}`}>
              Lane 3, Covt heights, Ireland
            </a>
          </motion.div>
        </div>
        <Widget style={{ width: '100%', minHeight: '50vh' }} id='NbRbFp7c' />
      </div>
    </section>
  );
}

export default ContactSection;
