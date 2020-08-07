import React from 'react'
import web from "../src/images/home.jpg";
import Common from './Common';
 const Home =()=>{
     return(
         <>
        <Common 
         name='Grow Your website with'
         imgsrc={web}
         visit="/service" 
         btname="Get Started"
        />
        
         </>
     )
 }
  export default Home;