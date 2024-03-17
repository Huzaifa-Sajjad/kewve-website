'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Josefin_Sans } from 'next/font/google';
import { formatCurrency, getRandomColor, regalDisplay } from '@/utils';
import type { ProductDocumentData } from '../../prismicio-types';
import Link from 'next/link';

const josefinSemiBold = Josefin_Sans({ weight: '600', subsets: ['latin'] });

interface ProductCardProps {
  id: string;
  product: ProductDocumentData;
}

function ProductCard({ id, product }: ProductCardProps) {
  const color = getRandomColor();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className='relative w-full rounded-lg flex-shrink-0 px-8 py-6'
      style={{
        background: `linear-gradient(to bottom, #fafaf0 35%, ${color} 35%, ${color} 100%)`,
      }}
      key={product.name}>
      <div
        className='absolute top-0 right-0 h-20 w-20 flex flex-col items-center justify-center rounded-full'
        style={{ backgroundColor: color }}>
        <span className={`text-sm text-black-muted ${josefinSemiBold.className}`}>MOQ</span>
        <span className={`text-sm text-black-muted ${josefinSemiBold.className}`}>{product.moq}</span>
      </div>
      <Image
        src={product.image?.url ?? ''}
        width={product.image?.dimensions?.width ?? 600}
        height={product.image?.dimensions?.height ?? 600}
        alt={product.image?.alt ?? 'Product'}
        className='w-3/4 h-auto aspect-square object-contain mx-auto'
      />
      <div className='relative z-20 mt-6 flex flex-col items-center justify-center'>
        <h4 className={`${regalDisplay.className} text-xl font-bold text-black-muted uppercase mb-4`}>
          {product.name}
        </h4>
        <Link
          href={`/products/${id}`}
          prefetch
          className={`bg-orange rounded-full py-3 px-10 text-lg text-white shadow-lg tracking-wide ${josefinSemiBold.className}`}>
          Know More
        </Link>
      </div>
    </motion.div>
  );
}

export default ProductCard;
