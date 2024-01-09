'use client'
import React from 'react';
import { PostType } from './Posts';
import blogStyles from '@/app/blog/blog.module.scss'
import { useRouter } from 'next/navigation'
interface PostPropsType {
  data: PostType[];
  year: string;
}

const Post = ({ data, year }: PostPropsType) => {
  const router = useRouter()
  const onClickPost = (id:string) => {
    router.push(`/blog/${id}`)
  }
  return (
    <article className={blogStyles.postList}>
      <h3>{year}</h3>
      {data.map((post: PostType) => {
        return (
          <div key={post.post_id} className={blogStyles.postDataWrapper} onClick={()=>{onClickPost(String(post.post_id))}}>
            <span className={blogStyles.date}>{post.create_at.slice(5,10)}</span>
            <div>
              <h4 className={blogStyles.postTitle}>{post.title}</h4>
              <h5 className={blogStyles.postSubTitle}>{post.sub_title}</h5>
            </div>
          </div>
        )
      })}
    </article>
  );
};

export default Post;