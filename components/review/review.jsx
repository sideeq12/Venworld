'use client';

import React from 'react'
import {BsArrowRight } from "react-icons/bs"

function SlideX() {
    const slideLeft = () =>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () =>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
   <div className="sline md:-mt-24">
     <div className='relative flex items-cente '>
        <div id="slider" className='w-full h-fit overflow-x-scroll 
        scroll whitespace-nowrap scroll-smooth scrollbar-hide p-10'>
        <div className='pt-10  h-[200px] mr-10 px-5 w-[300px] inline-block rounded-lg
        cursor-pointer bg-gray-100
        ease-in-out duration-200 '>
            <h2 className='text-blue-950 font-bold mb-2'> User experience design.</h2>
         <div className='w-[200px] mb-5  text-sm
          text-gray-500 mt-5'>World class UX Designer <br /> with  perfect  interface Ux design </div>
         <div><BsArrowRight className='text-gray-600' /></div></div>
         <div className='pt-10  h-[200px] mr-10 px-5 w-[300px] inline-block rounded-lg
        cursor-pointer bg-gray-100
        ease-in-out duration-200 '>
            <h2 className='text-blue-950 font-bold mb-2'> Web and mobile development.</h2>
         <div className='w-[200px] mb-5  text-sm
          text-gray-500 mt-5'>Innovating products and 
          Solution <br /> within your time and budget</div>
         <div><BsArrowRight className='text-gray-600' /></div></div>
         <div className='pt-10  h-[200px] mr-10 px-5 w-[300px] inline-block rounded-lg
        cursor-pointer bg-gray-100
        ease-in-out duration-200 '>
            <h2 className='text-blue-950 font-bold mb-2'> Digital marketing </h2>
         <div className='w-[200px] mb-5  text-sm
          text-gray-500 mt-5'>Strategic, Performance Driven,  <br /> and Comprehensive Digital Marketing  </div>
         <div><BsArrowRight className='text-gray-600' /></div></div>
         <div className='pt-10  h-[200px] mr-10 px-5 w-[300px] inline-block rounded-lg
        cursor-pointer bg-gray-100
        ease-in-out duration-200 '>
            <h2 className='text-blue-950 font-bold mb-2'> User experience design</h2>
         <div className='w-[200px] mb-5  text-sm
          text-gray-500 mt-5'>World class UX Designer <br /> with  perfect  interface Ux design </div>
         <div><BsArrowRight className='text-gray-600' /></div></div>
         
        </div>
    </div>
    <div className="direction mx-auto text-center flex justify-center gap-4">
        <div onClick={slideLeft} className="right cursor-pointer h-[20px] w-[20px]
         border border-blue-900 
        rounded-full"><span className='-mt-5  bg-red-500 h-[5px] rounded-full w-[10px]
         '>.</span></div>
        <div onClick={slideRight} className="left cursor-pointer">le</div>
    </div>
   </div>
  )
}

export default SlideX