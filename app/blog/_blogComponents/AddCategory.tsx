'use client'
import React from 'react';
import { useRecoilValue } from 'recoil'
import { isManagerState } from '@/app/store/globalState';
import styles from '../blog.module.scss'

const AddCategory = () => {
  const isManager = useRecoilValue(isManagerState);
  const onClickAddCategory = async () =>{
    const name = prompt(`카테고리 추가`);
    if(!name) return
    try{
      await fetch(`/api/blog/category`,{
        method:'POST',
        headers:{"Content-Type": `application/json`},
        body:JSON.stringify({
          category_name:name,
        })
      })
    }catch(e){
      throw e
    }
  }
  return (
    <>
      {isManager&&
        <button className={styles.create} onClick={onClickAddCategory}>추가</button>
      }
    </>
  );
};

export default AddCategory;