import React  from 'react';
import { baseUrl } from '@/app/utils/baseUrl';
import blogStyles from '@/app/blog/blog.module.scss'
import Post from './Post';

export type PostType = {
  post_id: number,
  category_id: number,
  title:string;
  sub_title:string;
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
  const categoryData = await fetch(`${baseUrl}/api/blog/post`,config);
  const { result: { rows: posts } } = await categoryData.json();
  const newData:any= {};
  posts.forEach((data:PostType)=>{
    const year = data.create_at.substr(0,4);
    if(newData[year]){
      newData[year].push(data);
    }else{
      newData[year]=[data];
    }
  })
  return (
    <div className={blogStyles.postsWrapper}>
      {Object.keys(newData).map((key:string) => {
        const data:PostType[] = newData[key];
        return (
          <Post
            key={key}
            data={data}
            year={key}
          />
        )
      })}
    </div>
  );
};

export default Posts;