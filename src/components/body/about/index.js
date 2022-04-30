import React from 'react';
import SocialContact from '../../common/social-contact';
import "./about.css";
import {Text} from './text'

function About() {
  return (
    <div className='about'>
     <div className='about-top'>
        <div className='about-info'>
        Hey 👋...
   <br/><span className='info-name'><Text/></span>
    <br/>Welcome to my portfolio !
    <br/>I am a passionate Full Stack Web Developer who focuses on writing clean
      and user-friendly applications.
     
        </div>
        <div className='about-photo'>
            <img src={require("../../../assets/pic.jpg")}
            alt=""
            className='picture'/>

        </div>
     </div>
    <SocialContact/>
        
    </div>
  )
}

export default About