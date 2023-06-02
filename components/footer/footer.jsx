import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-white
     px-10 md:px-15 py-5 md:py-20 grid gap-2 lg:grid-cols-5
     grid-cols-2 sm:gap-0
     md:grid-cols-3
    '>
        <div className='mr-10 mb-10 md:mb-0'>
        <h2 className='mb-5 font-bold text-xl'>heb</h2>
            <p className='text-sm text-slate-100 mt-5'>VenWorld is a renowned SOftware Engineering and media solutions company thriving to take 
                your business setup to the next phase of development , we assure that our well-planned
                serivices could definetely bring your brand to the limelight.
            </p>
        </div>
        <div className='mb-10 md:mb-0'>
            <h2 className='mb-5 font-bold text-xl'>heb</h2>
            <ul className='text-sm'>
                <li className='mt-2'>Home</li>
                <li className='mt-3'>About Us</li>
                <li className='mt-3'>Services</li>
                <li className='mt-3'>Products</li>
                <li className='mt-3'>Portfolio</li>
                <li className='mt-3'>Blog</li></ul>      
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
                <li className='mt-2'>+234(915)256</li>
                <li className='mt-3'>Support@venworld.org</li>
                <li className='mt-3'>101 Weistheimer Road  <br />  Victoria Island, <br /> Lagos State , 101234 </li>
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
  )
}

export default Footer