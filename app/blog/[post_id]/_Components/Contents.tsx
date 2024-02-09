import React from 'react';
import style from '../post.module.scss'
import { useRecoilValue } from 'recoil';
import { isManagerState } from '@/app/store/globalState';
import { DataType } from '../page';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const EditorViewer = dynamic(()=> import('@/app/_base/Editor/EditorViewer'), { ssr : false } );

const Contents = ({data}:{data:DataType|null}) => {
  const { post_id }: { post_id:string } = useParams();
  const isManager = useRecoilValue(isManagerState);
  const router = useRouter();
  const onClickDelete = async () => {
    const isDelete = confirm('정말 삭제하시겠습니까?');
    if(isDelete){
      try{
        await fetch(`/api/blog/post/${post_id}`,{
          method:"DELETE"
        })
        router.push('/blog')
      }catch(e){
        console.log(e);
      }
    }
  }
  return (
    <div className={style.content}>
    <header className={style.header}>
      <div>
        <div className={style.tag}>{data?.tag_name}</div>
        <h1 className={style.mainTitle}>{data?.title}</h1>
        <h3 className={style.subTilte}>{data?.sub_title}</h3>
      </div>
      <div className={style.flex}>
        {
          isManager&&
          <div className='flex gap-4'>
            <Link href={`/blog/create?post=${post_id}`}>수정</Link>
            <button onClick={onClickDelete}>삭제</button>
          </div>
        }
        <div className={style.date}>{data?.create_at.slice(0,10)}</div>
      </div>
    </header>
    <div className='pb-20'>
      {data?.contents && 
        <EditorViewer contents={data.contents}/>
      }
    </div>
  </div>
  );
};

export default Contents;