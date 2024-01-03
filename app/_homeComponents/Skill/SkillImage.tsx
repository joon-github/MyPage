import React, {ReactNode} from 'react';
import Image from 'next/image';

type SkillImageProp = {
  fileName : string,
  label?:string | ReactNode
}
const SkillImage = ({ fileName,label }:SkillImageProp) => {
  return (
    <div 
      className='flex flex-col items-center gap-1 hover:scale-110 transition-all'
    >
      <Image
        className='w-18 h-18'
        src={`/image/${fileName}`}
        height={50}
        width={50}
        alt='logo'
      />
      <p className='text-xs text-center'>{label}</p>
    </div>
  );
};

export default SkillImage;