import React from 'react'
import logo from '../../src/assets/xelite-silk.svg'

function LoginSignup() {
    return (
        <div className='h-screen flex justify-center items-center inset-0 bg-[#c5a980]  '>

            <div className='w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg blur-none'>
                <div className='flex justify-center items-start flex-col'>
                    <img src={logo} alt="" className='w-full h-20 ' />
                    <h3 className='text-2xl font-medium'>Login</h3>
                    <div>
                        <form action="">
                            <div className='flex flex-col gap-5 mt-5'>
                                <div ><input type="email" placeholder='Enter Your Email' className='w-full outline-1 outline-[#dedede] p-3 rounded-md  focus:shadow focus:outline-2 focus:outline-[#c5a980]' /></div>
                                <div><input type="password" placeholder='Enter your Password' className='w-full outline-1 outline-[#dedede] p-3 rounded-md  focus:shadow focus:outline-2 focus:outline-[#c5a980]' /></div>
                            </div>
                            <div className='grid grid-cols-2 gap-5 mt-10'>
                                <div className='space-x-2'><input type="checkbox"  /><label>Remember me</label></div>
                                <div><p className='underline hover:text-red-600 cursor-alias'>Forgot Your Password?</p></div>

                            </div>

                        </form>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default LoginSignup
