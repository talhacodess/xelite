import React from 'react'
import './App.css'
import ContactUs from '../pages/ContactUs'
import SingleProduct from '../pages/SingleProduct'
import { Route, Router, Routes } from 'react-router'
import AboutUs from '../pages/AboutUs'
import Blog from '../pages/Blog'
import BlogSingle from '../pages/BlogSingle'
import Cart from '../pages/cartShopping/Cart'
import Profile from '../pages/profile/Profile'
import ShippingNdPackaging from '../pages/ShippingNdPackaging'
import ReturnsExchangesPolicy from '../pages/ReturnsExchangesPolicy'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<ContactUs />} />
        <Route path='/single-product' element={<SingleProduct />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/single-blog' element={<BlogSingle/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/shipping-packaging' element={<ShippingNdPackaging/>} />
        <Route path='/Our-Returns-and-Exchanges-Policy' element={<ReturnsExchangesPolicy/>} />
    

      </Routes>


    </>
  )
}

export default App
