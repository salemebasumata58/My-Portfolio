import React, { useState } from 'react';
import "./header.css";
import Web from './web';
import Mobile from "./mobile"
function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='header'>
       <div className='download'>
           <a download href={require("../../assets/resume.pdf")}>
           <i class="fi fi-rr-download"></i>
           Download Resume
          </a>
         </div>
      <div className='menu'>
        <div className='web-menu'>
        <Web/>
        </div> 
        <div className='mobile-menu'>
            <div onClick={() =>setIsOpen(!isOpen)}>
            <i class="fi fi-rr-apps menu-icon"></i>
            </div>
            {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}

        </div> 
      </div> 
    </div>
  )
}

export default Header;