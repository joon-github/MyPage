'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import HeaderLink from './HeaderLink';

const Header = () => {
  const router = useRouter()
  const onClickMoveRouter = (path:string) => {
    router.push(path)
  }
  return (
    <header
      className={`h-14 z-10 flex justify-around items-center fixed top-0 w-full shadow-md`}
    >
      <HeaderLink to="/" text="RESUME" onClick={onClickMoveRouter} />
      <HeaderLink to="/project" text="PROJECT" onClick={onClickMoveRouter} />
      <HeaderLink to="/blog" text="BLOG" onClick={onClickMoveRouter} />
    </header>
  );
};

export default Header;