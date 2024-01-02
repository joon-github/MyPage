import React from 'react';
import { usePathname } from 'next/navigation'

type HeaderLinkProps = {
  to: string;
  text: string;
  onClick: (to: string) => void;
};

const HeaderLink = ({ to, text, onClick }:HeaderLinkProps) => {
  const pathName = usePathname()
  const isCurrentPage = pathName === to;
  return (
    <p className={`text-xl cursor-pointer hover:scale-110 ${isCurrentPage?"text-blue-900":"text-gray-300"}`} onClick={() => onClick(to)}>{text}</p>
  )};

export default HeaderLink;
