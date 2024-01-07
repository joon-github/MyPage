import React from 'react';
import styles from '@/app/main.module.scss'
import blogStyles from '@/app/blog/blog.module.scss'
import Categorys from './_blogComponents/category/Categorys';
import Posts from './_blogComponents/post/Posts';
import AddCategory from './_blogComponents/AddCategory';

const BlogPage = async () => {
  return (
    <main className={`${styles.main}`}>
      <AddCategory />
      <div className='flex flex-col w-full h-full'>
        <section className={blogStyles.blog}>
          <Categorys />
          <Posts/>
        </section>
      </div>
    </main>
  );
};

export default BlogPage;