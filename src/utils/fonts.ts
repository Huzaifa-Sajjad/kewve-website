import { Poppins, Kanit, Josefin_Sans, Permanent_Marker } from 'next/font/google';
import localFont from 'next/font/local';

export const regalDisplay = localFont({
  src: [
    { path: '../../public/fonts/PFRegalDisplayPro-Black.ttf', weight: '900' },
    { path: '../../public/fonts/PFRegalDisplayPro-Bold.ttf', weight: '700' },
  ],
});

export const blowBrush = localFont({
  src: [{ path: '../../public/fonts/blowbrush.otf', weight: '900' }],
});
export const poppinsRegular = Poppins({ weight: '400', subsets: ['latin'] });
export const josefinSemiBold = Josefin_Sans({ weight: '600', subsets: ['latin'] });
export const josefinRegular = Josefin_Sans({ weight: '400', subsets: ['latin'] });
