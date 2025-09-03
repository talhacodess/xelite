import React from 'react'
import './App.css'
import ContactUs from '../pages/ContactUs'
import SingleProduct from '../pages/SingleProduct'
import { Route, Router, Routes } from 'react-router'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<ContactUs />} />
        <Route path='/single-product' element={<SingleProduct />} />

      </Routes>


    </>
  )
}

export default App
