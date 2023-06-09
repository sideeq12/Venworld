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

export default function Home() {
  return (
   <body className=''>
    <Navbar />
    <Homex />
    <Slides />
    <Blog />
    <About />
    <Mission />
    <News />
    <Slides />
    <Footer />
    </body>
  )
}
