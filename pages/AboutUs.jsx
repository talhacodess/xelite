import React from 'react'
import banner from '../src/assets/about-banner.jpg'

function AboutUs() {
  return (
    <div
      className="pt-16 pb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-white">About Us</h3>
          <span className="text-sm text-gray-200">Homepage / Pages / About Us</span>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
