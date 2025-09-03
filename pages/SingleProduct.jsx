import React from 'react'

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
            <div>
                <h1 className='text-4xl leading-12 mb-2'>V-neck cotton T-shirt</h1>
                <div className="reviews">⭐⭐⭐⭐⭐<span className='text-[#4d4e4f]'>(134 reviews)</span></div>
                <p className='text-3xl font-semibold my-5'>$19.00</p>
                
            </div>
            
        </div>
    </div>
    
  
   </div>
   </>
  )
}

export default SingleProduct
