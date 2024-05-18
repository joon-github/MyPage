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
        { fileName: "StyledComponent.png", label: "Styled Component" },
        { fileName: "Tailwind.png", label: "Tailwind" },
        { fileName: "AntDesign.png", label: "AntDesign" },
        { fileName: "Recoil.png", label: "Recoil" },
        { fileName: "Redux.png", label: "Redux" },
        { fileName: "React-Queary.png", label: "React-Queary" },
      ],
    },
    {
      label: "BACKEND",
      items: [
        { fileName: "Node.png", label: "Node.js" },
        { fileName: "Nest.png", label: "Nest" },
        { fileName: "TypeOrm.png", label: "Type orm" },
        { fileName: "Mysql.png", label: "My sql" },
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
    <section className="flex flex-col h-full flex justify-center pb-[100px] px-10">
      <h3 className="text-2xl mb-10 text-blue-900">SKILLS</h3>
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
    </section>
  );
};

export default Skill;
