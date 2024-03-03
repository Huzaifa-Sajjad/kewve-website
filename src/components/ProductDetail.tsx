'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { formatCurrency } from '@/utils';
import ProductCard from '@/components/ProductCard';
import { Poppins, Josefin_Sans, Permanent_Marker } from 'next/font/google';
import type { AllDocumentTypes, ProductDocumentData } from '../../prismicio-types';

const poppinsRegular = Poppins({ weight: '400', subsets: ['latin'] });
const josefinSemiBold = Josefin_Sans({ weight: '600', subsets: ['latin'] });
const marker = Permanent_Marker({ weight: '400', subsets: ['latin'] });

interface ProductDetailProps {
  id: string;
  product: ProductDocumentData;
  products: AllDocumentTypes[];
}

function ProductDetail({ id, product, products }: ProductDetailProps) {
  return (
    <>
      <section className='relative bg-cream pt-10 lg:pt-20'>
        <h2
          className={`huge-bg-text text-[130px] md:text-[250px] lg:text-[360px] xl:text-[500px] text-uppercase tracking-widest text-orange opacity-20 text-with-shadow ${marker.className}`}>
          KEWA
        </h2>
        <div className='relative spacing container mx-auto flex flex-col justify-center items-center z-10'>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl md:text-4xl xl:text-5xl text-black-muted text-center mb-4 ${josefinSemiBold.className}`}>
            {product.name}
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`${josefinSemiBold.className} text-xl md:text-2xl xl:text-3xl text-black-muted mb-4`}>
            {formatCurrency(Number(product.price))}
          </motion.h5>
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Image
              src={product.image?.url ?? ''}
              width={product.image?.dimensions?.width ?? 600}
              height={product.image?.dimensions?.height ?? 600}
              alt={product.image?.alt ?? 'Product'}
              className='w-[200px] lg:w-[300px] h-full mx-auto object-cover mb-4'
            />
          </motion.div>
          <motion.h6
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`${josefinSemiBold.className} text-xl lg:text-2xl text-black-muted mb-4`}>
            Minimum Order Quantity: {product.moq}
          </motion.h6>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className={`text-base md:text-lg text-black-muted leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center mb-4 ${poppinsRegular.className}`}>
            {product.short_description}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className={`bg-orange rounded-full py-4 px-6 min-w-[180px] text-xl text-white text-center ${josefinSemiBold.className}`}
            href={`https://5y1f9ke4k38.typeform.com/to/cuVuC1Ci#product_id=${id}`}
            target='_blank'>
            Inquire
          </motion.a>
        </div>
      </section>
      {products.length > 0 && (
        <section className='bg-cream pt-10 lg:pt-20'>
          <div className='spacing container xl:w-[80%] mx-auto'>
            <div className='flex flex-col items-center mb-8 xl:mb-12'>
              <h2
                className={`text-2xl md:text-3xl xl:text-4xl text-black-muted text-center mb-4 ${josefinSemiBold.className}`}>
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
