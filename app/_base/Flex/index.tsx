
import React, { ReactNode } from 'react';

/**
 * Flex Component의 자식요소의 방향을 결정하는 enum class.
 */

export enum Direction {
  /**
   * Row : 자식 요소를 행 방향으로 배열 합니다.
   * @type {Direction}
   */
  Row = "flex-row",
  /**
   * Column : 자식 요소를 열 방향으로 배열 합니다.
   * @type {Direction}
   */
  Column = "flex-col"
}

type FlexProp = {
  children: ReactNode,
  direction: Direction
};

/**
 * 이 컴포넌트는 페이지 내에서 헤더를 렌더링합니다.
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {Direction} direction - flex direction 을 설정합니다.
 */

const Flex = ( { children, direction } : FlexProp) => {
  return (
    <div id='Flex' className={`flex flex-1 ${direction} flex-wrap gap-8`}>
      {children}
    </div>
  );
};

export default Flex;