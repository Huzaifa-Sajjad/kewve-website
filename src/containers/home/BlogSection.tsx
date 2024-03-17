'use client';

import { motion } from 'framer-motion';
import { regalDisplay, josefinRegular } from '@/utils';
import { AllDocumentTypes, BlogPostDocumentData } from '../../../prismicio-types';
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';
import BlogCard from '@/components/BlogCard';

interface BlogSectionProps {
  posts: AllDocumentTypes[];
}

function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section className='bg-cream py-10 lg:pb-4 lg:-mt-8 xl:-mt-16'>
      <div className='spacing container xl:w-[80%] mx-auto'>
        <div className='flex flex-col items-center mb-4 lg:mb-8 xl:mb-10'>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`text-3xl md:text-4xl xl:text-6xl text-black font-bold text-center mb-4 ${regalDisplay.className}`}>
            African Connections
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 }}
            className={`text-lg text-black leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${josefinRegular.className}`}>
            Discover and connect with African food brands and suppliers effortlessly. Explore authentic ingredients and
            products, fostering culinary partnerships and celebrating the richness of African cuisine.
          </motion.p>
        </div>
      </div>
      <InfiniteMovingCards speed='fast'>
        <>
          {posts.map((post, idx) => {
            const blogPost = post.data as unknown as BlogPostDocumentData;
            return <BlogCard key={post.uid} uuid={post.uid} post={blogPost} />;
          })}
        </>
      </InfiniteMovingCards>
    </section>
  );
}

export default BlogSection;
