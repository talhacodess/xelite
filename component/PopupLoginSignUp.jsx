import React, { useRef, useState } from 'react'
import logo from '../src/assets/xelite-silk.svg'

function PopupLoginSignUp({onClose}) {

    const [activeTab, setActiveTab] = useState(0)
    const title = [{ id: 1, name: "Login" }, { id: 2, name: "Sign Up" }]
    const content = [
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
    
    
                </div>,
                 <div className='w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-lg blur-none'>
                    <div className='flex justify-center items-start flex-col'>
                        <img src={logo} alt="" className='w-full h-20 ' />
                        <h3 className='text-2xl font-medium'>Sign Up</h3>
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

    ]
    const modelRef = useRef()

    let closeModel = (e) => {
        if(modelRef.current === e.target){
            onClose();
            console.log(e.target,"check");
        }
    }
  return (
      <div ref={modelRef} onClick={closeModel} className=' fixed inset-0  backdrop-blur-sm z-[9999] flex justify-center items-center bg-[#00000084] '>
        <div className='flex flex-col'>
             <div>
            {title.map((btn,index)=>(
                <button onClick={()=>setActiveTab(index)} className={`py-3 px-8 font-medium ${activeTab===index ? 'border-b-2 border-[#c5a980]':''}`}>{btn.name}</button>
            ))}
        </div>

        <div className='w-full'>
            {content && content.map((cont, index)=>(
                <div key={index} className={`${activeTab===index ? 'block':'hidden'}`}>
                    {cont}
                </div>
            ))}
         
        </div>
        </div>

       
    
              
    
            </div>
  )
}

export default PopupLoginSignUp
