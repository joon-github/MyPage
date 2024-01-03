'use client'
import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Card, { Size } from '@/app/_base/Crad';

const CompanyProjects = () => {
  const pathName = usePathname();
  return (
    <div className='flex flex-col w-full h-full items-center gap-6'>
      <Card size={Size.half}>
        <Link
          href={`${pathName}/msbenter`}
          className='flex flex-col items-center p-4 gap-2 w-full h-full cursor-pointer'
        >
          <h2>MSBENTER</h2>
          <div>2023.01.02 ~ ing</div>
          <div className='flex gap-2'>
            <h3>주 업무 - </h3>
            <p>프랜차이즈 ERP 개발</p>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default CompanyProjects;