'use client';

import Link from 'next/link';
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

  const logoClassName = `text-lg lg:text-2xl text-white tracking-wider font-bold ${josefinSemiBold.className}`;
  const headerLinkClassName = `text-sm lg:text-base text-white uppercase ${josefinSemiBold.className}`;
  const headerMobileClassName = `text-2xl font-bol text-white uppercase outline-none ${josefinSemiBold.className}`;

  return (
    <>
      <header>
        <div
          className={`absolute w-full top-0 z-10 hidden lg:flex justify-center items-center py-4 px-3 lg:px-4 gap-24 ${needsBackground ? 'bg-orange' : ''}`}>
          <Link prefetch href='/' className={headerLinkClassName}>
            Home
          </Link>
          <Link prefetch href='/our-story' className={headerLinkClassName}>
            Our Story
          </Link>
          <Link prefetch href='/' className={logoClassName}>
            KEWVE
          </Link>
          <Link prefetch href='/products' className={headerLinkClassName}>
            Products
          </Link>
          <Link prefetch href='/blog' className={headerLinkClassName}>
            Blog
          </Link>
        </div>
        <div className='flex lg:hidden justify-between items-center bg-orange py-4 px-4'>
          <Link prefetch href='/' className={logoClassName}>
            KEWVE
          </Link>
          <Menu className='text-white cursor-pointer' onClick={() => setMobileMenuOpen(true)} />
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
