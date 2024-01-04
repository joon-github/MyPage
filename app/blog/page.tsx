import React from 'react';
import styles from '@/app/main.module.scss'
import { baseUrl } from '../utils/baseUrl';
import Test from './Test';



type CategorysType = {
  category_id : number,
  category_name: string,
}

const BlogPage = async () => {
  const categoryData = await fetch(`${baseUrl}/api/blog/category`,{ 
    next: { revalidate: 10 },
   });
  const {result:{rows:categorys}} = await categoryData.json()
  
  console.log('next',categorys)

  return (
    <main className={`${styles.main}`}>
      <Test/>
      <div>
        {categorys.map(({category_id,category_name}:CategorysType)=>{
          return(
            <div key={category_id}>{category_name}</div>
          )
        })}
      </div>
    </main>
  );
};

export default BlogPage;