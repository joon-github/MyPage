'use client'
import React from 'react';
import HeaderLink from './HeaderLink';

const Header = () => {
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