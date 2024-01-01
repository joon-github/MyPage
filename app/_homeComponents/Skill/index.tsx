
import React from 'react';
import SkillImage from './SkillImage';
import SkillWrapper from './SkillWrapper';
const Skill = () => {
  return (
    <div id='Skill' className='flex w-full px-2 py-2'>
      {/* <div className='flex flex-col gap-24'>
        <div className='test2'>LANGUAGE</div>
        <div className='test2'>FRAMEWOKR</div>
        <div className='test2'>STYLE</div>
        <div className='test2'>STATUS</div>
        <div className='test2'>VERSION</div>
      </div> */}
      <div className='flex flex-col justify-between gap-4'>
        <SkillWrapper label="언어">
          <SkillImage 
            fileName='JavaScript ES6.png'
            label="JavaScript"
          />
          <SkillImage 
            fileName='TypeScript.png'
            label='TypeScript'
          />
        </SkillWrapper>
        <SkillWrapper label="프레임워크">
          <SkillImage 
            fileName='React.png'
            label="React"
          />
          <SkillImage
            fileName='NextJs.svg'
            label="Next.js"
            />
        </SkillWrapper>
        <SkillWrapper label="스타일링">
          <SkillImage 
            fileName='CSS3.png'
            label="CSS3"
          />
          <SkillImage 
            fileName='StyledComponent.png'
            label="Styled Component"
          />
          <SkillImage 
            fileName='Tailwind.png'
            label="Tailwind"
          />
        </SkillWrapper>
        <SkillWrapper label="UI 라이브러리">
          <SkillImage 
            fileName='AntDesign.png'
            label="AntDesign"
          />
          <SkillImage 
            fileName='Bootstrap.png'
            label="Bootstrap"
          />
        </SkillWrapper>
        <SkillWrapper label="상태관리">
          <SkillImage 
            fileName='Recoil.png'
            label="Recoil"
          />
          <SkillImage 
            fileName='Redux.png'
            label="Redux"
          />
          <SkillImage 
            fileName='React-Queary.png'
            label="React-Queary"
          />
        </SkillWrapper>
        <SkillWrapper label="버전관리">
          <SkillImage 
            fileName='GitHub.png'
            label="GitHub"
          />
          <SkillImage 
            fileName='gitAction.png'
            label="Git Action"
          />
        </SkillWrapper>
      </div>
    </div>
  );
};

export default Skill;