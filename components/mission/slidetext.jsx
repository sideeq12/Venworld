"use client"
import React , {useEffect, useState} from 'react'

function SlideText() {
    const [holder, setHolder ]= useState(false)
  return (
    <div className='w-4/5'>
        <div className='flex mt-10'>
        <button onClick={(e)=> setHolder(false)} className='px-5 py-2 text-sm bg-blue-950
         text-white mr-4 rounded-md'>Our Value</button>

        <button onClick={(e)=> setHolder(true)} className='px-5  text-gray-500 mr-4 rounded-md
         hover:bg-blue-950 hover:text-white '>Our Vision</button>
        </div>
        { !holder ?  <p className='mt-10 text-sm'>With over a decade of experience, 
            we’ve established ourselves as one the of pioneering agencies in the region.
            <br />
            <ul className='mt-5'>
                <li>We are made of passionate leaders </li>
                <li>strategiest, Managers, Developers, animators and designers.</li></ul></p> : <p 
                 className='mt-5 md:mt- text-sm'>With a decade of pioneering 
                  experience, we're a leading agency in shaping Software and Media Industry. Comprising passionate leaders,
                   strategists, developers, animators, and designers. <br /> <br /> We redefine standards through creativity.
                   Our vision is to consistently deliver cutting-edge solutions, driving innovation in the
                    dynamic world of Venworld Global. Join us on this journey of excellence.</p>}

    </div>
  )
}

export default SlideText;