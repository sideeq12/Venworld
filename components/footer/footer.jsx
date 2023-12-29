import React from 'react'
import Link from 'next/link'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin, MdOutlineWorkspaces , MdMiscellaneousServices} from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";


function Footer() {
  return (
   < div className='bg-black text-white'>
    <div className='
     px-10 md:px-15 pt-5 md:pt-20   grid gap-2 lg:grid-cols-5
     grid-cols-2 sm:gap-0
     sm:grid-cols-1
     md:grid-cols-3 font-light
    '>
        <div className='md:mr-10 mb-10 md:mb-0 '>
        <div className='logo'></div>
            <p className='text-sm text-slate-100 mt-5 font-light'>VenWorld is a renowned SOftware Engineering and media solutions company thriving to take 
                your business setup to the next phase of development , we assure that our well-planned
                serivices could definetely bring your brand to the limelight.
            </p>
        </div>
        <div className=' mt-16 md:mt-0 mb-10 md:mb-0'>
            <ul className='text-sm'>
                <li className='mt-2'> <Link href="/" className='flex gap-3'> <IoHomeOutline size={20} /> Home</Link></li>
                <li className='mt-2'> <Link href="/services" className='flex gap-3'><MdMiscellaneousServices size={20} /> Service</Link></li>
                <li className='mt-2'> <Link href="/portfolio" className='flex gap-3'> <MdOutlineWorkspaces size={20}/> Portfolio</Link></li>
                <li className='mt-2'> <Link href="/about" className='flex gap-3'><TbListDetails size={20} />About Us.</Link></li>
                <li className='mt-2'> <Link href="/" className='flex gap-3'> <RiArticleLine size={20} />Blogs</Link></li>  </ul>   
            </div>
         
            <div className='mb-10 md:mb-0'>
            <h2 className='mb-5 font-bold text-xl'>Services</h2>
            <ul className='text-sm'>
                <li className='mt-2'>Wordpress</li>
                <li className='mt-3'>UI/UX Design</li>
                <li className='mt-3'>Digital marketing</li>
                <li className='mt-3'>Web Development</li>
                </ul>   
            </div>
            <div>
            <h2 className='mb-5 font-bold text-xl'>Contacts</h2>
            <ul className='text-sm'>
                <li className='mt-2 flex gap-2'>  <IoIosCall size={20}/> +234(915)258 5753</li>
                <li className='mt-3 flex gap-3'> <IoMdMail  size={20}/> Support@venworld.org</li>
                <li className='mt-3 flex gap-3 '> <MdLocationPin  size={20}/>101 Weistheimer Road  <br />  Victoria Island, <br /> Lagos State , Nigeria </li>
             </ul>    
            </div>
            <div>
            <h2 className='mb-5 font-bold text-xl'>Newsletter</h2>
            <ul className='text-sm'>
                <li className='mt-2'>You can contact us via</li>
                </ul>
                <div className='bg-slate-50 h-10 w-full px-3 py-2 text-slate-300 rounded-2xl mt-5'>
                   <input type="text" placeholder='Your email'  className='bg-none w-3/5  text-sm' />
                </div>
            </div>

    </div>

<div className='mt-4 md:mt-5 border-t w-screen text-center py-4'>
2024 All rights reserved
</div>
   </div>
  )
}

export default Footer