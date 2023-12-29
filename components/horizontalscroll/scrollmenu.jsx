"use client"

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { useState, useContext } from 'react';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const getItems =  [{
    image : "",
    text : "Venworld Global transformed our projects with unmatched technical prowess and efficiency. Their commitment to quality sets them apart in software."
},{
    image : "",
    text : "Venworld Global transformed our projects with unmatched technical prowess and efficiency. Their commitment to quality sets them apart in software."
},{
    image : "",
    text : "Venworld Global transformed our projects with unmatched technical prowess and efficiency. Their commitment to quality sets them apart in software."
},{
    image : "",
    text : "Venworld Global transformed our projects with unmatched technical prowess and efficiency. Their commitment to quality sets them apart in software."
},{
    image : "",
    text : "Venworld Global transformed our projects with unmatched technical prowess and efficiency. Their commitment to quality sets them apart in software."
},{
    image : "",
    text : "Venworld Global transformed our projects with unmatched technical prowess and efficiency. Their commitment to quality sets them apart in software."
},{
    image : "",
    text : "Venworld Global transformed our projects with unmatched technical prowess and efficiency. Their commitment to quality sets them apart in software."
},{
    image : "",
    text : "Venworld Global transformed our projects with unmatched technical prowess and efficiency. Their commitment to quality sets them apart in software."
},]

function Scroll() {
  const [items, setItems] = useState(getItems);
  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <div className='p-10 md:p-20 '>
        <div className='mb-5 md:mb-10'>
            <h3 className='font-bold text-2xl md:text-4xl md:w-2/3'>We are Software Engineering and Media Solution Company</h3>
        <p className='mb-5 md:mb-10 md:w-1/2'>We value experimentation, the reformation of the message ,and the smart incentives, we offer various services.</p>
        </div>

    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {items.map((obj, id) => (
        <Card 
          details={obj.text}
          key={id}
        />
      ))}
    </ScrollMenu>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    useContext(VisibilityContext);

  return (
    <IoIosArrowDropleft size={30} className='mt-32'  disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
      Left
    </IoIosArrowDropleft>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <IoIosArrowDropright size={30} className='mt-32' disabled={isLastItemVisible} onClick={() => scrollNext()}>
      Right
    </IoIosArrowDropright>
  );
}

function Card({ onClick, selected, details, itemId }) {
  const visibility = useContext(VisibilityContext);

  return (
    <div className='border w-72 p-4 md:p-6  font-light text-sm h-80 rounded-md mr-4 md:mr-8  hover:bg-blue-900 hover:text-white' 
      onClick={() => onClick(visibility)}
    //   style={{
    //     width: '160px',
    //   }}
      tabIndex={0}
    >
      <div className="card ">
        <div className='w-16 h-16 rounded-full border-2 mb-8 bg-dp bg-center bg-cover'></div>
        <div>{details}</div>
        <h4 className='font-semibold text-lg mt-5'>Emilia Santos</h4>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}

export default Scroll;