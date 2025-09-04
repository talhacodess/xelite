import React from 'react'
import tape from "../src/assets/icon.tape_measure.svg"
import heart from "../src/assets/icon.heart.svg"
import truck from "../src/assets/icon.truck.svg"
import retusn from '../src/assets/icon.return.svg'
import three from '../src/assets/three.webp'
import one from '../src/assets/one.webp'
import two from '../src/assets/two.webp'
import FaqComp from '../component/FaqComp'

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
  
          <div className='grid grid-cols-2 gap-5'>
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
                <div className=' w-full h-full col-span-10'>
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
                <div>
                    <FaqComp title={"Xelitesilks's Inspiration"} answer={"This long silk scarf features a classic Toile de Jouy motif—pastoral French scenes drawn in delicate, single-tone detail - framed by maiolica tile borders inspired by hand-painted ceramics from Southern Italy."} />
                    <FaqComp title={"Details"} answer={" Approx. 20” x 67” (53 x 170cm). Years of trial and error taught us that this size scarf is one of the simplest to style and makes every woman look chic."} />
                    <FaqComp title={"Styling Guide"} answer={"Wondering how to style your scarf? Get inspired in our guide "} />
                </div>
               
               
                
            </div>
            
        </div>
    </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-16 px-4 md:px-20">
  {/* Feature 1 */}
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-6">
      <h3 className="text-lg font-medium text-gray-800 px-4 relative inline-block">
        <span className="relative z-10 bg-white px-2">We take the extra steps to make our scarves exceptional</span>
        <span className="absolute top-1/2 left-0 right-0 border-t border-gray-300 z-0"></span>
      </h3>
    </div>
    <img
      src={one} // Replace with your actual image import or URL
      alt="Scarf Crafting"
      className="w-full h-72 object-cover rounded-md mb-4"
    />
    <p className="text-sm text-gray-600">
      From the design to the final hem, each piece is crafted in small workshops and carefully inspected to ensure it meets our highest standards of quality.
    </p>
  </div>

  {/* Feature 2 */}
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-6">
      <h3 className="text-lg font-medium text-gray-800 px-4 relative inline-block">
        <span className="relative z-10 bg-white px-2">100% Made in Como, Italy</span>
        <span className="absolute top-1/2 left-0 right-0 border-t border-gray-300 z-0"></span>
      </h3>
    </div>
    <img
      src={two} // Replace with your actual image import or URL
      alt="Made in Italy"
      className="w-full h-72 object-cover rounded-md mb-4"
    />
    <p className="text-sm text-gray-600">
      Indulge in the luxury of Como silk – world-renowned for its exquisite craftsmanship and finest silk. Passed down through generations.
      <br />
      <span className="block mt-2 font-medium">You will see and feel the difference.</span>
    </p>
  </div>

  {/* Feature 3 */}
  <div className="flex flex-col items-center text-center">
    <div className="relative mb-6">
      <h3 className="text-lg font-medium text-gray-800 px-4 relative inline-block">
        <span className="relative z-10 bg-white px-2">Exceptional eco-friendly print quality</span>
        <span className="absolute top-1/2 left-0 right-0 border-t border-gray-300 z-0"></span>
      </h3>
    </div>
    <img
      src={three} // Replace with your actual image import or URL
      alt="Eco-friendly Print"
      className="w-full h-72 object-cover rounded-md mb-4"
    />
    <p className="text-sm text-gray-600">
      We’re proud to use non-toxic vegetable dyes in a modern, innovative printing process that’s kinder to the planet. GOTS and Seri.Co certified.
    </p>
  </div>
</div>


  
   </div>
   </>
  )
}

export default SingleProduct
