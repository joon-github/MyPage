"use client"
import React, { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import style from './post.module.scss'
import dynamic from 'next/dynamic';
import { useRecoilValue } from 'recoil';
import { isManagerState } from '@/app/store/globalState';
import Link from 'next/link';

const EditorViewer = dynamic(()=> import('@/app/_base/Editor/EditorViewer'), { ssr : false } );

export type DataType = {
  post_id: number,
  category_id: number,
  title: string,
  contents: string,
  create_at: string,
  sub_title: string,
  category_name:string
}

const PostDetailPage = () => {
  const isManager = useRecoilValue(isManagerState);
  const { post_id }: { post_id:string } = useParams();
  const [data , setData] = useState<DataType|null>(null);
  useEffect(()=>{
    if(post_id){
      const getData = async () => {
        const postData = await fetch(`/api/blog/post/${post_id}`,{cache:'no-store'});
        const { result: { rows: post } }:{result:{rows:DataType[]}} = await postData.json();
        setData(post[0]);
      }
      getData();
    }
  },[post_id])
  return (
    <main className={style.main}>
      <div className={style.content}>
        <header className={style.header}>
          <div>
            <div className={style.tag}>{data?.category_name}</div>
            <h1 className={style.mainTitle}>{data?.title}</h1>
            <h3 className={style.subTilte}>{data?.sub_title}</h3>
          </div>
          <div className={style.flex}>
            {isManager&&<Link href={`/blog/create?post=${post_id}`}>수정</Link>}
            <div className={style.date}>{data?.create_at.slice(0,10)}</div>
          </div>
        </header>
        <div>
          {data?.contents && 
            <EditorViewer contents={data.contents}/>
          }
        </div>
      </div>
    </main>
  );
};

export default PostDetailPage;