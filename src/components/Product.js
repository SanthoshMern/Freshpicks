import React from 'react'
import './../components/Product.css'
import Shopmarket from './Shopmarket'
import Newarrival from './Newarrival'
import Trending from './Trending'
import Featured from './Featured'
import Cheader from './Cheader'

function Product() {
  return (
    <>
    <Cheader/>
    <div>
    <h1 className='productstyle'>PRODUCTS</h1></div>
        <Shopmarket/>
        <Newarrival/>
        <Trending/>
        <Featured/>
    </>
  )
}

export default Product