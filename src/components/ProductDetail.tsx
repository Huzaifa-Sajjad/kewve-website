'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { regalDisplay } from '@/utils';
import ProductCard from '@/components/ProductCard';
import { PopupButton } from '@typeform/embed-react';
import { Poppins, Josefin_Sans, Permanent_Marker } from 'next/font/google';
import type { ProductDocument, ProductDocumentData } from '../../prismicio-types';

const poppinsRegular = Poppins({ weight: '400', subsets: ['latin'] });
const josefinSemiBold = Josefin_Sans({ weight: '600', subsets: ['latin'] });
const marker = Permanent_Marker({ weight: '400', subsets: ['latin'] });

interface ProductDetailProps {
  id: string;
  product: ProductDocumentData;
  products: ProductDocument[];
}

function ProductDetail({ id, product, products }: ProductDetailProps) {
  return (
    <>
      <section className='relative bg-orange pt-16 pb-10 lg:pt-32 lg:pb-0'>
        <div className='spacing lg:max-w-[80%] xl:max-w-[65%] lg:mx-auto'>
          <div className='grid grid-cols-2 gap-x-4 gap-y-8 items-center'>
            <div className='col-span-2 lg:col-span-1 order-2 lg:order-1'>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white text-center lg:text-left mb-4 ${regalDisplay.className}`}>
                {product.name}
              </motion.h1>
              <motion.h6
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`${josefinSemiBold.className} text-xl text-center lg:text-left text-white mb-4`}>
                Minimum Order Quantity: {product.moq}
              </motion.h6>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className={`text-base text-white leading-normal max-w-full lg:max-w-[45ch] text-center lg:text-left mb-6 ${poppinsRegular.className}`}>
                {product.short_description}
              </motion.p>
              <div className='flex justify-center lg:justify-start'>
                <PopupButton
                  id='cuVuC1Ci'
                  hidden={{
                    product_id: id,
                  }}
                  className={`bg-black rounded-full py-3 px-6 text-xl text-white text-center lg:text-left ${josefinSemiBold.className}`}>
                  Inquire Price
                </PopupButton>
              </div>
            </div>
            <div className='col-span-2 lg:col-span-1 order-1 lg:order-2'>
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Image
                  src={product.image?.url ?? ''}
                  width={product.image?.dimensions?.width ?? 600}
                  height={product.image?.dimensions?.height ?? 600}
                  alt={product.image?.alt ?? 'Product'}
                  className='w-[200px] lg:w-[300px] h-full mx-auto object-cover mb-4'
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-cream'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#ed722d'
            fill-opacity='1'
            d='M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
        </svg>
      </section>
      {products.length > 0 && (
        <section className='bg-cream lg:-mt-20 xl:-mt-28 py-10 lg:py-0'>
          <div className='spacing container xl:w-[80%] mx-auto'>
            <div className='flex flex-col items-center mb-8 xl:mb-12'>
              <h2
                className={`text-2xl md:text-3xl xl:text-4xl text-black font-bold text-center mb-4 ${regalDisplay.className}`}>
                Recommended Products For You
              </h2>
            </div>
            <div className='grid grid-cols-12 gap-4 xl:gap-6'>
              {products.map((product) => (
                <div key={product.uid} className='col-span-12 md:col-span-6 xl:col-span-4'>
                  <ProductCard id={product.uid} product={product.data} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default ProductDetail;
