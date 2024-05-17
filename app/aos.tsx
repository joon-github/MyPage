"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // 스크롤 시마다 애니메이션이 작동하도록 설정
    });
  }, [])

  return null
}