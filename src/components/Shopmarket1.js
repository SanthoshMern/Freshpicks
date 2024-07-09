// import './../components/shopmarket1.css';
// import { Link } from 'react-router-dom';
// import { ContextProvide } from "../Context.jsx";
// import React, { useContext, useState, useEffect } from "react";
// import axios from 'axios'

// function Shopmarket1() {
//   const [items, setItems, cart, setCart, catagory, setCatagory] = useContext(ContextProvide);

//   const [Products, setProducts]= useState([])

//   useEffect(() => {
//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost:5555/submit-form');
//             setProducts(response.data); 
//             console.log(response.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     fetchData();
// }, []); 

//   const handleAdd=(e,item)=>{
//     setCatagory(item.name)
//   }

//   return (
//     <div className='container-fluid sec'>
//         <div className='row'><h3 className='shop-head'>SHOP MARKETS</h3></div>
//             <div className='row'>
//               {
//                 Products.map((data)=>{
//                   return (
//                     <div className='col-lg-2 col-md-6 col-sm-4'>
//                     <div className='container circle1' onClick={(e)=>handleAdd(e,data)}>
//                     <Link className='remove' to="/list">
//                     <img src={`http://localhost:5555/${data.file.path}`}/>
//                     <h4 className='shop-title'>{data.ItemName}</h4>
//                     <h5 className='shop-des'>{data.ItemQuantity}</h5>
//                     </Link>
//                     </div>
//                 </div>
//                   );
//                 })
//               }
//       </div>
//   </div>
//   )
// }
// export default Shopmarket1