import Link from 'next/link';
import React from 'react';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({ weight: '500', subsets: ['latin'] });

function Footer() {
  const logoClassName = `block text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white ${josefin.className}`;
  const footerLinkClassName = `text-sm lg:text-base text-center text-white underline ${josefin.className}`;

  return (
    <footer>
      <div className='spacing container mx-auto flex flex-col'>
        <span className={logoClassName}>KEWVE</span>
        <div className='flex items-center justify-center gap-4 my-8'>
          <Link href='/terms' className={footerLinkClassName}>
            Terms & Conditions
          </Link>
          <Link href='/privacy' className={footerLinkClassName}>
            Privacy Policy
          </Link>
          <Link href='/marketplace-terms' className={footerLinkClassName}>
            Marketplace Term & Conditions
          </Link>
        </div>
        <div className='flex justify-between items-center'>
          <span className={`text-sm lg:text-base text-white ${josefin.className}`}>
            &copy; KEWVE {new Date().getFullYear()}
          </span>
          <a href='https://www.thewebagency.io/' className={`text-sm lg:text-base text-white ${josefin.className}`}>
            Developed by The Web Agency
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
