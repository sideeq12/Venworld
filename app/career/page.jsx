"use client";

import InternshipPost from "@/components/internship";
import Jumbotron from "@/components/jumbotron";
import LineSet from "@/components/lineset";
import JobPost from "@/components/jobPost";
import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import Link from "next/link";

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


const Career = ( )=>{
    const slideLeft = () =>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () =>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500
    }
    return(
        <div>
            <Jumbotron headline="Career" check={true} before="Home" recent="Career" />
            <LineSet text="CAREER POST" />
            <div className="my-10 md:my-32 md:px-20 px-10">
                <h1 className="font-extrabold text-3xl mb-5 flex"> <GiGraduateCap size={40} 
                 className="mr-4"/> Internship {"VWNGAI"}</h1>
                <span className="font-light ">Venworld Global Annual Internship</span>
                <div className="flex flex-wrap gap-10 mt-10 ">
                <InternshipPost />
                <InternshipPost />
                <InternshipPost />
                <InternshipPost />
                <InternshipPost />
                </div>
            </div>
            <div className="px-10 md:px-20 my-5 md:my-16 gap-3 md:gap-6">
                <h3 className="font-bold text-2xl">Job Posting</h3>
            <p className="font-light text-gray-700 text-sm my-5">Get more about our job opening</p>
            <p className="font-light text-gray-700 text-sm md:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis excepturi voluptates fugit voluptatum perferendis cum aliquam quasi fuga minus, debitis tempore
                 similique, reiciendis explicabo dolores delectus autem incidunt rerum.</p></div>
            <div className="sline md:my-14">
     <div className='relative flex items-center '>
        <div id="slider" className='w-full h-fit overflow-x-scroll 
        scroll whitespace-nowrap scroll-smooth scrollbar-hide p-5 md:p-10 gap-10'>
      <JobPost />
      <JobPost />
      <JobPost />
      <JobPost />
         
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
            
            <div className="px-10 md:px-20 my-10 md:my-20 text-sm font-light text-gray-700">
                <h2 className="font-bold text-3xl">SVET</h2>
                <span className="mt-4">Sustainability Virtual Editing Programme</span>
                <p className="mt-4 md:w-2/3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptate, 
                    magni incidunt quae vel sequi dolores veniam, aut animi 
                    dolore dolor modi ducimus reiciendis eveniet dignissimos officia accusantium fugiat enim!</p>

                <div className="grid grid-cols-1 md:grid-cols-2 my-5">
                    <div ><h3 className="text-black text-xl font-bold my-2">Conducting virtual Learning Environment</h3>
                    <p className="px-5 border-l h-fit md:h-40 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste cum neque 
                        ut iusto voluptatum odio reiciendis sequi
                         ipsa eum quo ratione, corporis deleniti debitis necessitatibus quod aliquam 
                         fugiat modi error!</p></div>
                <div><h3 className="text-black text-xl font-bold my-2">Conducting virtual Learning Environment</h3>
                    <p className="px-5 border-l h-fit md:h-40 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste cum neque 
                        ut iusto voluptatum odio reiciendis sequi
                         ipsa eum quo ratione, corporis deleniti debitis necessitatibus quod aliquam fugiat modi error!</p></div>
                <div ><h3 className="text-black text-xl font-bold my-2">Conducting virtual Learning Environment</h3>
                    <p className="px-5 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste cum neque 
                        ut iusto voluptatum odio reiciendis sequi
                         ipsa eum quo ratione, corporis deleniti debitis necessitatibus quod aliquam 
                         fugiat modi error!</p></div>
                          <div ><h3 className="text-black text-xl font-bold my-2">Conducting virtual Learning Environment</h3>
                    <p className="px-5 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste cum neque 
                        ut iusto voluptatum odio reiciendis sequi
                         ipsa eum quo ratione, corporis deleniti debitis necessitatibus quod aliquam 
                         fugiat modi error!</p></div>
                </div>
            </div>

            <div className="w-2/3 bg-blue-200 rounded-xl mx-auto my-10 md:my-32 py-16 text-center">
                <p className="w-5/6 md:w-2/3 mx-auto mb-10">To access this incredible opportunity today ,  register here by clicking on the apply now</p>

                <Link href="" className="px-10 py-3 bg-blue-800 text-white  rounded-lg mx-auto">Apply now</Link>
            </div>
            </div>
    )
}

export default Career;