import { Mentor } from '@/types';
import Link from 'next/link';
import React from 'react';

export const MentorCard: React.FC<{ data: Mentor }> = ({ data }) => {
  return (
    <div>
      <Link href={`/new-session/${data.slug}`}>
        <div className='w-[220px] h-[300px]  box-border bg-cover overflow-hidden  p-2 border border-slate-200 hover:border-[#f26430] duration-150 rounded-[10px] relative'>
          <div className='w-full h-[200px] bg-gray-200 rounded-[5px]'></div>
          <section className='p-2'>
            <p className='font-semibold'>{data.name}</p>
            <p className='text-xs line-clamp-2 text-black/70'>{data.bio}</p>
          </section>
        </div>
      </Link>
    </div>
  );
};
