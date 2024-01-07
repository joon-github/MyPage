import React from 'react';
import styles from '@/app/main.module.scss'
import blogStyles from '@/app/blog/blog.module.scss'
import Categorys from './_blogComponents/category/Categorys';
import Posts from './_blogComponents/post/Posts';

const BlogPage = async () => {
  return (
    <main className={`${styles.main}`}>
      <div className='flex flex-col w-full h-full'>
        <section className={blogStyles.banner}>
          <article>
            머리를 믿지 말고 손을 믿자
          </article>
        </section>
        <section className={blogStyles.blog}>
          <Categorys />
          <Posts/>
        </section>
      </div>
    </main>
  );
};

export default BlogPage;