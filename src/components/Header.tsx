'use client';

import Link from 'next/link';
import { josefinSemiBold } from '@/utils';

function Header() {
  const logoClassName = `text-lg lg:text-2xl text-white tracking-wider font-bold ${josefinSemiBold.className}`;
  const headerLinkClassName = `text-sm lg:text-base text-white uppercase ${josefinSemiBold.className}`;

  return (
    <header>
      <div className='absolute w-full top-0 z-10 hidden lg:flex justify-center items-center py-4 px-3 lg:px-4 gap-24'>
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
      <div className='flex lg:hidden justify-between items-center bg-orange py-4 px-4 border-b border-black-muted'>
        <Link prefetch href='/our-story' className={headerLinkClassName}>
          Our Story
        </Link>
        <Link prefetch href='/' className={logoClassName}>
          KEWVE
        </Link>
        <Link prefetch href='/products' className={headerLinkClassName}>
          Products
        </Link>
      </div>
    </header>
  );
}

export default Header;
