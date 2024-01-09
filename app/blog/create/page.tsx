'use client'
import { isManagerState } from '@/app/store/globalState';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation'
import { addPost } from '@/app/actions';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation'
import { DataType } from '../[post_id]/page';
const Editor = dynamic(()=> import('@/app/_base/Editor'), { ssr : false } ) 

interface CategoryType {
  category_id:number,
  category_name:string
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
      console.log(post_id)
      const getData = async () => {
        const postData = await fetch(`/api/blog/post/${post_id}`);
        const { result: { rows: post } }:{result:{rows:DataType[]}} = await postData.json();
        console.log('post',post)
        setData(post[0]);
      }
      getData();
    }
  },[post_id])
  // useEffect(()=>{
  //   if(!isManager){
  //     router.push('/blog')
  //   }
  // },[])
  useEffect(()=>{
    const getData = async () => {
      const data = await fetch('/api/blog/category');
      const {result:{rows}} = await data.json();
      setCategorys(rows)
    }
    getData();
  },[])
  const onSubmit = async (formData:FormData) => {
    const editorIns = editorRef.current.getInstance();
    const contentHtml = editorIns.getHTML(); 
    const submit = await addPost(formData,contentHtml,post_id);
    if(submit){
      router.push('/blog')
    }else{
      alert("error")
      return
    }
  }
  console.log(data)
  return (
    <div>
      <form 
        action={onSubmit}
        
      >
        <div>
          <div>
            <label>제목 : </label>
            <input defaultValue={data?.title} type="text" name="title"/>
          </div>
          <div>
            <label>설명 : </label>
            <input defaultValue={data?.sub_title} type="text" name="sub_title"/>
          </div>
          <div>
            <select name="category_id">
              {categorys?.map((data:CategoryType)=>{
                return(
                  <option key={data.category_id} value={data.category_id}>{data.category_name}</option>
                )
              })}
            </select>
          </div>
          <Editor editorRef={editorRef} initialValue={data?.contents}/>
          <button type="submit">전송</button>
        </div>
      </form>
    </div>
  );
};

export default page;