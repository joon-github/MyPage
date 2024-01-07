'use client'
import React, { useEffect, useState } from 'react';
import { baseUrl } from '@/app/utils/baseUrl';
import blogStyles from '@/app/blog/blog.module.scss'
import Post from './Post';
import { useRecoilValue } from 'recoil';
import { selectedCategoryIdState } from '@/app/store/globalState';

export type PostType = {
  post_id?: number,
  category_id: number,
  title:string;
  contents:string;
  create_at:string
}


const Posts = () => {
  const selectedCategoryId = useRecoilValue(selectedCategoryIdState)
  const [postsData, setPostsData] = useState<PostType[]>([])

  useEffect(()=>{
    const getData = async () =>{
      const config = {
        headers: {
          "Accept":"application/json"
        },
        next: { revalidate: 5 },
      }
      const categoryData = await fetch(`${baseUrl}/api/blog/post/${selectedCategoryId}`, config);
      const { result: { rows: posts } } = await categoryData.json()
      setPostsData(posts)
    }
    if(selectedCategoryId){
      getData();
    }
  },[selectedCategoryId])

  return (
    <div className={blogStyles.postsWrapper}>
      {postsData.map((post: PostType) => {
        return (
          <Post
            key={post.post_id}
            // data={post}
          />
        )
      })}
    </div>
  );
};

export default Posts;