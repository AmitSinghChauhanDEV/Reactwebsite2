import React from 'react'
import web from "../src/images/30076441.jpg";
import Common from './Common';
 const About =()=>{
     return(
         <>
         <Common 
          name='Welcome to About page'
          imgsrc={web}
          visit="/contact" 
          btname="Contact Now"/>
         </>
     )
 }
  export default About;