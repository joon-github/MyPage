'use client'
import React from 'react';
import styles from '@/app/_base/Header/header.module.scss'
import { useRouter } from 'next/navigation'
import HeaderLink from './HeaderLink';

const Header = () => {
  const router = useRouter()
  const onClickMoveRouter = (path:string) => {
    router.push(path)
  }
  return (
    <header
      className={`${styles.header} h-14 z-10 flex justify-around items-center`}
    >
      <HeaderLink to="/" text="RESUME" onClick={onClickMoveRouter} />
      <HeaderLink to="/project" text="PROJECT" onClick={onClickMoveRouter} />
      <HeaderLink to="/blog" text="BLOG" onClick={onClickMoveRouter} />
    </header>
  );
};

export default Header;