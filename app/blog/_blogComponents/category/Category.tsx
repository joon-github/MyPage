'use client'
import React from 'react';
import styles from '@/app/blog/blog.module.scss'
import { CategorysType } from './Categorys';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { isManagerState, selectedCategoryIdState} from '@/app/store/globalState';
const Category = ({ category_id,category_name }: CategorysType) => {
  const isManager = useRecoilValue(isManagerState);
  const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState)
  const onClickDeleteCategory = async () => {
    const isDelete = confirm('삭제하겠습니까?');
    if(!isDelete) return
    try{
      await fetch(`/api/blog/category?category_id=${category_id}`,{
        method:'DELETE',
      })
    }catch(e){
      throw e
    }
  }

  const onClickUpdateCategory = async () => {
    const name = prompt(`카테고리 이름:${category_name}`);
    if(!name) return
    try{
      await fetch(`/api/blog/category`,{
        method:'PATCH',
        headers:{"Content-Type": `application/json`},
        body:JSON.stringify({
          category_name:name,
          category_id
        })
      })
    }catch(e){
      throw e
    }
  }

  const onClickCategory = () => {
    if(category_id){
      setSelectedCategoryId(category_id)
    }
  }

  return (
    <div className={styles.category} onClick={onClickCategory}>
      {isManager&&
        <div className={styles.edites}>
          <div className={styles.delete}>
            <button onClick={onClickDeleteCategory}>삭제</button>
          </div>
          <div className={styles.update}>
            <button onClick={onClickUpdateCategory}>수정</button>
          </div>
        </div> 
      }
      <div className='flex flex-col items-center justify-center'>
        <h3>{category_name}</h3>
      </div>
    </div>
  );
};

export default Category;