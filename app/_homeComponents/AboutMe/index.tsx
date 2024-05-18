import React from "react";
import Typing from "@/app/_base/Typing";
const AboutMe = () => {
  const documents = [
    "안녕하세요. 풀스택 개발자 편범준 입니다.",
    "사용자 친화적인 개발과 효율적으로 코드를 작성하는것을 좋아합니다.",
  ];
  return (
    <section className="flex flex-col justify-center items-between h-screen p-10 gap-10">
      <div className="flex flex-col gap-4">
        <p className="text-3xl">PYEON BEOM JOON</p>
        <div className="flex gap-4">
          <p>#FULL STACK</p>
          <p>#TYPE SCRIPT</p>
          <p>#NEXT</p>
          <p>#REACT</p>
          <p>#EXPRSS</p>
          <p>#NEST</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="min-h-[40px]">
          <Typing documents={documents} />
        </div>
        <p>
          저는 타입스크립트 풀스택 개발자입니다. 전반적인 웹에 대한 개념에 대한
          이해 있으며, 사용자 중심 디자인 사고와 접근성을 고려한 웹 서비스
          개발에 힘쓰고 있습니다.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
