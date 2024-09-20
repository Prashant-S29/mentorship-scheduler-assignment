import { MentorCard } from '@/components/common/MentorCard';
import { CursorCommentText } from '@/components/custom';
import { Button, Input } from '@/components/ui';
import { dummyMentorsData } from '@/constants';
import React from 'react';
import Marquee from 'react-fast-marquee';

const NewSession: React.FC = () => {
  return (
    <div>
      <div className='bg-[#f7f9fb] w-full px-5 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[150px]  py-[50px] lg:flex gap-[50px]'>
        <section className='w-full lg:w-[50%] h-full'>
          <span className=' text-xl sm:text-2xl font-bold  leading-tight'>
            <span className='text-[#f26430]'>Level Up Your Career:&nbsp;</span>
            Get a mentorship session and clear your doubts
          </span>

          <p className='mt-3 text-base sm:text-lg leading-tight text-[#020817]'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
            tenetur harum earum suscipit necessitatibus sapiente alias facilis
            blanditiis aperiam in eius architecto, dolorum atque commodi itaque
            deserunt, qui culpa beatae.
          </p>
          <Button
            variant={'default'}
            className={` px-6  py-6 bg-[#f26430] rounded-full mt-4 text-white text-sm font-medium hover:bg-[#e23e14] duration-150`}
          >
            Request a Mentor
          </Button>
          <div className='block max-[450px]:hidden lg:hidden w-full py-5'>
            <Marquee
              className='w-full block'
              autoFill
              gradient
              gradientWidth={80}
              speed={30}
            >
              <div className='w-[150px] h-[180px] bg-pink-300 mx-1   rounded-lg' />
              <div className='w-[150px] h-[180px] bg-pink-300 mx-1   rounded-lg' />
              <div className='w-[150px] h-[180px] bg-pink-300 mx-1   rounded-lg' />
              <div className='w-[150px] h-[180px] bg-pink-300 mx-1   rounded-lg' />
              <div className='w-[150px] h-[180px] bg-pink-300 mx-1   rounded-lg' />
              <div className='w-[150px] h-[180px] bg-pink-300 mx-1   rounded-lg' />
              <div className='w-[150px] h-[180px] bg-pink-300 mx-1   rounded-lg' />
              <div className='w-[150px] h-[180px] bg-pink-300 mx-1   rounded-lg' />
            </Marquee>
          </div>
        </section>
        <div className='w-full lg:w-[50%] min-w-fit mt-8 lg:mt-0  lg:flex h-full gap-5'>
          <div className='hidden lg:block'>
            <CursorCommentText
              text='Trusted by 10k+ mentors'
              cursorPosition='bottom-right'
            />
          </div>
          <div className='hidden lg:grid grid-cols-3 gap-2'>
            <div className='size-[70px] bg-pink-300 rounded-lg' />
            <div className='size-[70px] bg-pink-300 rounded-lg' />
            <div className='size-[70px] bg-pink-300 rounded-lg' />
            <div className='size-[70px] bg-pink-300 rounded-lg' />
            <div className='size-[70px] bg-pink-300 rounded-lg' />
          </div>
          <div className=' lg:hidden mt-1 flex justify-end'>
            <CursorCommentText
              text='Trusted by 10k+ mentors'
              cursorPosition='top-left'
            />
          </div>
        </div>
      </div>
      <div className='px-5 sm:px-[40px] md:px-[80px] lg:px-[100px] xl:px-[150px] py-[50px]'>
        <section>
          {dummyMentorsData.map((data, index) => (
            <div key={index} className='mt-8 first:mt-0'>
              <div className='flex justify-between items-center'>
                <p className='text-xl sm:text-2xl font-bold'>{data.category}</p>
                <div>
                  <p className='text-sm font-medium text-blue-600 underline'>view all</p>
                </div>
              </div>
              <div className='mt-4 flex overflow-x-scroll w-full gap-5'>
                {data.mentor.map((mentor, index) => (
                  <MentorCard data={mentor} key={index} />
                ))}
              </div>
            </div>
          ))}
        </section>
        <section className='rounded-[30px] p-8 max-[500px]:bg-white max-[500px]:p-0 bg-[#f7f9fb] mt-[50px]'>
          <p className='text-xl font-semibold  leading-tight'>
            <span className='text-[#f26430]'>
              Can{"'"}t find your mentor?&nbsp;
            </span>
            Request a mentorship session from your desired mentor.
          </p>
          <p className='text-base mt-1'>
            We will try our best to arrange a session for you. Please provide
            the following details to help up to the best of our abilities.
          </p>
          <section className='mt-3 md:flex gap-3'>
            <Input
              placeholder='Mentor Name'
              className='w-full px-7 py-6 rounded-full outline-none text-sm border'
            ></Input>
            <Input
              placeholder='Any Social Handle of your mentor'
              className='w-full px-7 py-6 mt-2 md:mt-0 rounded-full outline-none text-sm border'
            ></Input>
            <Input
              placeholder='Your Email'
              className='w-full px-7 py-6 mt-2 md:mt-0 rounded-full outline-none text-sm border'
            ></Input>
          </section>

          <Button
            variant={'default'}
            className={` px-6 w-full md:w-fit  py-6 bg-[#f26430] rounded-full mt-3 text-white text-sm font-medium hover:bg-[#e23e14] duration-150`}
          >
            Submit Request
          </Button>
        </section>
      </div>
    </div>
  );
};

export default NewSession;
