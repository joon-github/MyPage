import React from 'react';
import { Proejct } from '../Project'
const MSBENTER = () => {
  return (
    <div className='flex flex-col items-center w-full h-full'>
      <div className='flex items-center gap-4'>
        <h2>MSBENTER</h2>
        <div>2023.01.02 ~ ing</div>
      </div>
      <div className='flex justify-center w-full flex-wrap gap-4 p-4'>
        <Proejct title="연차관리">
          <Proejct.Contents subTitle='설명'>
            <p>기존에는 excel과 서류로 수행되던 연차관리를 관리하기 위해 개발된 모듈입니다.</p>
            <p>시스템은 사용자 친화적인 UI를 제공하여 직원들이 손쉽게 연차 신청, 조회, 및 관리를 할 수 있도록 합니다.</p>
          </Proejct.Contents>
          <Proejct.Contents subTitle='구현 기능'>
            <p>자동 연/월차 등록</p>
            <p>연차 신청 및 관리 프로세스의 자동화</p>
            <p>캘린더를 활용한 연차 사용을 시각적 표현</p>
          </Proejct.Contents>
        </Proejct>
        <Proejct title="문서 결재 시스템">
          <Proejct.Contents subTitle='설명'>
            <p>결재 시스템은 업무 프로세스를 효율적으로 관리하기 위해 개발된 모듈입니다.</p>
            <p>다양한 신청서 타입을 지원하여 연차, 지출결의서 등 다양한 종류의 신청서를 효과적으로 처리할 수 있습니다.</p>
          </Proejct.Contents>
          <Proejct.Contents subTitle='구현 기능'>
            <p>직렬 결재 프로세스</p>
            <p>결재 이력 추적 및 카카오톡 알람 발송</p>
          </Proejct.Contents>
        </Proejct>
        <Proejct title="상품권 관리">
          <Proejct.Contents subTitle='설명'>
            <p>상품권 관리 시스템은 간편하고 효율적인 상품권 발행 및 관리를 목적으로 개발된 모듈입니다.</p>
          </Proejct.Contents>
          <Proejct.Contents subTitle='구현 기능'>
            <p>상품권 발행 - 배포 - 회수 프로세스</p>
            <p>번호 입력 및 QR 스캔을 활용한 상품권 회수 및 등록</p>
          </Proejct.Contents>
        </Proejct>
        <Proejct title="무역 관리">
          <Proejct.Contents subTitle='설명'>
            <p>무역 관리 시스템은 수입된 계약건의 종합적인 정보 조회 및 관리를 지원하여 원활한 국제무역 업무 모듈 입니다.</p>
          </Proejct.Contents>
          <Proejct.Contents subTitle='구현 기능'>
            <p>품목 예상 원가 계산</p>
            <p>판매관리 등록을 통해 재고 현황 업데이트</p>
            <p>계약건에 문서에 다양한 파일을 등록 및 다운로드</p>
            <p>진행 상태 모니터링 화면을 통해 무역 거래의 진행 상태를 시각적 구현</p>
          </Proejct.Contents>
        </Proejct>
        <Proejct title="1:1 문의">
          <Proejct.Contents subTitle='설명'>
            <p>본 모듈은 진행상황 추적, 답변 등록, 실시간 알림, 상세 내역 등의 기능을 갖춘 종합적인 1:1 문의 관리 시스템입니다.</p>
          </Proejct.Contents>
          <Proejct.Contents subTitle='구현 기능'>
            <p>에디터를 사용하여 이미지, 글꼴 크기 조정, 색상 사용자 정의 등과 같은 기능으로 내용 편집</p>
            <p>날짜 별 질문 사항 히스토리 시각적 구현</p>
          </Proejct.Contents>
        </Proejct>
        <Proejct title="도움말 관리">
          <Proejct.Contents subTitle='설명'>
            <p>이 모듈은 다음 기능을 통해 원활한 프로그램 도움말 관리를 용이하게 합니다.</p>
          </Proejct.Contents>
          <Proejct.Contents subTitle='구현 기능'>
            <p>관리자는 카테고리는 확장 가능한 트리 구조로 구성되어 계층적 관리 및 지속적인 확장이 가능합니다.</p>
            <p>에디터를 사용하여 이미지, 글꼴 크기 조정, 색상 사용자 정의 등과 같은 기능으로 내용 편집</p>
            <p>완전 탐색을 통해 검색하여 검색어가 포함된 노드 표시</p>
          </Proejct.Contents>
        </Proejct>
      </div>
    </div>
  );
};

export default MSBENTER;