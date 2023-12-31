import React from 'react';
import Image from 'next/image';



type SkillImageProp = {
  fileName : string,
  label?:string
}
const SkillImage = ({ fileName,label }:SkillImageProp) => {
  return (
    <div className='flex flex-col items-center gap-1 hover:scale-110 transition-all'>
      <Image
        className='w-16 h-16'
        src={`/image/${fileName}`}
        height={64}
        width={64}
        alt='logo'
      />
      <p>{label}</p>
    </div>
  );
};

export default SkillImage;