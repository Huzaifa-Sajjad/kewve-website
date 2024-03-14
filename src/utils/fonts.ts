import { Poppins, Kanit, Josefin_Sans, Permanent_Marker } from 'next/font/google';
import localFont from 'next/font/local';

export const regalDisplay = localFont({
  src: [
    { path: '../../public/fonts/PFRegalDisplayPro-Black.ttf', weight: '900' },
    { path: '../../public/fonts/PFRegalDisplayPro-Bold.ttf', weight: '700' },
    { path: '../../public/fonts/PFRegalDisplayPro-Medium.ttf', weight: '500' },
    { path: '../../public/fonts/PFRegalDisplayPro-Regular.ttf', weight: '400' },
  ],
});

export const marker = Permanent_Marker({ weight: '400', subsets: ['latin'] });
export const kanitBold = Kanit({ weight: '900', subsets: ['latin'] });
export const poppinsRegular = Poppins({ weight: '400', subsets: ['latin'] });
export const josefinSemiBold = Josefin_Sans({ weight: '600', subsets: ['latin'] });
export const josefinRegular = Josefin_Sans({ weight: '400', subsets: ['latin'] });
