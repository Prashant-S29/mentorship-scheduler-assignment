'use client';

import { Button, Input } from '@/components/ui';
import { availableSessions } from '@/constants';
import { getStringFromSlug } from '@/utils/getStringFromSlug';
import { useRouter } from 'next/navigation';
import React from 'react';

interface params {
  sessionSlug: string;
}

const BookSession: React.FC<{ params: params }> = ({ params }) => {
  const [activeDate, setActiveDate] = React.useState(0);
  const [activeTime, setActiveTime] = React.useState(0);

  const router = useRouter();

  return (
    <div className='w-full min-h-screen flex justify-center bg-[#f3f4f6] p-5 sm:p-8'>
      <div>
        <div className='bg-white rounded-[30px] p-5 sm:p-8 w-full sm:w-[500px]'>
          <section>
            <div className='flex items-center gap-2'>
              <div className='min-w-[60px] h-[60px] rounded-full bg-pink-200' />
              <div>
                <p className='font-medium'>Arsh Goyal</p>
                <p className='text-sm text-black/70 line-clamp-1'>
                  Samsung | Ex-CodeChef | Ex- ISRO | Gold Medalist - NIT
                  Jalandhar | 42k+ Subs on YT
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className='bg-white rounded-[30px] p-5 sm:p-8 w-full sm:w-[500px] mt-5'>
          <section>
            <p className='text-base font-semibold'>What{"'"}s happening?</p>
            <section className='mt-1 gap-2 leading-tight'>
              {getStringFromSlug(params.sessionSlug)} with Arsh Goyal
              <p className='mt-2 text-sm text-black/70'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                quaerat atque magni, aliquam veritatis
              </p>
            </section>
          </section>
        </div>
        <div className='bg-white rounded-[30px] p-5 sm:p-8 w-full sm:w-[500px] mt-5'>
          <section>
            <p className='text-base font-semibold'>When should we meet?</p>
            <section className='grid grid-cols-2 sm:grid-cols-3 mt-1 gap-2 max-h-[400px] overflow-y-scroll'>
              {availableSessions.map((session, index) => (
                <div
                  className={`text-center p-3 rounded-lg border cursor-pointer ${
                    activeDate === index
                      ? 'bg-[#f2643050] border-[#f26430]'
                      : ' bg-[#f3f4f6] '
                  }`}
                  key={index}
                  onClick={() => {
                    setActiveDate(index);
                  }}
                >
                  <p className='text-sm'>{session.day}</p>
                  <p className='text-sm font-semibold'>{session.date}</p>
                </div>
              ))}
            </section>
          </section>
          <section className='mt-5'>
            <p className='text-base font-semibold'>Select time of a day</p>
            <section className='grid grid-cols-2 max-h-[400px] overflow-y-scroll sm:grid-cols-3 mt-1 gap-2'>
              {availableSessions.map((session, index) => (
                <div
                  className={`text-center p-3 rounded-lg border cursor-pointer ${
                    activeTime === index
                      ? 'bg-[#f2643050] border-[#f26430]'
                      : ' bg-[#f3f4f6] '
                  }`}
                  key={index}
                  onClick={() => {
                    setActiveTime(index);
                  }}
                >
                  <p className='text-sm font-semibold'>{session.time[0]}</p>
                </div>
              ))}
            </section>
          </section>
          <section className='mt-5 w-full'>
            <p className='text-base font-semibold'>Any specific topic?</p>
            <section className='mt-2'>
              <textarea
                name=''
                id=''
                placeholder='Describe your topic'
                className='w-full h-[100px] outline-none text-sm border-b'
              ></textarea>
            </section>
          </section>
          <section className='mt-5 w-full'>
            <p className='text-base font-semibold'>Personal Info</p>
            <section className='mt-2 flex gap-2'>
              <Input
                name=''
                id=''
                placeholder='Name'
                className='w-full px-2 py-2 outline-none text-sm border-b'
              ></Input>
              <Input
                name=''
                id=''
                placeholder='Email'
                className='w-full px-2 py-2 outline-none text-sm border-b'
              ></Input>
            </section>
          </section>
          <section className='flex gap-3 mt-5'>
            <Button
              variant={'default'}
              className={` px-6 w-full py-6  rounded-full mt-3 border text-sm font-medium hover:bg-gray-200 bg-white text-black duration-150`}
              onClick={() => {
                router.back();
              }}
            >
              back
            </Button>
            <Button
              variant={'default'}
              className={` px-6 w-full py-6 bg-[#f26430] rounded-full mt-3 text-white text-sm font-medium hover:bg-[#e23e14] duration-150`}
            >
              Confirm
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BookSession;
