import React from 'react';
import { PostType } from './Posts';

interface PostPropsType {
  data:PostType[];
  year:string;
}

const Post = ({data,year}:PostPropsType) => {
  console.log('data',data)
  return (
    <article>
      <div>{year}</div>
      {data.map((post:PostType)=>{
        return(
          <div>
            <div>{post.title}</div>
            <div>{post.sub_title}</div>
          </div>
        )
      })}
    </article>
  );
};

export default Post;