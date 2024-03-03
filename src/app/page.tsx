import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { Poppins, Kanit, Josefin_Sans } from 'next/font/google';
import { InfiniteMovingCards } from '@/components/ui/InfiniteMovingCards';

const kanitBold = Kanit({ weight: '900', subsets: ['latin'] });
const poppinsRegular = Poppins({ weight: '400', subsets: ['latin'] });
const josefinSemiBold = Josefin_Sans({ weight: '600', subsets: ['latin'] });

export default async function Home() {
  const client = createClient();

  const products = await client.getAllByType('product', {
    filters: [prismic.filter.at('my.product.featured', true)],
    limit: 10,
  });

  return (
    <>
      <Header />
      <section className='bg-orange relative min-h-[100vh] flex flex-col items-center pt-28'>
        <h2
          className={`text-9xl text-white uppercase text-center tracking-wide text-with-shadow ${kanitBold.className}`}>
          Love Africa
        </h2>
        <h2
          className={`text-8xl text-white uppercase text-center tracking-wide text-with-shadow ${kanitBold.className}`}>
          Taste Africa
        </h2>
        <p className={`text-xl text-white text-center max-w-[60ch] mx-auto mt-6 mb-10 ${poppinsRegular.className}`}>
          Discover the vibrant tapestry of flavors woven throughout Africa with our extensive array of handpicked
          African culinary delights.
        </p>
        <InfiniteMovingCards items={products} />
      </section>
      <section className='bg-cream'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#ff5c35'
            fill-opacity='1'
            d='M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
        </svg>
      </section>
      <section className='relative bg-cream'>
        <div className='spacing container xl:w-[80%] mx-auto'>
          <div className='flex flex-col items-center mb-8 xl:mb-12'>
            <h2
              className={`text-3xl md:text-4xl xl:text-5xl text-black-muted text-center mb-4 ${josefinSemiBold.className}`}>
              Discover Authentic African Flavors
            </h2>
            <p
              className={`text-base md:text-lg text-black-muted leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${poppinsRegular.className}`}>
              Delve into the heart of African culinary heritage with our platform, offering unparalleled access to an
              extensive selection of authentic food products sourced directly from the continent.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:gap-10'>
            <div className='col-span-2 lg:col-span-1'>
              <Image
                src='/images/spices.jpg'
                alt='Spices from Africa'
                width={640}
                height={800}
                className='w-full h-auto aspect-square object-cover rounded shadow'
              />
            </div>
            <div className='col-span-2 lg:col-span-1 flex flex-col justify-center lg:-px-6'>
              <h3
                className={`text-2xl xl:text-3xl text-black-muted text-center lg:text-left leading-normal mb-4 ${josefinSemiBold.className}`}>
                African Delights
              </h3>
              <ul className='ml-4 list-disc'>
                <li
                  className={`text-sm md:text-base text-black-muted leading-relaxed mb-4 xl:max-w-[60ch] ${poppinsRegular.className}`}>
                  KEWVE platform offers wholesalers like yourself access to a wide range of authentic African food
                  products directly from the source.
                </li>
                <li
                  className={`text-sm md:text-base text-black-muted leading-relaxed xl:max-w-[60ch] ${poppinsRegular.className}`}>
                  Say goodbye to middlemen and enjoy a diverse selection of African food. Bid farewell to unnecessary
                  intermediaries, and embrace a direct connection with trusted suppliers. We make sourcing African food
                  and drink brands as easy as it should be.
                </li>
              </ul>
              <div className='flex justify-center lg:justify-start gap-4 mt-6 lg:mt-10'>
                <button
                  className={`bg-orange rounded-full py-3 px-6 text-base text-white ${josefinSemiBold.className}`}>
                  Become a Buyer
                </button>
                <button className={`bg-pink rounded-full py-3 px-6 text-base text-white ${josefinSemiBold.className}`}>
                  Become a Supplier
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-orange'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#fafaf0'
            fill-opacity='1'
            d='M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
        </svg>
      </section>
      <section className='relative bg-orange'>
        <div className='spacing container xl:w-[80%] mx-auto'>
          <div className='flex flex-col items-center mb-8 lg:mb-12'>
            <h2 className={`text-3xl md:text-4xl xl:text-5xl text-white text-center mb-4 ${josefinSemiBold.className}`}>
              Simplify Your Sourcing Process
            </h2>
            <p
              className={`text-base lg:text-lg text-white leading-normal max-w-full lg:max-w-[65ch] mx-auto text-center ${poppinsRegular.className}`}>
              Revolutionize your procurement journey with KEWVE&apos;s seamless solution. Unlock direct access to
              top-quality African brands, streamlining your sourcing needs effortlessly. Experience efficiency and
              reliability like never before.
            </p>
          </div>
          <div className='grid grid-cols-3 gap-4'>
            <div className='col-span-3 lg:col-span-1 p-8 bg-yellow rounded shadow-md text-center'>
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
            </div>
            <div className='col-span-3 lg:col-span-1 p-8 bg-yellow rounded shadow-md text-center'>
              <Image
                src='/images/sourcing.svg'
                alt='Save Time'
                width={64}
                height={64}
                className='mx-auto mb-4 xl:mb-6'
              />
              <h3 className={`text-xl text-black-muted leading-tight mb-4 ${josefinSemiBold.className}`}>
                Effortless Sourcing
              </h3>
              <p className={`text-sm text-black-muted leading-relaxed ${poppinsRegular.className}`}>
                We streamline sourcing for UK and European food retailers and wholesalers, ensuring efficiency and
                convenience in the procurement process for a seamless experience.
              </p>
            </div>
            <div className='col-span-3 lg:col-span-1 p-8 bg-yellow rounded shadow-md text-center'>
              <Image
                src='/images/platform.svg'
                alt='Save Time'
                width={64}
                height={64}
                className='mx-auto mb-4 xl:mb-6'
              />
              <h3 className={`text-xl text-black-muted leading-tight mb-4 ${josefinSemiBold.className}`}>
                Seamless Access
              </h3>
              <p className={`text-sm text-black-muted leading-relaxed ${poppinsRegular.className}`}>
                Instead of spending time and effort searching for reliable suppliers, our platform connects you with
                trusted African food brands, ensuring a smooth sourcing experience
              </p>
            </div>
          </div>
          <div className='flex justify-center gap-4 mt-6 lg:mt-10 xl:mt-14'>
            <button
              className={`bg-white rounded-full py-3 px-6 border-2 border-white text-base text-black-muted ${josefinSemiBold.className}`}>
              Become a Buyer
            </button>
            <button
              className={`bg-transparent border-2 border-white rounded-full py-3 px-6 text-base text-white ${josefinSemiBold.className}`}>
              Become a Supplier
            </button>
          </div>
        </div>
      </section>
      <section className='bg-yellow'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#ff5c35'
            fill-opacity='1'
            d='M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
        </svg>
      </section>
      <section className='relative bg-yellow'>
        <div className='spacing container xl:w-[80%] mx-auto'>
          <div className='flex flex-col items-center mb-8 xl:mb-12'>
            <h2
              className={`text-3xl md:text-4xl xl:text-5xl text-black-muted text-center mb-4 ${josefinSemiBold.className}`}>
              Build Your World Food Category
            </h2>
            <p
              className={`text-base md:text-lg text-black-muted leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${poppinsRegular.className}`}>
              Unlock new opportunities with KEWVE&apos;s comprehensive solutions, broadening your market reach and
              enhancing your offerings.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:gap-10'>
            <div className='col-span-2 lg:col-span-1 flex flex-col justify-center lg:-px-6 order-2 lg:order-1'>
              <h3
                className={`text-2xl xl:text-3xl text-black-muted text-center lg:text-left leading-normal mb-4 ${josefinSemiBold.className}`}>
                Global Expansion
              </h3>
              <ul className='ml-4 list-disc'>
                <li
                  className={`text-sm md:text-base text-black-muted leading-relaxed mb-4 xl:max-w-[60ch] ${poppinsRegular.className}`}>
                  Globalize your offerings with KEWVE, diversify your offerings and cater to the growing demand for
                  unique and authentic flavours.
                </li>
                <li
                  className={`text-sm md:text-base text-black-muted leading-relaxed xl:max-w-[60ch] ${poppinsRegular.className}`}>
                  Access exclusive African food products offerings, market insights, supplier connections, and
                  streamlined procurement to broaden your global food category.
                </li>
              </ul>
              <div className='flex justify-center lg:justify-start gap-4 mt-6 lg:mt-10'>
                <button
                  className={`bg-orange rounded-full py-3 px-6 text-base text-white ${josefinSemiBold.className}`}>
                  Become a Buyer
                </button>
                <button className={`bg-pink rounded-full py-3 px-6 text-base text-white ${josefinSemiBold.className}`}>
                  Become a Supplier
                </button>
              </div>
            </div>
            <div className='col-span-2 lg:col-span-1 order-1 lg:order-2'>
              <Image
                src='/images/world_food.jpg'
                alt='Spices from Africa'
                width={640}
                height={800}
                className='w-full h-auto aspect-square object-cover rounded shadow'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-cream'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#fecd88'
            fill-opacity='1'
            d='M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z'></path>
        </svg>
      </section>
      <section className='relative bg-cream'>
        <div className='spacing container xl:w-[80%] mx-auto'>
          <div className='flex flex-col items-center mb-8 xl:mb-12'>
            <h2
              className={`text-3xl md:text-4xl xl:text-5xl text-black-muted text-center mb-4 ${josefinSemiBold.className}`}>
              Increase Your Sales
            </h2>
            <p
              className={`text-base md:text-lg text-black-muted leading-normal max-w-full lg:max-w-[60ch] mx-auto text-center ${poppinsRegular.className}`}>
              Explore a lucrative market expansion strategy with KEWVE&apos;s unique African product integration,
              connecting wholesalers to global buyers for increased sales and market reach.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-4 lg:gap-10'>
            <div className='col-span-2 lg:col-span-1'>
              <Image
                src='/images/sales.jpg'
                alt='Increase your Sales'
                width={640}
                height={800}
                className='w-full h-auto aspect-square object-cover rounded shadow'
              />
            </div>
            <div className='col-span-2 lg:col-span-1 flex flex-col justify-center lg:-px-6'>
              <h3
                className={`text-2xl xl:text-3xl text-black-muted text-center lg:text-left leading-normal mb-4 ${josefinSemiBold.className}`}>
                Sales Growth
              </h3>
              <ul className='ml-4 list-disc'>
                <li
                  className={`text-sm md:text-base text-black-muted leading-relaxed mb-4 xl:max-w-[60ch] ${poppinsRegular.className}`}>
                  Take a bite of a $3.2 billion market by integrating distinctive African products to your world food
                  category.
                </li>
                <li
                  className={`text-sm md:text-base text-black-muted leading-relaxed xl:max-w-[60ch] ${poppinsRegular.className}`}>
                  Integrate distinctive African food products to broaden market reach globally. KEWVE connects UK
                  wholesalers with international buyers, unlocking opportunities for expansion and increased global
                  sales.
                </li>
              </ul>
              <div className='flex justify-center lg:justify-start gap-4 mt-6 lg:mt-10'>
                <button
                  className={`bg-orange rounded-full py-3 px-6 text-base text-white ${josefinSemiBold.className}`}>
                  Become a Buyer
                </button>
                <button className={`bg-pink rounded-full py-3 px-6 text-base text-white ${josefinSemiBold.className}`}>
                  Become a Supplier
                </button>
              </div>
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
