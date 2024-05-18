"use client";
import React, { useRef, useEffect, useState } from "react";
import AboutMe from "./_homeComponents/AboutMe";
import Skill from "./_homeComponents/Skill";
import EXPERIENCE from "./_homeComponents/Experience";
import styles from "@/app/main.module.scss";
import useIntersectionObserver from "./utils/useIntersectionObserver";

export default function HomePage() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const [animationBinded, setAnimationBounded] = useState(false);

  const handleIntersection = (entry: IntersectionObserverEntry) => {
    if (entry.target instanceof HTMLElement) {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains("fadeDown")) {
          entry.target.classList.add("fadeDown");
        }
      } else {
        if (entry.target.classList.contains("fadeDown")) {
          entry.target.classList.remove("fadeDown");
        }
      }
    }
  };

  useEffect(() => {
    setAnimationBounded(true);
  }, []);

  useIntersectionObserver(
    handleIntersection,
    aboutMeRef.current,
    { threshold: 0.1 },
    animationBinded
  );
  useIntersectionObserver(
    handleIntersection,
    skillRef.current,
    { threshold: 0.1 },
    animationBinded
  );
  useIntersectionObserver(
    handleIntersection,
    experienceRef.current,
    { threshold: 0.1 },
    animationBinded
  );

  return (
    <main className={`${styles.main} pb-5`}>
      <div className={styles.wrap}>
        <div className={styles.section} ref={aboutMeRef}>
          <AboutMe />
        </div>
        <div className={styles.section} ref={skillRef}>
          <Skill />
        </div>
        <div className={styles.section} ref={experienceRef}>
          <EXPERIENCE />
        </div>
      </div>
    </main>
  );
}
