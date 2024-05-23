'use client';

import clsx from 'clsx';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import { useFormState } from 'react-dom';
import { useFormStatus } from 'react-dom';
import { useState, useEffect } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { titleFont, josefinRegular, josefinSemiBold } from '@/utils';
import { buyerInterestedForm } from '@/actions';

interface CTAButtonsProps {
  className?: string;
  buyerText?: string;
  supplierText?: string;
}

function CTAButtons({ className, buyerText = 'Become a buyer', supplierText = 'Become a supplier' }: CTAButtonsProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [isBuyer, setIsBuyer] = useState(false);

  const { toast } = useToast();
  const { pending } = useFormStatus();
  const [state, action] = useFormState(buyerInterestedForm, { message: '', error: false, submitted: false });

  const handleOpenModal = (companyType: boolean) => () => {
    setIsBuyer(companyType);
    setModalOpen(true);
  };

  useEffect(() => {
    if (state.submitted && state.error) {
      toast({ title: 'Bummer! something is not ring', description: state.message, variant: 'destructive' });
      redirect('/');
    }

    if (state.submitted && !state.error) {
      toast({ title: 'Yahoo!', description: state.message });
      redirect('/');
    }
  }, [state]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className={clsx('flex flex-wrap gap-4', className)}>
        <button
          className={`w-full md:w-fit bg-black border-2 border-black rounded-full py-3 px-6 lg:py-4 lg:px-8  text-lg lg:text-2xl  text-white transition-all text-center capitalize ${josefinSemiBold.className}`}
          onClick={handleOpenModal(true)}>
          {buyerText}
        </button>
        <button
          className={`w-full md:w-fit bg-transparent border-2 border-black rounded-full py-3 px-6 lg:py-4 lg:px-8  text-lg lg:text-2xl text-black hover:bg-black hover:text-white transition-all text-center capitalize ${josefinSemiBold.className}`}
          onClick={handleOpenModal(false)}>
          {supplierText}
        </button>
      </motion.div>
      <Dialog open={modalOpen} onOpenChange={() => setModalOpen(false)}>
        <DialogContent>
          <div className='grid gap-4 py-4 mt-4'>
            <p className={`${josefinRegular.className} text-black`}>
              Once you&apos;ve submitted, you&apos;ll be invited to book a session with one of the KEWVE team so that we
              can understand your business needs and show you how KEWVE works.
            </p>
            <form action={action} className='grid grid-cols-4 gap-4'>
              <div className='col-span-4'>
                <h4 className={`text-lg text-black mb-2 ${titleFont.className}`}>I am interested as?</h4>
                <RadioGroup name='account_type' defaultValue={isBuyer ? 'buyer' : 'supplier'} required>
                  <div className='flex flex-wrap gap-4'>
                    <div className='flex flex-shrink-0 items-center space-x-2 cursor-pointer'>
                      <RadioGroupItem value='buyer' id='buyer' />
                      <Label htmlFor='buyer'>Buyer</Label>
                    </div>
                    <div className='flex flex-shrink-0 items-center space-x-2 cursor-pointer'>
                      <RadioGroupItem value='supplier' id='supplier' />
                      <Label htmlFor='supplier'>Supplier</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <div className='col-span-4'>
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='email'>
                    Email <span className='text-red-600'>*</span>
                  </Label>
                  <Input type='email' name='email' id='email' required />
                </div>
              </div>
              <div className='col-span-4 lg:col-span-2'>
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='first_name'>
                    First name <span className='text-red-600'>*</span>
                  </Label>
                  <Input type='text' name='first_name' id='first_name' required />
                </div>
              </div>
              <div className='col-span-4 lg:col-span-2'>
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='last_name'>
                    Last name <span className='text-red-600'>*</span>
                  </Label>
                  <Input type='text' name='last_name' id='last_name' required />
                </div>
              </div>
              <div className='col-span-4'>
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='company_name'>
                    Company Name <span className='text-red-600'>*</span>
                  </Label>
                  <Input type='text' name='company_name' id='company_name' required />
                </div>
              </div>
              <div className='col-span-4'>
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='phone_number'>Phone Number</Label>
                  <Input type='text' name='phone_number' id='phone_number' />
                </div>
              </div>
              <div className='col-span-4'>
                <div className='flex flex-col gap-2'>
                  <Label htmlFor='website'>
                    Website URL <span className='text-red-600'>*</span>
                  </Label>
                  <Input type='url' name='website' id='website' required />
                </div>
              </div>
              <button
                type='submit'
                disabled={pending}
                className={`col-span-4 block w-full md:w-fit bg-black border-2 border-black rounded-full py-3 px-6 min-w-[180px] text-base lg:text-lg  text-white transition-all text-center mt-2 hover:bg-muted-orange hover:border-muted-orange ${josefinSemiBold.className}`}>
                {pending ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CTAButtons;
