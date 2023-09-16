"use client"

import React, { useState } from 'react'
import  './count.css'

function Count() {
    const [countNumbers, setCountNumbers ] =  useState({
        projects : 1500,
        members : 34,
        awwards : 10,
        rating : 100
    })
  return (
    <div className='px-3 md:px-10 mt-8 py-20 flex  sm:flex-col md:flex-row gap-2 justify-around bg-[#E5E5EE]'>
        <div className='border text-center'>
            <div className='mic'>
            </div>
            <h3 className='font-bold text-2xl mt-2'>{countNumbers.projects}</h3>
            <label htmlFor="C" className='text-xs'>Completed Project</label>
        </div>
        <div className='border text-center'>
            <div className='mine'>
            </div>
            <h3 className='font-bold text-2xl  mt-2'>{countNumbers.members}+</h3>
            <label htmlFor="C" className='text-xs'>Active members</label>
        </div>
        <div className='border text-center'>
            <div className='awward'>
            </div>
            <h3 className='font-bold text-2xl  mt-2'>{countNumbers.awwards}+</h3>
            <label htmlFor="C" className='text-xs'>Award winning</label>
        </div>
        <div className='border text-center'>
            <div className='sat'>
            </div>
            <h3 className='font-bold text-2xl  mt-2'>{countNumbers.rating}%</h3>
            <label htmlFor="C" className='text-xs'>Satisfaction rate</label>
        </div>
 </div>
  )
}

export default Count