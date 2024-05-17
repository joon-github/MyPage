import AboutMe from "./_homeComponents/AboutMe";
import Skill from "./_homeComponents/Skill";
import EXPERIENCE from "./_homeComponents/Experience";
import styles from "@/app/main.module.scss";
export default function HomePage() {
  return (
    <main className={`${styles.main} pb-5`}>
      <div className="flex-col w-full">
        <AboutMe />
        <Skill />
        <EXPERIENCE />
      </div>
    </main>
  );
}
