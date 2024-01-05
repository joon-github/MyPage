import React from 'react';
import styles from '@/app/main.module.scss'
import { baseUrl } from '../utils/baseUrl';
import Category from './_blogComponents/Category';
import blogStyles from '@/app/blog/blog.module.scss'


type CategorysType = {
  category_id: number,
  category_name: string,
}

const BlogPage = async () => {
  const categoryData = await fetch(`${baseUrl}/api/blog/category`, {
    next: { revalidate: 10 },
  });
  const { result: { rows: categorys } } = await categoryData.json()

  console.log('next', categorys)

  return (
    <main className={`${styles.main}`}>
      <div className={blogStyles.categoryWrapper}>
        {categorys.map(({ category_id, category_name }: CategorysType) => {
          return (
            <Category
              key={category_id}
              category_name={category_name}
            />
          )
        })}
      </div>
    </main>
  );
};

export default BlogPage;