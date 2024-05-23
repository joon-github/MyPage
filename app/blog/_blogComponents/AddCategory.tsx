'use client'
import React from 'react';
import { useRecoilValue } from 'recoil'
import { isManagerState } from '@/app/store/globalState';
import styles from '../blog.module.scss'
import Link from 'next/link';

const AddCategory = () => {
  const isManager = useRecoilValue(isManagerState);
  const onClickAddCategory = async () =>{
    const name = prompt(`카테고리 추가`);
    if(!name) return
    try{
      await fetch(`/api/blog/tag`,{
        method:'POST',
        headers:{"Content-Type": `application/json`},
        body:JSON.stringify({
          tag_name:name,
        })
      })
    }catch(e){
      throw e
    }
  }
  const isHidden = isManager? "":" hidden";
  return (
    <>
      <Link className={styles.postCreate + isHidden} href={'/blog/create'}>게시물 추가</Link>
      <button className={styles.create + isHidden} onClick={onClickAddCategory}>태그 추가</button>
    </>
  );
};

export default AddCategory;