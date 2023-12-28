'use client';

import React from 'react'
import {BsArrowRight } from "react-icons/bs"
const data = [ {
    title : "User Ux design",
    paragraph : "World class UI Ux designed ",
    id : 1
},  {
    title : "User Ux design",
    paragraph : "World class UI Ux designed",  
    id : 2
}
,  {
    title : "User Ux design",
    paragraph : "World class UI Ux designed ",
    id : 3
}
,  {
    title : "User Ux design",
    paragraph : "World class UI Ux designed ", 
    id : 4
},{
    title : "User Ux design",
    paragraph : "World class UI Ux designed ",
    id : 5
},  {
    title : "User Ux design",
    paragraph : "World class UI Ux designed project handling for all level and ideation",  
    id : 6
}
,  {
    title : "User Ux design",
    paragraph : "World class UI Ux designed project handling for all level and ideation",
    id : 7
}
,  {
    title : "User Ux design",
    paragraph : "World class UI Ux designed project handling for all level and ideation", 
    id : 8
},
]
function Slides() {
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
        <div className='pt-10 shadow-md   h-[200px] mr-10 px-5 w-[300px] inline-block rounded-lg
        cursor-pointer bg-gray-100
        ease-in-out duration-200 '>
            <h2 className='text-blue-950 font-bold mb-2'> User experience design.</h2>
         <div className='w-[200px] mb-5  text-sm
          text-gray-500 mt-5'>World class UX Designer <br /> with  perfect  interface Ux design </div>
         <div><BsArrowRight className='text-gray-600' /></div></div>
         <div className='pt-10 shadow-md  h-[200px] mr-10 px-5 w-[300px] inline-block rounded-lg
        cursor-pointer bg-gray-100
        ease-in-out duration-200 '>
            <h2 className='text-blue-950 font-bold mb-2'> Web and mobile development.</h2>
         <div className='w-[200px] mb-5  text-sm
          text-gray-500 mt-5'>Innovating products and 
          Solution <br /> within your time and budget</div>
         <div><BsArrowRight className='text-gray-600' /></div></div>
         <div className='pt-10 shadow-md  h-[200px] mr-10 px-5 w-[300px] inline-block rounded-lg
        cursor-pointer bg-gray-100
        ease-in-out duration-200 '>
            <h2 className='text-blue-950 font-bold mb-2'> Digital marketing </h2>
         <div className='w-[200px] mb-5  text-sm
          text-gray-500 mt-5'>Strategic, Performance Driven,  <br /> and Comprehensive Digital Marketing  </div>
         <div><BsArrowRight className='text-gray-600' /></div></div>
         <div className='pt-10 shadow-md   h-[200px] mr-10 px-5 w-[300px] inline-block rounded-lg
        cursor-pointer bg-gray-100
        ease-in-out duration-200 '>
            <h2 className='text-blue-950 font-bold mb-2'> User experience design</h2>
         <div className='w-[200px] mb-5  text-sm
          text-gray-500 mt-5'>World class UX Designer <br /> with  perfect  interface Ux design </div>
         <div><BsArrowRight className='text-gray-600' /></div></div>
         
        </div>
    </div>
    <div className="direction mx-auto text-center flex justify-center gap-4">
        <div onClick={slideLeft} className="right cursor-pointer
         border bg-blue-600 p-4 rounded-full "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-caret-left" viewBox="0 0 16 16">
  <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
</svg></div>
        <div onClick={slideRight} className="left cursor-pointer
         border bg-blue-600 p-4 rounded-full "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-caret-right" viewBox="0 0 16 16">
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg></div>
    </div>
   </div>
  )
}

export default Slides