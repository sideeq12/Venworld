import Navbar from '@/components/navbar'
import Image from 'next/image'
import Homex from '@/components/home/home'
import Blog from '@/components/blog/blog'
import About from '@/components/about/about'
import Mission from '@/components/mission/mission'
import News from '@/components/newsletter/news'
import Footer from '@/components/footer/footer'
import Slides from '@/components/firstslide/slide'
import SlideX from '@/components/review/review'
import Count from '@/components/counts/count'

export default function Home() {
  return (
   <div className='overflow-x-hidden'>
    <Navbar />
    <Homex />
    <Slides />
    <Blog />
    <About />
    <Mission />
    <News />
    <Slides />
    <Count />
    <Footer />
    </div>
  )
}
