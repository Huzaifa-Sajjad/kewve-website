'use client';

import Link from 'next/link';
import Image from 'next/image';
import { josefinSemiBold } from '@/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  needsBackground?: boolean;
}

function Header({ needsBackground = false }: HeaderProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleRouteChange = (route: string) => () => {
    setMobileMenuOpen(false);
    router.push(route);
  };

  const headerLinkClassName = `flex text-sm lg:text-base text-white uppercase ${josefinSemiBold.className}  tracking-wide`;
  const headerMobileClassName = `text-2xl font-bol text-white uppercase outline-none tracking-wide ${josefinSemiBold.className}`;

  return (
    <>
      <header>
        <div
          className={`absolute w-full h-auto top-0 z-50 hidden lg:flex lg:justify-center lg:items-baseline py-4 px-3 lg:px-4 gap-24 ${needsBackground ? 'bg-orange' : ''}`}>
          <Link prefetch href='/' className={headerLinkClassName}>
            Home
          </Link>
          <Link prefetch href='/our-story' className={headerLinkClassName}>
            Our Story
          </Link>
          <Link prefetch href='/' className='flex relative'>
            <Image src='/logo-color.png' width={200} height={24} alt='Kewve logo' className='w-auto h-6 z-50' />
            <div className='absolute -top-[90px] -right-[23px] rounded-full bg-white h-40 w-40'></div>
          </Link>
          <Link prefetch href='/products' className={headerLinkClassName}>
            Products
          </Link>
          <Link prefetch href='/blog' className={headerLinkClassName}>
            Blog
          </Link>
        </div>
        <div className='flex relative z-50 overflow-visible lg:hidden justify-between items-center bg-orange py-4 px-4'>
          <Link prefetch href='/' className='flex'>
            <Image src='/logo-color.png' width={200} height={24} alt='Kewve logo' className='w-auto h-5 z-50' />
            <div className='absolute -top-[80px] -left-[20px] rounded-full bg-white h-40 w-40 z-0'></div>
          </Link>
          <Menu className='text-white cursor-pointer h-7 w-auto' onClick={() => setMobileMenuOpen(true)} />
        </div>
      </header>
      <Sheet open={mobileMenuOpen} onOpenChange={() => setMobileMenuOpen(false)}>
        <SheetContent>
          <div className='flex flex-col items-center gap-6'>
            <button onClick={handleRouteChange('/')} className={headerMobileClassName}>
              Home
            </button>
            <button onClick={handleRouteChange('/our-story')} className={headerMobileClassName}>
              Our Story
            </button>
            <button onClick={handleRouteChange('/products')} className={headerMobileClassName}>
              Products
            </button>
            <button onClick={handleRouteChange('/blog')} className={headerMobileClassName}>
              Blog
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default Header;
