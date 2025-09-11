import React from 'react'
import './App.css'
import ContactUs from '../pages/ContactUs'
import SingleProduct from '../pages/SingleProduct'
import { Route, Router, Routes } from 'react-router'
import AboutUs from '../pages/AboutUs'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<ContactUs />} />
        <Route path='/single-product' element={<SingleProduct />} />
        <Route path='/about-us' element={<AboutUs />} />

      </Routes>


    </>
  )
}

export default App
