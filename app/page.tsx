import AboutMe from './_homeComponents/AboutMe'
import Skill from './_homeComponents/Skill'
import Career from './_homeComponents/Career'
import Section, { Width } from './_base/Section'
import Flex, { Direction } from './_base/Flex'
export default function Home() {
  return (
    <main className='w-full flex-1 gap-16'>
      <Flex direction={Direction.Row}>
        <Section title='ABOUT ME' width={Width.oneThird}>
          <AboutMe/>
        </Section>
        <div className='flex-1 overflow-auto h-screen'>
          <Flex direction={Direction.Column}>
            <Section title='SKILLS' width={Width.full}>
              <Skill/>
            </Section>
            <Section title='WORK EXPERIENCE' width={Width.full}>
              <Career/>
              <Skill/>
            </Section>
          </Flex>
        </div>
      </Flex>
    </main>
  )
}