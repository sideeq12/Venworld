
import Homex from '@/components/home/home'
import Blog from '@/components/blog/blog'
import About from '@/components/about/about'
import Mission from '@/components/mission/mission'
import News from '@/components/newsletter/news'
import Slides from '@/components/firstslide/slide'
import Count from '@/components/counts/count'

export default function Home() {
  return (
   <div className='overflow-x-hidden'>
    <Homex />
    <Slides />
    <Blog />
    <About />
    <Mission />
    <News />
    <Slides />
    <Count />

    </div>
  )
}
