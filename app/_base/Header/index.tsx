'use client'
import React, { useEffect } from 'react';
import HeaderLink from './HeaderLink';
import { useSetRecoilState } from "recoil";
import { isManagerState } from '@/app/store/globalState';
const Header = ({pw}:{pw:string|undefined}) => {
  const setIsManagerState = useSetRecoilState(isManagerState);
  useEffect(()=>{
    if(pw === localStorage.getItem('AUTHENTICATION_PASSWORD')){
      setIsManagerState(true);
    }else{
      console.log("안녕하세요. 편범준 개인 홈페이지 입니다.")
    }
  },[])
  return (
    <header className="relative top-0 h-10 z-10 w-full">
      <div className="relative flex justify-end gap-4 items-center w-full py-4 px-8 border-b border-gray-200 text-lg font-bold text-gray-800 shadow-md bg-white/30 backdrop-blur-sm z-10">
        <HeaderLink to="/" text="RESUME" />
        <HeaderLink to="/project" text="PROJECT" />
        <HeaderLink to="/blog" text="BLOG" />
      </div>
    </header>
  );
};

export default Header;