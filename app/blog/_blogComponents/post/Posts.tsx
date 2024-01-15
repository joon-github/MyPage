import React from 'react';
import { baseUrl } from '@/app/utils/baseUrl';
import blogStyles from '@/app/blog/blog.module.scss'
import Post from './Post';

export type PostType = {
  post_id: number,
  category_id: number,
  title: string;
  sub_title: string;
  contents: string;
  create_at: string
}


const Posts = async () => {
  const postsData = await fetch(`${baseUrl}/api/blog/post`, {cache: "no-store"});
  if (postsData.status !== 200) throw new Error("Failed to fetch data");
  const {rows:posts} = await postsData.json();
  const newData: any = {};
  posts?.forEach((data: PostType) => {
    const year = data.create_at.slice(0,4);
    if (newData[year]) {
      newData[year].push(data);
    } else {
      newData[year] = [data];
    }
  })
  return (
    <div className={blogStyles.postsWrapper}>
      {/* {Object.keys(newData).map((key: string) => {
        const data: PostType[] = newData[key];
        return (
          <Post
            key={key}
            data={data}
            year={key}
          />
        )
      })} */}
    </div>
  );
};

export default Posts;