"use client";
import AboutMe from "./_homeComponents/AboutMe";
import Skill from "./_homeComponents/Skill";
import EXPERIENCE from "./_homeComponents/Experience";
import styles from "@/app/main.module.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className={`${styles.main} pb-5`}>
      <div className={styles.wrap}>
        <div className={styles.section} data-aos="fade-down">
          <AboutMe />
        </div>
        <div className={styles.section}>
          <Skill />
        </div>
        <div className={styles.section} data-aos="fade-down">
          <EXPERIENCE />
        </div>
      </div>
    </main>
  );
}
