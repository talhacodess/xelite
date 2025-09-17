import React from 'react'
import './App.css'
import ContactUs from '../pages/ContactUs'
import SingleProduct from '../pages/SingleProduct'
import { Route, Router, Routes } from 'react-router'
import AboutUs from '../pages/AboutUs'
import Blog from '../pages/Blog'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<ContactUs />} />
        <Route path='/single-product' element={<SingleProduct />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/blog' element={<Blog/>} />

      </Routes>


    </>
  )
}

export default App
