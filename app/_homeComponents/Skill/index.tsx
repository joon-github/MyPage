
import React from 'react';
import SkillImage from './SkillImage';
import SkillWrapper from './SkillWrapper';
import Section, { Width } from '@/app/_base/Section';
const Skill = () => {
  const skills = [
    {
      label: "언어",
      items: [
        { fileName: 'JavaScript ES6.png', label: "JavaScript" },
        { fileName: 'TypeScript.png', label: 'TypeScript' },
      ]
    },
    {
      label: "프레임워크",
      items: [
        { fileName: 'React.png', label: "React" },
        { fileName: 'NextJs.svg', label: "Next.js" },
      ]
    },
    {
      label: "스타일링",
      items: [
        { fileName: 'CSS3.png', label: "CSS3" },
        { fileName: 'StyledComponent.png', label: "Styled Component" },
        { fileName: 'Tailwind.png', label: "Tailwind" },
      ]
    },
    {
      label: "UI 라이브러리",
      items: [
        { fileName: 'AntDesign.png', label: "AntDesign" },
        { fileName: 'Bootstrap.png', label: "Bootstrap" },
      ]
    },
    {
      label: "상태관리",
      items: [
        { fileName: 'Recoil.png', label: "Recoil" },
        { fileName: 'Redux.png', label: "Redux" },
        { fileName: 'React-Queary.png', label: "React-Queary" },
      ]
    },
    {
      label: "버전관리",
      items: [
        { fileName: 'GitHub.png', label: "GitHub" },
        { fileName: 'gitAction.png', label: "Git Action" },
      ]
    },
  ];
  return (
    <>
    <Section title='SKILLS' width={Width.full}>
      <div id='Skill' className='flex w-full px-2 py-2'>
        <div className='flex flex-col justify-between gap-4'>
          {skills.map(({label,items},index) => {
            return (
            <SkillWrapper key={index} label={label}>
              {items.map(({fileName,label},index) =>{
                return(
                  <SkillImage
                    key={index}
                    fileName={fileName}
                    label={label}
                  />
                )
              })}
            </SkillWrapper>)
          })}
        </div>
      </div>
    </Section>
    </>
  );
};

export default Skill;