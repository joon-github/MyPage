import React from 'react';
import Image from 'next/image';
import Section, { Width } from '@/app/_base/Section';

const AboutMe = () => {
  const icons = [
    { icon: 'User.png', text: '1994 / 12 / 09' },
    { icon: 'Phone.png', text: '010-3453-7506' },
    { icon: 'Spot.png', text: '인천광영시 서구 검암동' },
    { icon: 'Cap.png', text: '계산공업고등학교 졸업' },
    { icon: 'Cap.png', text: '코드스테이츠' },
  ]
  return (
    <div id='AboutMe' className='border-r border-gray-300 w-4/12'>
      <Section width={Width.full}>
        <article className='flex flex-col h-full'>
          <div className='bg-gray-800'>
            <p className='text-2xl text-center text-white'>PYEON BEOM JOON</p>
            <Image
              className='w-full'
              src={`/image/profile.png`}
              height={220}
              width={200}
              alt='logo'
              priority
            />
          </div>
          <div className='flex flex-col bg-black flex-1 p-4 gap-4'>
            <div>
              <h3 className='text-white mb-4'>ABOUT ME</h3>
              <div className='flex flex-col gap-1'>
                <p className='subText'>안녕하세요!</p>
                <p className='subText'>프론트엔드 개발자 편범준입니다.</p>
                <p className='subText leading-6'>사용자 친화적인 개발과 기술의 작동 원리에 관심을 가지고 일하는 것을 가장 중요하게 생각하고 있습니다. </p>
              </div>
            </div>
            <div>
              <h3 className='text-white mb-4'>INFO</h3>
              <div className='flex flex-col gap-4'>
              {icons.map((item, index) => (
                <div className='flex' key={index}>
                  <div className='w-7'>
                    <Image src={`/icons/${item.icon}`} height={12} width={item.icon === 'Cap.png' ? 20 : 15} alt='icon' priority />
                  </div>
                  <p className='subText'>{item.text}</p>
                </div>
              ))}
              </div>
            </div>
          </div>
        </article>
      </Section>
    </div>
  );
};

export default AboutMe;