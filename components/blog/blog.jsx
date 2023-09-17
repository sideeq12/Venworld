import React from 'react'
import "./blog.css"

function Blog() {
  return (
    <div className='w-full px-10 md:px-20  py-30 mt-10 md:mt-20 mb-20 md:mb-5'>
        <h2 className='text-4xl font-extrabold mb-5'>Our Blog</h2>
        <p className=' w-full md:w-3/5'>Follow our latest news and touches which focus exclusively on design
        , art , vintages and also work updates.</p>
        <div className='flex flex-col md:flex-row gap-2 mt-5'>
            <div className="w-full rounded-lg md:w-3/5 border h-full relative blogfirst"> 
            <div className='mt-auto px-4 py-4  blogcy w-full h-1/2 md:h-48 text-white absolute bottom-0'>
                <h3 className='font-bold text-sm md:text-xl mb-2'>
                Congratulations are in order to our Head of Graphics Designer at VenWorld Global (Josiah Damilare)
                Honored as PROLIFIC GRAPHIC DESIGNER
                </h3>
                <p className='text-sm'> Meet Josiah also known as eternal, prolific designer with over decade of experience in industry
                    <a> Read more</a> </p>
                    <div className='text-sm mt-1 md:mt-2'> <button
                      className='px-2 py-1 bg-slate-100 mr-3 text-black rounded-sm'>  Learn more</button>
                        <span className='mr-3 text-sm'> April 20, 2021</span>
                        <span>Award & recognition</span>
                    </div>
            </div>
            </div>
            <div className='w-full md:w-2/5  h-96'>
                <div className='h-48 border border-cyan second relative'>
                    <div className='absolute bottom-0 text-white px-3 pb-4'>
                    We research, build and design the design the best tools, to make your web development idea
                    becomes reality, with branded .. 
                    <button className='px-1 py-1 bg-slate-100 mr-3 text-black text-sm rounded-sm'>Learn more</button>
                    </div>
                </div>
                <div className='h-48 border border-cyan mt-2 third relative'>
                <div className='absolute bottom-0 text-white px-3 pb-4'>
                Venworld Global is in affiliation with Golden Signature Advertising LLC Dubai, United Arab Emirates for .......
                    <button className='px-1 py-1 bg-slate-100 mr-3 text-black text-sm rounded-sm'>Learn more</button>
                    </div>
                    </div>
            </div>
            
        </div>
        </div>
  )
}

export default Blog