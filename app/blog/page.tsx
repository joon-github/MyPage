import React from 'react';
import styles from '@/app/main.module.scss'
import blogStyles from '@/app/blog/blog.module.scss'
import Categorys from './_blogComponents/category/Categorys';
import Posts from './_blogComponents/post/Posts';
import AddCategory from './_blogComponents/AddCategory';

const BlogPage = async () => {
  return (
    <main className='h-full'>
      {/* <AddCategory /> */}
        {/* <section className={blogStyles.blog}> */}
          <Posts/>
        {/* </section> */}
    </main>
  );
};

export default BlogPage;