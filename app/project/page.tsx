"use client";
import React from "react";
import styles from "@/app/main.module.scss";
import Link from "next/link";
const ProjectPage = () => {
  const onClickMoveProjectPage = (url: string) => {
    window.open(url, "_blank", "width=1000,height=1000");
  };
  return (
    <main className={`${styles.main}`}>
      <div className="flex flex-col items-center justify-center w-full p-10">
        <h1 className="text-3xl mb-10 text-blue-900">PROJECTS</h1>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl">QR ORDER</h3>
          <div className="flex gap-2">
            <div className="font-bold">프로젝트 소개 : </div>
            <div className="flex flex-col gap-1">
              <div>소상공인을 위한 주문 솔루션 입니다.</div>
              <div>
                고객은 QR 하나로 자신의 핸드폰으로 키오스크를 대채 할 수 있으며
                ,
              </div>
              <div>
                점주는 실시간 주문 확인과 전자 메뉴판을 직접 생성 및 관리 할 수
                있습니다.
              </div>
            </div>
          </div>
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
    </main>
  );
};

export default ProjectPage;
