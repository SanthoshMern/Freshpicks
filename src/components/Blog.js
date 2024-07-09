import React from 'react'
import "./Blog.css"
import Cheader from './Cheader'
import Footer from './Footer'
import Cbanner from './Cbanner'

function Blog() {
  return (
    <>
    <Cheader/>
    <Cbanner/>
    <br></br>
    <div className='blogimg'>Blog</div>
    <Footer/>
    </>
  )
}

export default Blog