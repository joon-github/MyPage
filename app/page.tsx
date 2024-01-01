import AboutMe from './_homeComponents/AboutMe'
import Skill from './_homeComponents/Skill'
import EXPERIENCE from './_homeComponents/EXPERIENCE'
import Section, { Width } from './_base/Section'
import Flex, { Direction } from './_base/Flex'

export default function Home() {
  return (
    <main className='w-full flex justify-center'>
      <div className='mainContainer gap-16'>
        <div className='flex h-full'>
          <div className='border-r border-gray-300 w-4/12'>
            <Section width={Width.full}>
              <AboutMe/>
            </Section>
          </div>
          <div className='flex-1 overflow-auto h-full px-8'>
            <Flex direction={Direction.Column}>
              <Section title='SKILLS' width={Width.full}>
              <div className='line'/>
                <Skill/>
              </Section>
              <div className='line'/>
              <Section title='WORK EXPERIENCE' width={Width.full}>
                <EXPERIENCE/>
              </Section>
            </Flex>
          </div>
        </div>
      </div>
    </main>
  )
}