"use client";
import React, { useRef, useEffect, useState } from "react";
import AboutMe from "./_homeComponents/AboutMe";
import Skill from "./_homeComponents/Skill";
import EXPERIENCE from "./_homeComponents/Experience";
import styles from "@/app/main.module.scss";
import useIntersectionObserver from "./utils/useIntersectionObserver";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function HomePage() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const [animationBinded, setAnimationBounded] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  const handleIntersection = (
    entry: IntersectionObserverEntry,
    isLast?: boolean
  ) => {
    if (entry.target instanceof HTMLElement) {
      if (entry.isIntersecting) {
        if (!entry.target.classList.contains("fadeDown")) {
          entry.target.classList.add("fadeDown");
          if (isLast) {
            setAtBottom(true);
          }
        }
      } else {
        if (entry.target.classList.contains("fadeDown")) {
          entry.target.classList.remove("fadeDown");
        }
        if (isLast) {
          setAtBottom(false);
        }
      }
    }
  };

  const checkScrollPosition = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
  };

  useEffect(() => {
    setAnimationBounded(true);

    window.addEventListener("whill", checkScrollPosition);
    return () => {
      window.removeEventListener("whill", checkScrollPosition);
    };
  }, []);

  useIntersectionObserver(
    (entry) => {
      handleIntersection(entry);
    },
    aboutMeRef.current,
    { threshold: 0.1 },
    animationBinded
  );
  useIntersectionObserver(
    (entry) => {
      handleIntersection(entry);
    },
    skillRef.current,
    { threshold: 0.1 },
    animationBinded
  );
  useIntersectionObserver(
    (entry) => {
      handleIntersection(entry, true);
    },
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
        {!atBottom && (
          <div className="flex flex-col items-center justify-center fixed bottom-10 float">
            <FaAngleDoubleDown size={30} color="gray" />
          </div>
        )}
      </div>
    </main>
  );
}
