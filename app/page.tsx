import AboutMe from './_homeComponents/AboutMe'
import Skill from './_homeComponents/Skill'
import EXPERIENCE from './_homeComponents/Experience'
import Flex, { Direction } from './_base/Flex'
import styles from '@/app/main.module.scss'
export default function HomePage() {
  return (
    <main className={`${styles.main} pb-5`}>
      <div className={`${styles.mainContainer} gap-16`}>
        <div className={`${styles.contentsWrapper} h-full`}>
          <AboutMe />
          <div className={`${styles.contents} flex-1 h-full`}>
            <Flex direction={Direction.Column}>
              <Skill />
              <EXPERIENCE />
            </Flex>
          </div>
        </div>
      </div>
    </main>
  )
}
