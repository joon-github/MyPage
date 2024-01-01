import React from 'react';
import Section, { Width } from '../_base/Section';

const Career = () => {
  return (
    <>
     <Section title='WORK EXPERIENCE' width={Width.full}>
      <article className='flex gap-4 px-2 py-2'>
        <div className='flex gap-4'>
          <div className='flex flex-col items-center justify-center'>
            <div>┌</div>
            <div className='flex-1 border-r-2 border-gray-400 py-1'/>
            <div>└</div>
          </div>
          <div className='flex flex-col h-full items-center justify-between py-1'>
            <div className='text-lg font-bold w-full '>2023/01/02</div>
              <div className='flex flex-col'>
                <div className='flex flex-col py-4 gap-2'>
                  <div className='flex gap-2'>
                    <h3 className='text-base font-bold '>COMPANY - </h3>
                    <p className=''>MSBENTER (주)</p>
                  </div>
                  <div className='flex gap-2'>
                    <h3 className='text-base font-bold '>POSITION - </h3>
                    <p className=''>FRONT END</p>
                  </div>
                  <div className='flex gap-2'>
                    <h3 className='text-base font-bold '>개발 프로젝트 - </h3>
                    <p className=''>프렌차이즈 ERP</p>
                  </div>
                </div>
              </div>
            <div className='text-lg font-bold w-full '>~ ing</div>
          </div>
        </div>
            {/* <div>프로젝트 자세히 보기 ...</div> */}
      </article>
     </Section>
    </>
  );
};

export default Career;
{/* <div className='flex flex-col gap-2'>
  <h3 className='font-bold'>[ Problem & Solves ]</h3>
  <strong>🔥 Problem</strong>
  <p>
    페이지마다 화면의 미묘한 차이로 인해 각 페이지마다 유사하면서 <p>중복된 코드</b>가 계속해서 작성되었습니다. 이는 코드의 가독성과 유지보수성을 저해하며, 새로운 페이지를 추가하거나 수정할 때 많은 시간과 노력이 소요되는 문제를 초래했습니다. 중복 코드로 인한 복잡성이 증가하여 코드 베이스의 효율성이 저하되고 있었습니다.
  </p>
  <strong>💧 Solves</strong>
  <p><b>Composition Component (합성 컴포넌트) 디자인 패턴을 도입</b>하여 문제를 해결했습니다. 각 페이지의 미묘한 차이를 동적으로 처리할 수 있는 컴포넌트를 만들고, 이를 조합하여 페이지를 구성하도록 설계했습니다. 이로써 중복 코드를 최소화하고 유연성 있는 구조를 확립했습니다.
      각 컴포넌트는 독립적으로 작동하며, 필요한 경우 새로운 컴포넌트를 추가하거나 수정할 수 있습니다. 이로써 코드의 가독성이 향상되었고, 유지보수가 쉬워졌습니다.
  </p>
  <strong>⭐️ Result</strong>
  <p>이러한 변경으로 인해 <b>기존 코드양은 60% 감소하였습니다.</b> 또한, 새로운 페이지를 추가하거나 기존 페이지를 수정하는 데 필요한 시간과 노력이 크게 감소했습니다. 코드의 일관성이 유지되면서 중복된 작업을 최소화함으로써 개발 생산성이 향상되었습니다. Composition Component 패턴의 적용은 코드의 품질을 향상시키고 유지보수성을 강화하는데 기여하였습니다.</p>
</div>
<div>
  <h3>연차관리</h3>
  <div>
    <div>설명</div>
    <ul>
      <li>
      기존에는 excel과 서류로 수행되던 연차관리를 효율적으로 관리하기 위해 개발된 모듈입니다.
      </li>
      <li>
      시스템은 사용자 친화적인 UI를 제공하여 직원들이 손쉽게 연차 신청, 조회, 및 관리를 할 수 있도록 합니다. 
      </li>
    </ul>
  </div>
</div> */}