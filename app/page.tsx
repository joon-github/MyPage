'use client';
import React, { useRef } from 'react';
import AboutMe from "./_homeComponents/AboutMe";
import Skill from "./_homeComponents/Skill";
import EXPERIENCE from "./_homeComponents/Experience";
import styles from "@/app/main.module.scss";

export default function HomePage() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]!.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className={`${styles.main} pb-5`}>
      <div className={styles.wrap}>
        <div className={styles.section} ref={el => sectionRefs.current[0] = el}>
          <AboutMe />
        </div>
        <div className={styles.section} ref={el => sectionRefs.current[1] = el}>
          <Skill />
        </div>
        <div className={styles.section} ref={el => sectionRefs.current[2] = el}>
          <EXPERIENCE />
        </div>
      </div>
      <div className={styles['nav-buttons']}>
        <button onClick={() => scrollToSection(0)}>About Me</button>
        <button onClick={() => scrollToSection(1)}>Skill</button>
        <button onClick={() => scrollToSection(2)}>Experience</button>
      </div>
    </main>
  );
}
