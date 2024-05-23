"use client";
import React from "react";
import styles from "@/app/main.module.scss";
// import Link from "next/link";
// import MSBENTER from '../project/[project_detail]/_projectDetailComponents/projects/MSBENTER';
const ProjectPage = () => {
  const onClickMoveProjectPage = (url: string) => {
    window.open(url, "_blank", "width=1000,height=1000");
  };
  return (
    <main className={`${styles.main}`}>
      <div className="flex flex-col items-center justify-center w-full sm:p-10 p-5">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h3 className="sm:text-xl text-lg">MSBENTER</h3>
              <div className="sm:text-base text-sm text-gray-500"> 2023.01 ~ now</div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="font-bold">프랜차이즈 관련 전문 솔루션 업체 입니다.</div>
            </div>
            <div>
              <button
                className="text-blue-900"
                onClick={() => {
                  onClickMoveProjectPage(
                    "https://docs.google.com/presentation/d/11rPXffPMqn0fuWhVExkqTbAk6GwOzd-iy-_4nyNKQxo/edit?usp=sharing"
                  );
                }}
              >
                상세보기
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <h3 className="sm:text-xl text-lg">QR ORDER</h3>
              <div className="sm:text-base text-sm text-gray-500"> 2022.10 ~ 2022.12</div>
            </div>
            <div className="flex gap-4">
              <div>소상공인을 위한 주문 솔루션</div>
            </div>
            <div>
              <button
                className="text-blue-900"
                onClick={() => {
                  onClickMoveProjectPage(
                    "https://docs.google.com/presentation/d/1j18-HXlPuQxU-czv46Iol3vOQexoqbMa0Vr0JopyZVE/edit?usp=sharing"
                  );
                }}
              >
                상세보기
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
