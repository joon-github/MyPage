import React from 'react';
import styles from '@/app/main.module.scss'
import { baseUrl } from '../utils/baseUrl';



type CategorysType = {
  category_id : number,
  category_name: string,
}

const BlogPage = async () => {
  const categoryData = await fetch(`${baseUrl}/api/blog/category`,{ 
    next: { revalidate: 0 },
   });
  const {result:{rows:categorys}} = await categoryData.json()
  
  console.log('next',categorys)
  // const categoryData2 = await fetch(`${baseUrl}/api/blog/category`,{ 
  //   cache: 'no-store',
  //  });
  // const {result:{rows:categorys2}} = await categoryData2.json()
  // console.log('ser',categorys2)
  return (
    <main className={`${styles.main}`}>
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