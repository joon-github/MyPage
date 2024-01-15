'use client'
import { isManagerState } from '@/app/store/globalState';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation'
import { addPost } from '@/app/actions';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation'
import { DataType } from '../[post_id]/page';
import styles from './create.module.scss'

import { useS3Upload, getImageData } from 'next-s3-upload';
import Image from 'next/image';
const Editor = dynamic(()=> import('@/app/_base/Editor'), { ssr : false } ) 

interface CategoryType {
  tag_id:number,
  tag_name:string
}

const page = () => {
  const [categorys,setCategorys] = useState([]);
  const router = useRouter()
  const isManager = useRecoilValue(isManagerState);
  const editorRef = useRef<any>(null); 
  const searchParams = useSearchParams()
  const post_id = searchParams.get('post')
  const [data , setData] = useState<DataType|null>(null);
  useEffect(()=>{
    if(post_id){
      const getData = async () => {
        const postData = await fetch(`/api/blog/post/${post_id}`);
        const { rows: post  }:{rows:DataType[]} = await postData.json();
        setData(post[0]);
      }
      getData();
    }
  },[post_id])
  useEffect(()=>{
    if(!isManager){
      router.push('/blog')
    }
  },[])
  useEffect(()=>{
    const getData = async () => {
      const data = await fetch('/api/blog/category');
      const {rows} = await data.json();
      setCategorys(rows)
    }
    getData();
  },[])
  const onSubmit = async (formData:FormData) => {
    const editorIns = editorRef.current.getInstance();
    const contentHtml = editorIns.getMarkdown(); 
    const submit = await addPost(formData,contentHtml,post_id);
    console.log("submit",submit)
    if(submit){
      router.push('/blog')
    }else{
      alert("error")
      return
    }
  }
  return (
    <div>
      {/* <Image src={'https://mypage.site.s3.ap-northeast-2.amazonaws.com/next-s3-uploads/ac043ff1-1d57-46c3-aef1-4e8fd4707d01/_-CSS3-(1).png'} width={200} height={200} alt='test'/> */}
      <form 
        action={onSubmit}
        className={styles.form}
      >
        <div className={styles.inputs}>
          <div>
            <label>제목 : </label>
            <input defaultValue={data?.title} type="text" name="title"/>
          </div>
          <div>
            <label>설명 : </label>
            <input defaultValue={data?.sub_title} type="text" name="sub_title"/>
          </div>
          <div>
            <select name="tag_id">
              {categorys?.map((data:CategoryType)=>{
                return(
                  <option key={data.tag_id} value={data.tag_id}>{data.tag_name}</option>
                )
              })}
            </select>
          </div>
          <button type="submit">저장</button>
        </div>
        <Editor editorRef={editorRef} initialValue={data?.contents}/>
      </form>
    </div>
  );
};

export default page;