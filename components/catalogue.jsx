"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
const data = [
  {
    title: "User Ux design",
    paragraph: "World class UI Ux designed ",
    id: 1,
  },
  {
    title: "User Ux design",
    paragraph: "World class UI Ux designed",
    id: 2,
  },
  {
    title: "User Ux design",
    paragraph: "World class UI Ux designed ",
    id: 3,
  },
  {
    title: "User Ux design",
    paragraph: "World class UI Ux designed ",
    id: 4,
  },
  {
    title: "User Ux design",
    paragraph: "World class UI Ux designed ",
    id: 5,
  },
  {
    title: "User Ux design",
    paragraph:
      "World class UI Ux designed project handling for all level and ideation",
    id: 6,
  },
  {
    title: "User Ux design",
    paragraph:
      "World class UI Ux designed project handling for all level and ideation",
    id: 7,
  },
  {
    title: "User Ux design",
    paragraph:
      "World class UI Ux designed project handling for all level and ideation",
    id: 8,
  },
];
function Catalogue() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="sline my-20 md:my-40">
      <div className="relative flex items-cente ">
        <div
          id="slider"
          className="w-full h-fit overflow-x-scroll 
        scroll whitespace-nowrap scroll-smooth scrollbar-hide p-10"
        >
     <Card headline="OUR VISION" 
     text="At Venworld Global , our vision is to create innovative technology that transforms the world"/>
     <Card  headline="OUR IMPACT"/>
     <Card headline="OUR VALUE" />
     <Card headline="OUR PARTNERS" />
        </div>
      </div>
      <div className="direction mx-auto text-center flex justify-center gap-4">
        <div
          onClick={slideLeft}
          className="right cursor-pointer
         border bg-blue-600 p-4 rounded-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#fff"
            class="bi bi-caret-left"
            viewBox="0 0 16 16"
          >
            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
          </svg>
        </div>
        <div
          onClick={slideRight}
          className="left cursor-pointer
         border bg-blue-600 p-4 rounded-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#fff"
            class="bi bi-caret-right"
            viewBox="0 0 16 16"
          >
            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Catalogue;


const Card = ({headline, text})=>{
    return(
        <div
        className="h-[30rem] mr-8 w-5/6 md:w-1/3 inline-block 
    cursor-pointer bg-workplace "
      >
       <div className="w-full h-full text-white bg-black px-10 pt-28 bg-opacity-50 hover:bg-opacity-90">
       <h2 className=" font-bold text-2xl">
          {" "}
          {headline}
        </h2>
        <div
          className="w-[180px]  mb-5  text-sm
     mt-5"
        >
         {text}
        </div>
        <div>
          <BsArrowRight className="text-gray-600" />
        </div>
       </div>
      </div>
    )
}