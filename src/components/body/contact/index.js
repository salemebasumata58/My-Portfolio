import React from 'react'
import Separator from '../../common/separator';
import SocialContact from '../../common/social-contact';
import "./contact.css";

function Contact() {
  return (
    <div className='contact'>
      <Separator/>
       <label className='section-title'>Contact</label>
       <div className='contact-container'>
         <div className='contact-left'>
           <h3>Want to get in touch? Contact me on any of the platform</h3>
           <SocialContact/>
         </div>
         <div>
         <p>Connect with me on Call: 7908292815</p>
         <p>Email: sbasumatas58@gmail.com</p>
         </div>
        
         {/* <div className='download'>
           <a download href={require("../../../assets/resume.pdf")}>
           <i class="fi fi-rr-download"></i>
           Download Resume
          </a>
         </div> */}
      </div>      
    </div>
  );
}

export default Contact;