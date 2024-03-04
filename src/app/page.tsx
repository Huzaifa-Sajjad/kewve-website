import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/prismicio';
import { filter } from '@prismicio/client';

import DiscoverFlavours from '@/containers/home/DiscoverFlavours';
import SimplifySourcing from '@/containers/home/SimplifySourcing';
import WorldFoodCategory from '@/containers/home/WorldFoodCategory';
import IncreaseSales from '@/containers/home/IncreaseSales';
import HeroSection from '@/containers/home/HeroSection';

export default async function Home() {
  const client = createClient();

  const products = await client.getAllByType('product', {
    filters: [filter.at('my.product.featured', true)],
    limit: 10,
  });

  return (
    <>
      <Header />
      <HeroSection items={products} />
      <section className='bg-cream'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#ff5c35'
            fill-opacity='1'
            d='M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
        </svg>
      </section>
      <DiscoverFlavours />
      <section className='bg-orange'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#fafaf0'
            fill-opacity='1'
            d='M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
        </svg>
      </section>
      <SimplifySourcing />
      <section className='bg-yellow'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#ff5c35'
            fill-opacity='1'
            d='M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
        </svg>
      </section>
      <WorldFoodCategory />
      <section className='bg-cream'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#fecd88'
            fill-opacity='1'
            d='M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
        </svg>
      </section>
      <IncreaseSales />
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
