import React, { ReactNode } from 'react';

type SkillWrapperProps = {
  label: string,
  children: ReactNode
};

const SkillWrapper = ({ label, children }: SkillWrapperProps) => {
  return (
    <div className='flex gap-4'>
      <div className='flex items-center w-28'>
        <h3 className='font-bold'>{label}</h3>
      </div>
      <article className={`flex flex-1 justify-start w-full gap-8`}>
        {children}
      </article>
    </div>
  );
};

export default SkillWrapper;
