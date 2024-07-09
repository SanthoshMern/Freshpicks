import React from 'react'
import './../components/Banner.css';
import img from "./../assets/images/feature-bg.jpeg";

function Cbanner() {
  return (
<>
       <div className='container-fluid'>
       <img className='cbanner' style={{width:"100%" , height:"300px"}} src={img}></img>
      </div>
</>
  )
}
export default Cbanner