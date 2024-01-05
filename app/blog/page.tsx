import React from 'react';
import styles from '@/app/main.module.scss'
import blogStyles from '@/app/blog/blog.module.scss'
import Categorys from './_blogComponents/Categorys';

const BlogPage = async () => {
  return (
    <main className={`${styles.main}`}>
      <div className='flex flex-col w-full h-full'>
        <div>안녕하세요</div>
        <div className={blogStyles.blog}>
          <Categorys/>
          <div className={blogStyles.postsWrapper}>
  d
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;