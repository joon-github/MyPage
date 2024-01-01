import React from 'react';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className='p-8'>
      <Image
        className='w-72'
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