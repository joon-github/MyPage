'use client'
import { isManagerState } from '@/app/store/globalState';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation'
import { addPost } from '@/app/actions';
import dynamic from 'next/dynamic';
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
  useEffect(()=>{
    if(!isManager){
      router.push('/blog')
    }
  },[])
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
    const submit = await addPost(formData,contentHtml);
    if(submit){
      router.push('/blog')
    }else{
      alert("error")
      return
    }
  }
  return (
    <div>
      <form action={onSubmit}>
        <div>
          <div>
            <label>제목 : </label>
            <input type="text" name="title"/>
          </div>
          <div>
            <label>설명 : </label>
            <input type="text" name="sub_title"/>
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
          <Editor editorRef={editorRef}/>
          <button type="submit">전송</button>
        </div>
      </form>
    </div>
  );
};

export default page;