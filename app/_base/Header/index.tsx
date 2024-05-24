"use client";
import React, { useEffect } from "react";
import HeaderLink from "./HeaderLink";
import { useSetRecoilState } from "recoil";
import { isManagerState } from "@/app/store/globalState";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { usePathname,useRouter} from "next/navigation";
const Header = ({ pw }: { pw: string | undefined }) => {
  const setIsManagerState = useSetRecoilState(isManagerState);
  const pathname = usePathname();
  const router = useRouter();
  // admin-check페이지 일떄 useEffect 실행
  useEffect(() => {
    if (pathname === "/admin-check") {
      const input = prompt("비밀번호를 입력해주세요.");
      if (input === pw) {
        localStorage.setItem("AUTHENTICATION_PASSWORD", input);
        router.push("/blog");
      } else {
        alert("비밀번호가 일치하지 않습니다.");
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (pw === localStorage.getItem("AUTHENTICATION_PASSWORD")) {
      setIsManagerState(true);
    } else {
      console.log("안녕하세요. 편범준 개인 홈페이지 입니다.");
    }
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("클립보드에 저장되었습니다.");
      })
      .catch((err) => {
        console.error("Failed to copy!", err);
      });
  };

  return (
    <header className="absolute top-0 h-fit z-10 w-full bg-white/30">
      <div className="relative flex justify-between items-center w-full py-4 px-8 border-b border-gray-200 text-lg font-bold text-gray-800 shadow-md bg-white/30 backdrop-blur-sm z-10">
        <div className="flex gap-4">
          <div
            className="relative flex items-center gap-1 cursor-pointer group"
            onClick={() => copyToClipboard("ehdfkd941209@gmail.com")}
          >
            <MdOutlineEmail size={20} />
            <p className="subText md:inline hidden group-hover:block absolute md:relative md:static md:top-auto md:left-auto top-8 bg-white/30 px-2 py-1 rounded-md group-hover:shadow-md">
              ehdfkd941209@gmail.com
            </p>
          </div>
          <div
            className="relative flex items-center gap-1 cursor-pointer group"
            onClick={() => copyToClipboard("https://github.com/joon-github")}
          >
            <FaGithub size={20} />
            <p className="subText md:inline hidden group-hover:block absolute md:relative md:static md:top-auto md:left-auto top-8 bg-white/30 px-2 py-1 rounded-md group-hover:shadow-md">
              https://github.com/joon-github
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <HeaderLink to="/" text="RESUME" />
          <HeaderLink to="/portfolio" text="PORTFOLIO" />
          <HeaderLink to="/blog" text="BLOG" />
        </div>
      </div>
    </header>
  );
};

export default Header;
