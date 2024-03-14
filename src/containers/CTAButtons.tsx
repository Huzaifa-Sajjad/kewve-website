import { motion } from 'framer-motion';
import { PopupButton } from '@typeform/embed-react';
import { josefinSemiBold } from '@/utils';

function CTAButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className='flex flex-wrap gap-4 mt-10'>
      <PopupButton
        id='x2Ut65IL'
        className={`w-full md:w-fit bg-black border-2 border-black rounded-full py-3 px-6 lg:py-4 lg:px-8  text-base lg:text-lg  text-white transition-all text-center ${josefinSemiBold.className}`}>
        Become a Buyer
      </PopupButton>
      <PopupButton
        id='lEkbdbRx'
        className={`w-full md:w-fit bg-transparent border-2 border-black rounded-full py-3 px-6 lg:py-4 lg:px-8  text-base lg:text-lg text-black hover:bg-black hover:text-white transition-all text-center ${josefinSemiBold.className}`}>
        Become a Supplier
      </PopupButton>
    </motion.div>
  );
}

export default CTAButtons;
