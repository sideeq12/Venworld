import React from 'react';
import "./about.css"

function Bars() {
  return (
    <div className='bars'>
      <div className="high"> <div>UI/UX DESIGN</div> 65%</div>
        <div className="bar">
    <div className="Ux"><span></span></div>
        </div>

        <div className="high"> <div>MARKETING</div> 90%</div>
        <div className="bar">
    <div className="Market"><span></span></div>
        </div>

        <div className="high"> <div>WEB DEVELOPMENT</div> 70%</div>
          <div className="bar">
    <div className="Web"><span></span></div>
        </div>
    </div>
  )
}

export default Bars