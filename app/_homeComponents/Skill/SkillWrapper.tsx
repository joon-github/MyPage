import React, { ReactNode } from 'react';

type SkillWrapperProps = {
  label: string,
  children: ReactNode
};

const SkillWrapper = ({ label, children }: SkillWrapperProps) => {
  return (
    <div 
      className='flex gap-1 flex-col'
    >
      <div className='flex items-center w-24'>
        <h3 className='text-sm font-bold'>{label}</h3>
      </div>
      <article className={`flex flex-1 justify-start w-full gap-6`}>
        {children}
      </article>
    </div>
  );
};

export default SkillWrapper;
