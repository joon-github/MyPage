import React, {ReactNode} from 'react';

/**
 * Section Component의 width를 결정하는 enum class.
 */
export enum Width {
  /**
   * full : width : 100%.
   * @type {Direction}
   */
  full = "w-full",
  /**
   * full : width : 50%.
   * @type {Direction}
   */
  half = "w-6/12",
  /**
   * full : width : 33.33%.
   * @type {Direction}
   */
  oneThird = "w-4/12"
}

type SectionProps = {
  title:string,
  children: ReactNode,
  width:Width,
}

/**
 * 이 컴포넌트는 페이지 내에서 헤더를 렌더링합니다.
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} title - section의 title을 지정합니다.
 * @param {Width} width - Section Component의 width를 설정합니다.
 */

const Section = ({title,children,width}:SectionProps) => {
  return (
    <section className={`${width}`} >
      <div className='flex flex-col justify-center'>
        <div className='min-w-max w-6/12'>
          <h2 className='font-bold text-3xl mb-2'>{title}</h2>
          <div style={{borderBottom:"1px solid black",width:"100%"}}></div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;