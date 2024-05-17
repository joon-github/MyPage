import React from "react";
import Section, { Width } from "@/app/_base/Section";
import CareerWraaper from "./Wraaper";
const Career = () => {
  return (
    <>
      <Section
        title="WORK EXPERIENCE"
        width={Width.full}
        flex={1}
        min={400}
      >
        <article className="flex gap-4 px-2 py-2">
          <div className="flex gap-4 pb-12">
            <CareerWraaper>
              <div className="flex flex-col h-full items-center justify-between py-1">
                <div className="text-lg font-bold w-full ">2023/01/02</div>
                <div className="flex flex-col">
                  <div className="flex flex-col py-4 gap-2">
                    <div className="flex gap-2">
                      <h3 className="text-base font-bold ">MSBENTER (주)</h3>
                    </div>
                    <div className="flex gap-2">
                      <p className="">FRONT END - </p>
                      <p className="">프렌차이즈 ERP 개발</p>
                    </div>
                  </div>
                </div>
                <div className="text-lg font-bold w-full">~ ing</div>
              </div>
            </CareerWraaper>
          </div>
          {/* <div>프로젝트 자세히 보기 ...</div> */}
        </article>
      </Section>
    </>
  );
};

export default Career;
