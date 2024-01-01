import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='p-14'>
      <Image
        className='w-full'
        src={`/image/profile.png`}
        height={400}
        width={200}
        alt='logo'
      />
      <div>자기소개</div>
    </div>
  );
};

export default AboutMe;