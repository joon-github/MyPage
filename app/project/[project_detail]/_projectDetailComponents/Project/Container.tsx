import Card, { Size } from '@/app/_base/Crad';
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  title: string;
}

const Container = ({ children,title }: ContainerProps) => {
  return (
    <Card size='w-96' width={600}>
      <div className='line'/>
      <article className='flex flex-col gap-4 w-full h-full p-2 rounded-lg '>
        <h3 className='font-bold underline'>
          {title}
        </h3>
        {children}
      </article>
    </Card>
  );
};

export default Container;
