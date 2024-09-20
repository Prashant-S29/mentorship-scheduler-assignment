import { Button } from '@/components/ui';
import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center p-5'>
      <section className='leading-tight'>
        <h1 className='text-xl md:text-2xl font-bold'>Mentorship Scheduler</h1>
        <p className='text-sm md:text-base'>Schedule your mentorship sessions with ease</p>
        <Button
          asChild
          variant={'default'}
          className={` px-6  py-6 bg-[#f26430] rounded-full mt-3 text-white text-sm font-medium hover:bg-[#e23e14] duration-150`}
        >
          <Link href='/new-session'>Schedule a session</Link>
        </Button>
      </section>
    </div>
  );
};

export default Hero;
