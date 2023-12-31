import AboutMe from './_homeComponents/AboutMe'
import Skill from './_homeComponents/Skill'
import Career from './_homeComponents/Career'
import Section, { Width } from './_base/Section'
import Flex, { Direction } from './_base/Flex'
export default function Home() {
  return (
    <main className='container flex-1 gap-16'>
      <Flex direction={Direction.Row}>
        <Section title='ABOUT ME' width={Width.oneThird}>
          <AboutMe/>
        </Section>
        <Flex direction={Direction.Column}>
          <Section title='SKILLS' width={Width.full}>
            <Skill/>
          </Section>
          <Section title='WORK EXPERIENCE' width={Width.full}>
            <Career/>
          </Section>
        </Flex>
      </Flex>
    </main>
  )
}