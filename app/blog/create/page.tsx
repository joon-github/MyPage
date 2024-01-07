'use client'
import { isManagerState } from '@/app/store/globalState';
import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/navigation'
import Editor from '@/app/_base/Editor';
import { addPost } from '@/app/actions';
const page = () => {
  const router = useRouter()
  const isManager = useRecoilValue(isManagerState);
  // useEffect(()=>{
  //   if(!isManager){
  //     router.push('/blog')
  //   }
  // },[])

  return (
    <div>
      <form action={addPost}>
        <div>
          <div>
            <label>제목 : </label>
            <input type="text" name="title"/>
          </div>
          <div>
            <label>설명 : </label>
            <input type="text" name="sub_title"/>
          </div>
          <Editor />
          <button type="submit">전송</button>
        </div>
      </form>
    </div>
  );
};

export default page;