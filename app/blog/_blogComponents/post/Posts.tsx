import React from 'react';
import { baseUrl } from '@/app/utils/baseUrl';
import blogStyles from '@/app/blog/blog.module.scss'
import Post from './Post';

export type PostType = {
  post_id?: number,
  category_id: number,
  title:string;
  contents:string;
  create_at:string
}


const Posts = async () => {
  const config = {
    headers: {
      "Accept":"application/json"
    },
    next: { revalidate: 5 },
  }
  const categoryData = await fetch(`${baseUrl}/api/blog/post`, config);
  const { result: { rows: posts } } = await categoryData.json()
  return (
    <div className={blogStyles.postsWrapper}>
      {posts.map((post: PostType) => {
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