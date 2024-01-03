import Card from '@/app/_base/Crad';
import React, { ReactNode } from 'react';
import style from './project.module.scss'
interface ContainerProps {
  children: ReactNode;
  title: string;
}

const Container = ({ children,title }: ContainerProps) => {
  return (
    <Card>
      <div className={`${style.container}`}>
        <div className='line'/>
        <article className='flex flex-col gap-4 w-full h-full p-2 rounded-lg '>
          <h3 className='font-bold underline'>
            {title}
          </h3>
          {children}
        </article>
      </div>
    </Card>
  );
};

export default Container;
