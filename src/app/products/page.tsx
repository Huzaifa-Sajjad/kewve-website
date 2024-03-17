import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/prismicio';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { josefinRegular, josefinSemiBold, regalDisplay } from '@/utils';
import Link from 'next/link';
import ProductGrid from '@/containers/ProductGrid';

export default async function Products({ searchParams }: any) {
  const params = new URLSearchParams(searchParams);
  const selectedBrand = params.get('brand') || 'all';
  const client = createClient();

  const products = await client.getAllByType('product', {
    fetchOptions: {
      next: { revalidate: 60 },
    },
    fetchLinks: ['brand'],
    orderings: [
      {
        field: 'my.product.published_on',
        direction: 'desc',
      },
    ],
  });

  const brands = await client.getAllByType('brand', {
    fetchOptions: {
      next: { revalidate: 60 },
    },
  });

  return (
    <>
      <Header />
      <section className='landing-hero relative flex flex-col items-center py-16 overflow-x-hidden'>
        <div className='container spacing mx-auto lg:mt-16'>
          <h1
            className={`text-3xl md:text-4xl xl:text-6xl font-bold text-white text-center mb-4 ${regalDisplay.className}`}>
            Discover Authentic <br /> African Flavours
          </h1>
          <p
            className={`text-base md:text-lg text-white leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${josefinRegular.className}`}>
            Delve into the heart of African culinary heritage with our platform, offering unparalleled access to an
            extensive selection of authentic food products sourced directly from the continent.
          </p>
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
      <section className='bg-cream py-10 lg:py-0 lg:-mt-8 xl:-mt-16'>
        <div className='spacing container mx-auto'>
          <div className='grid grid-cols-12 gap-4 xl:gap-6'>
            <div className='col-span-12 md:col-span-3 xl:col-span-2 md:border-r md:border-gray-200'>
              <aside>
                <h3 className={`text-xl font-bold text-black text-left mb-4 xl:mb-6 ${josefinSemiBold.className}`}>
                  Filter by Brand
                </h3>
                <RadioGroup defaultValue={selectedBrand} value={selectedBrand}>
                  {brands.map((brand) => (
                    <Link
                      href={`?brand=${brand.uid}`}
                      key={brand.uid}
                      scroll={false}
                      className='flex flex-shrink-0 items-center space-x-4 mb-4 cursor-pointer'>
                      <RadioGroupItem value={brand.uid} id={brand.uid} />
                      <Label htmlFor={brand.uid}>{brand.data.name}</Label>
                    </Link>
                  ))}
                  <Link
                    href='/products'
                    key='All Brands'
                    scroll={false}
                    className='flex items-center space-x-4 cursor-pointer'>
                    <RadioGroupItem value='all' id='all-brands' />
                    <Label htmlFor='all brands'>All Brands</Label>
                  </Link>
                </RadioGroup>
              </aside>
            </div>
            <div className='col-span-12 md:col-span-9 xl:col-span-10'>
              <ProductGrid items={products} />
            </div>
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
