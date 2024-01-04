'use client'
import React, { useEffect } from 'react';
import HeaderLink from './HeaderLink';

const Header = ({pw}:{pw:string|undefined}) => {
  useEffect(()=>{
    if(pw === localStorage.getItem('AUTHENTICATION_PASSWORD')){
      console.log("내가 범준이다!")
    }else{
      console.log("안녕하세요. 편범준 개인 홈페이지 입니다.")
    }
  },[])
  return (
    <header
      className={`relative top-0 h-14 z-10 flex justify-around items-center top-0 w-full shadow-md`}
    >
      <HeaderLink to="/" text="RESUME" />
      <HeaderLink to="/project" text="PROJECT" />
      <HeaderLink to="/blog" text="BLOG" />
    </header>
  );
};

export default Header;