import React from 'react'
import tape from "../src/assets/icon.tape_measure.svg"
import heart from "../src/assets/icon.heart.svg"
import truck from "../src/assets/icon.truck.svg"
import retusn from '../src/assets/icon.return.svg'

function SingleProduct() {
    const [images,setImages] = React.useState({
        image:"https://modavereact.vercel.app/images/products/womens/women-7.jpg",
        image2:"https://modavereact.vercel.app/images/products/womens/women-6.jpg",
        image3:"https://modavereact.vercel.app/images/products/womens/women-7.jpg",
        image4:"https://modavereact.vercel.app/images/products/womens/women-7.jpg",
        image5:"https://modavereact.vercel.app/images/products/womens/women-23.jpg",
        image6:"https://modavereact.vercel.app/images/products/womens/women-24.jpg"


    });
    const [activeImage,setActiveImage] = React.useState(images.image);

  
    
  return (
   <>
   <div className='container mx-auto my-10 px-5'>
  
          <div className='grid grid-cols-2'>
        <div>
            <div className='grid grid-cols-12 '>
                <div className='col-span-2 flex flex-col gap-1'>
                    <img className='w-[80px] h-[110px] rounded' onClick={()=>setActiveImage(images.image)} src={images.image} alt="" />
                    <img className='w-[80px] h-[110px] rounded'onClick={()=>setActiveImage(images.image2)} src={images.image2} alt="" />
                    <img className='w-[80px] h-[110px] rounded' onClick={()=>setActiveImage(images.image3)} src={images.image3} alt="" />
                    <img className='w-[80px] h-[110px] rounded'onClick={()=>setActiveImage(images.image4)} src={images.image4} alt="" />
                    <img className='w-[80px] h-[110px] rounded'onClick={()=>setActiveImage(images.image5)} src={images.image5} alt="" />
                    <img className='w-[80px] h-[110px] rounded'onClick={()=>setActiveImage(images.image6)} src={images.image6} alt="" />
                    <img className='w-[80px] h-[110px] rounded'onClick={()=>setActiveImage(images.image6)} src={images.image6} alt="" />

                </div>
                <div className='col-span-10'>
                    <img src={activeImage} className='  rounded' alt="" />
                </div>

            </div>
        </div>
        <div>
            <div className='py-10'>
                <h1 className='text-4xl leading-12 mb-2'>V-neck cotton T-shirt</h1>
                <div className="reviews">⭐⭐⭐⭐⭐<span className='text-[#4d4e4f]'>(134 reviews)</span></div>
                <p className='text-3xl font-semibold my-5'>$19.00</p>
                <div>
                     <h2 className='mb-4'>Colors: <span>Grey</span></h2>
                     <div className='flex flex-row gap-2'>
                        <button className='bg-amber-600 shadow-2xl border border-[#4d4e4f] rounded-full p-4'></button>
                        <button className='bg-black shadow-2xl border border-[#4d4e4f] rounded-full p-4'></button>
                        <button className='bg-blue-900 shadow-2xl border border-[#4d4e4f] rounded-full p-4'></button>
                        <button className='bg-red-950 shadow-2xl border border-[#4d4e4f] rounded-full p-4'></button>
                        <button className='bg-white shadow-2xl border border-[#4d4e4f] rounded-full p-4'></button>
                        </div>
                   

                </div>
                <p className='text-lg mt-3 text-[#5d8fc1] font-light'>Alert me when available</p>
                <div className='my-10 flex flex-col gap-4'>
                     <div className='flex gap-2 text-[#4d4e4f]'><img src={tape} alt="" /> <span> 20 x 67" (53 x 170cm)</span></div>
                <div className='flex gap-2 text-[#4d4e4f]'><img src={truck} alt="" /> <span>Free and express US shipping </span><span className='text-[#5d8fc1]'>See details</span></div>
                <div className='flex gap-2 text-[#4d4e4f]'><img src={retusn} alt="" /> <span>Free 14 day US returns </span><span className='text-[#5d8fc1]'>See details</span></div>
                <div className='flex gap-2 text-[#4d4e4f]'><img src={heart} alt="" /> <span>100% Handmade in Italy</span></div>

                </div>
               
               
                
            </div>
            
        </div>
    </div>
    
  
   </div>
   </>
  )
}

export default SingleProduct
