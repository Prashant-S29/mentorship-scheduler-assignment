import { CursorCommentText } from '@/components/custom';
import { Button } from '@/components/ui';
import { offerings } from '@/constants';
import { getStringFromSlug } from '@/utils/getStringFromSlug';
import Link from 'next/link';
import React from 'react';

interface params {
  slug: string;
}

const BookSession: React.FC<{ params: params }> = ({ params }) => {
  return (
    <div className='lg:flex w-full'>
      <section className='  w-full p-5 sm:p-[50px] lg:h-screen bg-[#fff] border-b lg:border-r lg:w-fit'>
        <div>
          <div className='relative  w-fit'>
            <div className='size-[100px] sm:size-[150px] md:size-[200px] rounded-full bg-pink-300' />
            <div className='hidden sm:block absolute bottom-0 left-[105%]'>
              <CursorCommentText
                text='50+ Session Booked'
                cursorPosition='top-left'
                backgroundColor='#fe3559'
              />
            </div>
          </div>
          <section className='mt-3'>
            <div className='relative'>
              <p className='text-[24px] sm:text-[30px] font-extrabold'>
                {getStringFromSlug(params.slug)}
              </p>
              <svg
                width='150'
                height='24'
                viewBox='0 0 204 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute top-[100%] -mt-2 left-0'
              >
                <path
                  id='Vector 61'
                  d='M202.149 5.93888C161.306 4.17478 117.688 1.76409 76.819 1.72446C53.3272 1.70169 -16.9242 1.67797 6.42397 4.97002C44.8009 10.3811 84.263 9.02923 122.84 12.2984C137.786 13.5651 152.63 15.4132 167.522 17.3894C173.253 18.15 176.798 22.2728 167.654 21.9437C126.84 20.4748 80.1473 16.3824 39.3272 14.7158'
                  stroke='#148CE3'
                  stroke-width='3'
                  stroke-linecap='round'
                />
              </svg>
            </div>

            <p className='mt-[30px] font-medium'>
              Samsung | Ex-CodeChef | Ex- ISRO | Gold Medalist - NIT Jalandhar |
              42k+ Subs on YT
            </p>
          </section>
          <section className='mt-3 flex gap-3 overflow-x-scroll'>
            <div className='min-w-[80px] h-[80px] bg-pink-200 rounded-lg' />
            <div className='min-w-[80px] h-[80px] bg-pink-200 rounded-lg' />
            <div className='min-w-[80px] h-[80px] bg-pink-200 rounded-lg' />
            <div className='min-w-[80px] h-[80px] bg-pink-200 rounded-lg' />
            <div className='min-w-[80px] h-[80px] bg-pink-200 rounded-lg' />
          </section>
        </div>
      </section>
      <section className='p-5 sm:p-[50px] min-h-screen lg:h-screen lg:overflow-y-scroll'>
        <p className='text-sm text-black/50'>
          AI generated based on Testimonials
        </p>
        <p className='text-base font-semibold'>
          Arsh is celebrated for facilitating a relaxing interview and offering
          a valuable learning session.
        </p>

        {/* Offerings */}
        <section className='mt-5'>
          <p className='text-sm text-black/50'>Meetings ans Sessions</p>
          <section className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2'>
            {offerings.map((data, index) => (
              <div key={index} className='p-5 rounded-lg bg-[#f3f4f6]'>
                <div className='size-[50px] flex justify-center items-center rounded-lg p-1 bg-gray-200'>
                  <data.icon className='text-[#000] text-[26px]' />
                </div>
                <p className='text-lg font-semibold mt-1'>{data.title}</p>
                <p className='text-sm'>{data.description}</p>

                <div className='w-full mt-2 flex items-center justify-between bg-gray-200 p-4 rounded-lg'>
                  <section className=''>
                    <p className='text-sm font-semibold'>{data.sessionType}</p>
                    <p className='text-sm'>
                      {data.duration.time} {data.duration.unit}
                    </p>
                  </section>
                  <section>
                    <Button
                      variant={'default'}
                      asChild
                      className={` px-4  py-3 bg-[#f26430] rounded-full text-white text-sm font-medium hover:bg-[#e23e14] duration-150`}
                    >
                      <Link href={`/new-session/${params.slug}/${data.slug}`}>
                        Book ({data.price.currency}
                        {data.price.amount})
                      </Link>
                    </Button>
                  </section>
                </div>
              </div>
            ))}
          </section>
        </section>

        {/* Ratings and Reviews */}
        <section className='mt-5'>
          <p className='text-sm text-black/50'>Ratings and Reviews</p>
          <section className='grid grid-cols-2 gap-3 mt-2'>
            <div className='w-full h-[80px] bg-gray-200 rounded-lg'> </div>
            <div className='w-full h-[80px] bg-gray-200 rounded-lg'> </div>
            <div className='w-full h-[80px] bg-gray-200 rounded-lg'> </div>
            <div className='w-full h-[80px] bg-gray-200 rounded-lg'> </div>
            <div className='w-full h-[80px] bg-gray-200 rounded-lg'> </div>
          </section>
        </section>

        {/* About */}
        <section className='mt-5'>
          <p className='text-sm text-black/50'>About</p>
          <section>
            <p>
              I currently work as a Senior Software Engineer at Samsung. I
              passed out of NIT Jalandhar in 2021- B.Tech - Gold Medalist -
              Electronics and Communications.
            </p>
            <p className='mt-2'>
              I{"'"}m a technology enthusiast and have my hands dirty on various
              technologies, aiming at building some technological and viable
              solutions to improve the quality of human life.
            </p>
            <p className='mt-2'>
              Apart from this, I love to participate in various competitions /
              contests / Hackathons and driven by various technologies.
            </p>
          </section>
          <section className='grid grid-cols-3 gap-3 mt-2'>
            <div className='w-full h-[80px] bg-gray-200 rounded-lg'> </div>
            <div className='w-full h-[80px] bg-gray-200 rounded-lg'> </div>
            <div className='w-full h-[80px] bg-gray-200 rounded-lg'> </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default BookSession;
