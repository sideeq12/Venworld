import React from 'react'
import "./about.css"
import Image from 'next/image'
import Bars from './bars'

function About() {
  return (
    <div className='mt-10 md:px-24 px-8'> 
        <h2 className='text-2xl font-bold'>About Us </h2>
        <div className='w-full h-fit flex flex-col  md:flex-row pt-4 relative'> 
            <div  className='w-full  md:w-2/5 h-96 myimage mb-4'>
            </div>
            <div className='w-full md:w-2/5  md:ml-auto'>

                <h3 className='text-2xl mb-5 md:mb-10'>We are here to serve you.</h3>
                <p>
                With over decades of experience we have established ourselves as one of the pioneering agency in the region. Our small flexible, 
                agile and design-led structures and processes our us to be highly responsive and innovative.
                </p>
                <Bars />
                <div className='flex flex-row justify-between mt-10'>
                    <div className='ic'></div>
                    <button className='px-10 py-3 text-white rounded-md  bg-blue-950 '>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About