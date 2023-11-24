'use client';
import React from 'react';
import Link from 'next/link';
import logo from './logo.jpg'
import { useState } from 'react';
import "./nav.css"

function Navbar() {
  const [status, setStatus ] = useState(false);
  const setNav = ()=>{
    setStatus(!status)
  }
  return (
    <header>
      <nav className='navbar'>
           <div className='logo  '></div>
            <div className='burger' onClick={setNav}>
            {/* <div className='logo fixed'></div> */}
              {status?
              <svg xmlns="http://www.w3.org/2000/svg" 
              width="30" height="30" fill="#000" 
              class="bi bi-x-lg" viewBox="0 0 16 16">           
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg> 
            :  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>}
            </div>

          <div  className={status ? `menu ` : `menux`}>
            <ul className='text-blue-900'>
              <li><Link  href="/">HOME</Link></li>
              <li><Link href="/about">ABOUT US</Link></li>
              <li><Link href="/services">SERVICES</Link></li>
              <li><Link href="/portfolio">PORTFOLIOS</Link></li>
              <li><Link href="#">BLOGS</Link></li>
              <li><Link href="/career">SVET</Link></li>
            </ul>
            <Link className='account' href="/" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg> Account</Link>
             
          </div>
      </nav>
      </header>
  )
}

export default Navbar;