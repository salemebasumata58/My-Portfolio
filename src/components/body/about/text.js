import TypeWriterEffect from 'react-typewriter-effect';
import React from "react";  
function Text (){
     return (
        <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: 'blue',
          fontWeight: 500,
          fontSize: '1.5em',
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
        startDelay={300}
        cursorColor="blue"
        multiText={[
          'I am Salem Basumata',
          
        ]}
        multiTextDelay={1000}
        typeSpeed={300}
        
      />
     )
  }
  
  export  {Text }
  
