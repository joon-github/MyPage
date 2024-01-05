import React from 'react';
import styles from '@/app/blog/blog.module.scss'
import Image from 'next/image';
const Category = ({ category_name }: { category_name: string }) => {
  return (
    <div className={styles.category}>
      <div className='flex justify-center'>
        <Image
          src="/image/JavaScript ES6.png"
          alt="Picture of the author"
          width={100}
          height={100}
        />
      </div>
      <div className='flex justify-center'>
        <h3>{category_name}</h3>
        <div>게시물 0개</div>
      </div>
    </div>
  );
};

export default Category;