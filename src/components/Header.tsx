import Link from 'next/link';
import React from 'react';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({ weight: '500', subsets: ['latin'] });

function Header() {
  const logoClassName = `text-xl text-white ${josefin.className}`;
  const headerLinkClassName = `text-base text-white uppercase ${josefin.className}`;

  return (
    <header className='flex justify-center items-center bg-orange py-3 px-4 gap-24 z-50'>
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
    </header>
  );
}

export default Header;
