'use client'
import React from 'react';
import { PostType } from './Posts';
import blogStyles from '@/app/blog/blog.module.scss'
interface PostPropsType {
  data:PostType[];
  year:string;
}

const Post = ({data,year}:PostPropsType) => {
  return (
    <article className={blogStyles.postList}>
      <h3>{year}</h3>
      {data.map((post:PostType)=>{
        return(
          <div key={post.post_id} className={blogStyles.postDataWrapper}>
            <span className={blogStyles.date}>{post.create_at.substr(5,5)}</span>
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