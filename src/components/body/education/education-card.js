import React from 'react';
import "./education-card.css"

function EducationCard({item}) {
  return (
    <div className='education-card'>
        <img src={item.logo} className="education-logo" alt=''/>
         <div className='education-info'>
             <label className='education-title'>{item.title}</label>
             <div className='education-dates'>
                 <label>{item.time}</label>

             </div>
             <div className='education-desc'>
                 <p>{item.name}</p>
                 <p>{item.stream}</p>
             </div>
         </div>
        
    </div>
  )
}

export default EducationCard