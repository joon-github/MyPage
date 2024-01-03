import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

type HeaderLinkProps = {
  to: string;
  text: string;
};

const HeaderLink = ({ to, text }:HeaderLinkProps) => {
  const pathName = usePathname().split("/")[1]
  const toPath = to.split("/")[1]
  const isCurrentPage = pathName === toPath;
  return (
    <Link className={`font-bold text-xl cursor-pointer hover:scale-110 ${isCurrentPage?"text-blue-900":"text-gray-300"}`} href={to}>{text}</Link>
  )};

export default HeaderLink;
