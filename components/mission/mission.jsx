import React from 'react'
import Image from 'next/image'
import mision from "./imf.png";
import SlideText from './slidetext';

function Mission() {
  return (
    <div className='w-full h-fit mt-16 pl-10 md:pl-0 md:mt-10 flex md:flex-row flex-col gap-1 md:px-20 justify-between'>
        
        <div className='w-screen md:w-2/5 flex  md:ml-20 flex-col justify-center align-middle'>
            <h2 className='font-bold text-3xl w-4/5 md:w-fit'>We Hardness Strength of Our Multidisciplinary Teams</h2>
            <SlideText />
        </div>
        <Image className='mt-10 w-3/4 md:w-2/4 mb-10 md:mb-20' src={mision}  width={300} height={200} alt='none'/>
    </div>
  )
}

export default Mission