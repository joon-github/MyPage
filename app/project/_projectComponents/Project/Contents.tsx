import React, { ReactNode } from 'react';
import styles from './project.module.scss'
const Contents = ({children, subTitle}:{children:ReactNode, subTitle:string}) => {
  return (
    <li className={`flex flex-col gap-2 ${styles.contents}`}>
      <strong>{subTitle}</strong>
      <div className='flex flex-col gap-4'>
        {children}
      </div>
    </li>
  );
};

export default Contents;