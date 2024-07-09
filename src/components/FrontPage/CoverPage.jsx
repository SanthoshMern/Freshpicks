import React from 'react';
import { Link, Route,Routes, useNavigate } from 'react-router-dom';
import Header from './../Header';
import './../FrontPage/CoverPage.css';


function CoverPage() {
  return (
    <>
    <header className='header'>
      <div className='header-content'>
        <div className='content'><br></br><br></br><br></br><br></br><br></br>
        <h1 className='heading'>What are your favorite Fruits & Vegetables <span></span></h1>
        <h5 className='text'>personalize your experience <span></span></h5>
        <Link style={{textDecoration: 'none'}} to={'/Header'}><h2 className='start'>Get Started</h2></Link>
        </div>
      </div>
      </header>
    </>
  )
}

export default CoverPage