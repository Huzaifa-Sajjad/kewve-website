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
          className={`absolute w-full h-auto top-0 z-10 hidden lg:flex lg:justify-center lg:items-baseline py-4 px-3 lg:px-4 gap-24 ${needsBackground ? 'bg-orange' : ''}`}>
          <Link prefetch href='/' className={headerLinkClassName}>
            Home
          </Link>
          <Link prefetch href='/our-story' className={headerLinkClassName}>
            Our Story
          </Link>
          <Link prefetch href='/'>
            <Image src='/logo.png' width={200} height={24} alt='Kewve logo' className='w-auto h-6' />
          </Link>
          <Link prefetch href='/products' className={headerLinkClassName}>
            Products
          </Link>
          <Link prefetch href='/blog' className={headerLinkClassName}>
            Blog
          </Link>
        </div>
        <div className='flex lg:hidden justify-between items-center bg-orange py-4 px-4'>
          <Link prefetch href='/'>
            <Image src='/logo.png' width={200} height={20} alt='Kewve logo' className='w-auto h-5' />
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
