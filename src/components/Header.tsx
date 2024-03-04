'use client';

import Link from 'next/link';
import { Josefin_Sans } from 'next/font/google';
import { useState } from 'react';

const josefin = Josefin_Sans({ weight: '500', subsets: ['latin'] });

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const logoClassName = `text-lg lg:text-xl text-white ${josefin.className}`;
  const headerLinkClassName = `text-sm lg:text-base text-white uppercase ${josefin.className}`;

  return (
    <header>
      <div className='hidden lg:flex justify-center items-center bg-orange py-4 px-3 lg:px-4 gap-24'>
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
