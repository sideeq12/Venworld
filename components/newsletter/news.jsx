import React from 'react'

function News() {
  return (
    <div className='w-full bg-slate-200 py-20 md:px-30' >

    <div className=' py-10 md:pt-15 md:pb-20 w-4/5 bg-white mx-auto gap-5 flex flex-col
     justify-center text-center align-middle rounded-lg'>
        <h2 className='font-bold text-xl'>Newsletter</h2>
        <p className='text-sm text-slate-700'> Subscribe To Stay Updated</p>
        <div className='mt-10'>
            <input className='text-sm w-3/5 md:w-2/4 border px-3 py-2 md:px-4 md:py-4 rounded-l-lg border-slate-200' type="text" name="" id=""  placeholder='email herer..'/>
            <label htmlFor="Subs" className='px-1 text-sm md:px-10 py-3 md:py-5 text-white bg-blue-800 rounded-r-md'>Subscribe</label>
        </div>
     </div>
    </div>
  )
}

export default News