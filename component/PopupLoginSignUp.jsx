import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { IoClose } from "react-icons/io5"
import logo from '../src/assets/xelite-silk.svg'

function PopupLoginSignUp({ onClose }) {
  const [activeTab, setActiveTab] = useState(0)
  const modelRef = useRef()

  let closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  }

  // Animation Variants
  const tabVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  }

  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="fixed inset-0 backdrop-blur-sm z-[9999] flex justify-center items-center bg-black/20"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden m-1">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
        >
          <IoClose />
        </button>

        {/* Logo */}
        <div className="flex justify-center pt-6">
          <img src={logo} alt="logo" className="h-16" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-4 border-b border-gray-200">
          {["Login", "Sign Up"].map((name, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`py-3 px-8 font-medium transition-all duration-300 
                ${activeTab === index
                  ? "border-b-2 border-[#c5a980] text-[#c5a980]"
                  : "text-gray-500 hover:text-[#c5a980]"}`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div
                key="login"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Welcome Back</h3>
                <form className="space-y-5">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#c5a980] outline-none"
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#c5a980] outline-none"
                  />

                  <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" /> Remember me
                    </label>
                    <p className="text-[#c5a980] hover:text-red-600 cursor-pointer">
                      Forgot Password?
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-md bg-[#c5a980] text-white font-medium hover:bg-[#b4976e] transition"
                  >
                    Login
                  </button>
                </form>
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div
                key="signup"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-6">Create an Account</h3>
                <form className="space-y-5">
                  <div className='grid grid-cols-2 gap-2'>
                    <div> <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#c5a980] outline-none"
                  /></div>
                    <div> <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#c5a980] outline-none"
                  /></div>
                  </div>
                  <div className='grid md:grid-cols-1  gap-2'>
                    <div>  <input
                    type="password"
                    placeholder="Password"
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#c5a980] outline-none"
                  /></div>
                    <div>   <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#c5a980] outline-none"
                  /></div>

                  </div>
                 
                 
                
               

                  <div className="flex items-center gap-2 text-sm">
                    <input type="checkbox" />
                    <label>
                      I agree to the{" "}
                      <span className="text-[#c5a980] underline cursor-pointer">
                        Terms & Conditions
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-md bg-[#c5a980] text-white font-medium hover:bg-[#b4976e] transition"
                  >
                    Sign Up
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default PopupLoginSignUp
