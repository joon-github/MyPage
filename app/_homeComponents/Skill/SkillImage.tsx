import React, { ReactNode } from "react";
import Image from "next/image";

type SkillImageProp = {
  fileName: string;
  label?: string | ReactNode;
};
const SkillImage = ({ fileName, label }: SkillImageProp) => {
  return (
    <div className="flex flex-col items-center gap-1 hover:scale-110 transition-all">
      <div className="flex items-center justify-center w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]">
        <Image
          className="w-18 h-18"
          src={`/image/${fileName}`}
          width={50}
          height={50}
          style={{ objectFit: "contain" }}
          alt="logo"
        />
      </div>
      <p className="text-xs text-center">{label}</p>
    </div>
  );
};

export default SkillImage;
