import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Errorpage from './components/Errorpage';
import Blog from './components/Blog';
import Product from './components/Product';
import Cart from './components/Cart';
import List from './components/List';
import LoginPage from './components/Login/LoginPage.jsx';
import { Context } from './Context';
import CoverPage from './components/FrontPage/CoverPage';
import Profile from './components/Login/Profile.jsx';
import Register from './components/Login/Register.jsx';
import UpdateProfile from "./components/Login/UpdateProfile.jsx";
import ScrollToTop from './components/ScrollToTop.js';
import SignedForm from './components/SignedForm.js';
import Wishlist from './components/Wishlist.js';

function App() {
  return (
    <div>
      <Context>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<CoverPage/>} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/Wishlist" element={<Wishlist/>} />
      <Route path="/list" element={<List/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Errorpage" element={<Errorpage/>} />
      <Route path="/Header" element={<Header/>} />
      <Route path="/Login" element={<LoginPage/>} />
      <Route path='/Profile' element={<Profile />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/profileupdate/:id' element={<UpdateProfile />}></Route>
      <Route path="/signedform" element={<SignedForm/>}></Route>
      </Routes>
      <ScrollToTop/>
      </BrowserRouter>
      </Context>
    </div>
  );
}
export default App;