import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/prismicio';
import { Poppins, Josefin_Sans } from 'next/font/google';
import ProductCard from '@/components/ProductCard';

const poppinsRegular = Poppins({ weight: '400', subsets: ['latin'] });
const josefinSemiBold = Josefin_Sans({ weight: '600', subsets: ['latin'] });

export default async function Products() {
  const client = createClient();

  const products = await client.getAllByType('product', {
    fetchOptions: {
      next: { revalidate: 60 },
    },
    orderings: [
      {
        field: 'my.product.published_on',
        direction: 'desc',
      },
    ],
  });

  return (
    <>
      <Header />
      <section className='bg-cream pt-10 lg:pt-24'>
        <div className='spacing container mx-auto'>
          <div className='flex flex-col items-center mb-8 xl:mb-12'>
            <h1
              className={`text-3xl md:text-4xl xl:text-5xl text-black-muted text-center mb-4 ${josefinSemiBold.className}`}>
              Discover Authentic African Flavors
            </h1>
            <p
              className={`text-base md:text-lg text-black-muted leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${poppinsRegular.className}`}>
              Delve into the heart of African culinary heritage with our platform, offering unparalleled access to an
              extensive selection of authentic food products sourced directly from the continent.
            </p>
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
