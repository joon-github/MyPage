import AboutMe from './_homeComponents/AboutMe'
import Skill from './_homeComponents/Skill'
import EXPERIENCE from './_homeComponents/EXPERIENCE'
import Flex, { Direction } from './_base/Flex'

export default function Home() {
  return (
    <main className='w-full'>
      <div className='mainContainer gap-16'>
        <div className='flex h-full'>
          <AboutMe/>
          <div id="etc" className='flex-1 overflow-auto h-full px-8'>
            <Flex direction={Direction.Column}>
              <Skill/>
              <EXPERIENCE/>
            </Flex>
          </div>
        </div>
      </div>
    </main>
  )
}