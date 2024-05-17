import AboutMe from "./_homeComponents/AboutMe";
import Skill from "./_homeComponents/Skill";
import EXPERIENCE from "./_homeComponents/Experience";
import styles from "@/app/main.module.scss";

export default function HomePage() {
  return (
    <main className={`${styles.main} pb-5`}>
        <div className={styles.wrap}>
          <div className={styles.section}>
            <AboutMe />
          </div>
          <div className={styles.section}>
            <Skill />
          </div>
          <div className={styles.section}>
            <EXPERIENCE />
          </div>
        </div>
      </main>
  );
}
