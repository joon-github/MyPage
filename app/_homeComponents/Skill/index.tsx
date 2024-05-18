import React from "react";
import SkillImage from "./SkillImage";
import SkillWrapper from "./SkillWrapper";
const Skill = () => {
  const skills = [
    {
      label: "LANGUAGE",
      items: [
        { fileName: "JavaScript ES6.png", label: "JavaScript" },
        { fileName: "TypeScript.png", label: "TypeScript" },
      ],
    },
    {
      label: "FRONTEND",
      items: [
        { fileName: "React.png", label: "React" },
        { fileName: "NextJs.svg", label: "Next.js" },
        { fileName: "CSS3.png", label: "CSS3" },
        { fileName: "StyledComponent.png", label: "Styled Component" },
        { fileName: "Tailwind.png", label: "Tailwind" },
        { fileName: "AntDesign.png", label: "AntDesign" },
        { fileName: "Bootstrap.png", label: "Bootstrap" },
        { fileName: "Recoil.png", label: "Recoil" },
        { fileName: "Redux.png", label: "Redux" },
        { fileName: "React-Queary.png", label: "React-Queary" },
      ],
    },

    {
      label: "버전관리",
      items: [
        { fileName: "GitHub.png", label: "GitHub" },
        { fileName: "gitAction.png", label: "Git Action" },
      ],
    },
  ];
  return (
    <div className="h-full flex items-center">
      <div className="flex flex-col justify-between gap-8">
        {skills.map(({ label, items }, index) => {
          return (
            <SkillWrapper key={index} label={label}>
              {items.map(({ fileName, label }, index) => {
                return (
                  <SkillImage key={index} fileName={fileName} label={label} />
                );
              })}
            </SkillWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
