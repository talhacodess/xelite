import React from 'react'
import tape from "../src/assets/icon.tape_measure.svg"
import heart from "../src/assets/icon.heart.svg"
import truck from "../src/assets/icon.truck.svg"
import retusn from '../src/assets/icon.return.svg'
import three from '../src/assets/three.webp'
import one from '../src/assets/one.webp'
import two from '../src/assets/two.webp'
import who from '../src/assets/2.webp'
import how from '../src/assets/1.webp'
import where from '../src/assets/3.webp'
import FaqComp from '../component/FaqComp'
import SingleProductTabs from '../component/SingleProductTabs'

function SingleProduct() {
  const [images, setImages] = React.useState({
    image: "https://modavereact.vercel.app/images/products/womens/women-7.jpg",
    image2: "https://modavereact.vercel.app/images/products/womens/women-6.jpg",
    image3: "https://modavereact.vercel.app/images/products/womens/women-176.jpg",
    image5: "https://modavereact.vercel.app/images/products/womens/women-23.jpg",
    image6: "https://modavereact.vercel.app/images/products/womens/women-24.jpg"
  });

  const [activeImage, setActiveImage] = React.useState(images.image);

  return (
    <>
      <div className='container mx-auto my-10 px-5'>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {/* Left sticky gallery (desktop only) */}
          <div className="md:sticky md:top-24 md:self-start">
            <div className="flex gap-5 md:flex-row  flex-col-reverse">
              {/* Thumbnails */}
              <div className="flex md:flex-col flex-row overflow-x-auto md:overflow-y-auto gap-2">
                {Object.values(images).map((img, i) => (
                  <img
                    key={i}
                    className={`w-[80px] h-[110px] rounded cursor-pointer transition-all duration-300 border-2 ${activeImage === img ? 'border-[#c5a980] shadow-lg' : 'border-transparent'}`}
                    onClick={() => setActiveImage(img)}
                    src={img}
                    alt="thumbnail"
                  />
                ))}
              </div>
              {/* Main Image */}
              <div className="w-full h-full">
                <img
                  src={activeImage}
                  className="rounded-xl shadow-md transition-opacity duration-500"
                  alt="active"
                />
              </div>
            </div>
          </div>

          {/* Right column (details) */}
          <div>
            <div className="py-10">
              <h1 className="md:text-4xl text-2xl font-semibold tracking-wide mb-4">V-neck cotton T-shirt</h1>
              <div className="reviews mb-3">
                ⭐⭐⭐⭐⭐ <span className="text-[#4d4e4f]">(134 reviews)</span>
              </div>
              <p className="text-3xl font-semibold mb-6 text-[#111]">$19.00</p>

              {/* Colors */}
              <div className="mb-6">
                <h2 className="mb-3 font-medium text-lg">Colors: <span className='text-[#4d4e4f]'>Grey</span></h2>
                <div className="flex flex-row gap-3">
                  {['bg-amber-600','bg-black','bg-blue-900','bg-red-950','bg-white'].map((color, idx) => (
                    <button
                      key={idx}
                      className={`${color} shadow border border-[#ddd] rounded-full p-5 transition-transform hover:scale-110`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Alert */}
              <p className="text-lg mt-3 text-[#5d8fc1] font-light cursor-pointer hover:underline">
                Alert me when available
              </p>

              {/* Features */}
              <div className="my-10 flex flex-col gap-5 divide-y divide-gray-200">
                <div className="flex items-center gap-3 text-[#4d4e4f]">
                  <img src={tape} alt="tape" className="w-5" /> <span>20 x 67" (53 x 170cm)</span>
                </div>
                <div className="flex items-center gap-3 pt-3 text-[#4d4e4f]">
                  <img src={truck} alt="truck" className="w-5" /> <span>Free and express US shipping</span>
                  <span className="text-[#5d8fc1] cursor-pointer hover:underline">See details</span>
                </div>
                <div className="flex items-center gap-3 pt-3 text-[#4d4e4f]">
                  <img src={retusn} alt="return" className="w-5" /> <span>Free 14 day US returns</span>
                  <span className="text-[#5d8fc1] cursor-pointer hover:underline">See details</span>
                </div>
                <div className="flex items-center gap-3 pt-3 text-[#4d4e4f]">
                  <img src={heart} alt="heart" className="w-5" /> <span>100% Handmade in Italy</span>
                </div>
              </div>

              {/* FAQ */}
              <div className="space-y-4">
                <FaqComp
                  title={"Xelitesilks's Inspiration"}
                  answer={
                    "This long silk scarf features a classic Toile de Jouy motif—pastoral French scenes drawn in delicate, single-tone detail - framed by maiolica tile borders inspired by hand-painted ceramics from Southern Italy."
                  }
                />
                <FaqComp
                  title={"Details"}
                  answer={
                    'Approx. 20” x 67” (53 x 170cm). Years of trial and error taught us that this size scarf is one of the simplest to style and makes every woman look chic.'
                  }
                />
                <FaqComp
                  title={"Styling Guide"}
                  answer={"Wondering how to style your scarf? Get inspired in our guide"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section with alternate bg */}
        <div className="bg-gray-50 py-16 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-20">
            {[{img:one,title:"We take the extra steps to make our scarves exceptional",desc:"From the design to the final hem, each piece is crafted in small workshops and carefully inspected to ensure it meets our highest standards of quality."},{img:three,title:"100% Made in Como, Italy",desc:"Indulge in the luxury of Como silk - world-renowned for its exquisite craftsmanship and finest silk. Our silk scarves are a testament to the skill passed down from generation to generation."},{img:two,title:"Exceptional eco-friendly print quality",desc:"We’re proud to use non-toxic vegetable dyes in a modern, innovative printing process that’s kinder to the planet—using less ink and water while delivering sharp, well-defined patterns."}].map((item,i)=>(
              <div key={i} className="flex flex-col items-center bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300">
                <img src={item.img} alt={item.title} className="w-full h-72 object-cover rounded-lg mb-5 transform transition-transform duration-300 group-hover:scale-105"/>
                <span className="text-lg font-semibold text-center">{item.title}</span>
                <p className="text-sm text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Who / How / Where */}
        <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-16'>
          {[{img:who,label:"who",desc:"Handmade by Italian artisans, carrying generations of silk craftsmanship."},{img:how,label:"how",desc:"Sustainably produced with eco-friendly dyes and timeless design."},{img:where,label:"where",desc:"100% made in Italy, inspired by the country’s rich heritage."}].map((item,i)=>(
            <div key={i} className='flex flex-col items-center p-10 text-center gap-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300'>
              <div className='bg-[#c5a980] p-4 rounded-full mb-2'>
                <img src={item.img} alt={item.label} width={90} height={90} className='object-cover transform transition-transform duration-300 hover:rotate-6'/>
              </div>
              <h4 className='text-3xl font-semibold capitalize'>{item.label}</h4>
              <p className='text-lg text-gray-600'>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* What makes us different */}
        <div className='text-center my-20 px-6 md:px-40 space-y-12'>
          <h3 className='text-3xl font-semibold'>What makes us different</h3>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
            {[{title:"Love it or your money back",desc:["Your happiness is our priority and we are committed to providing you with the best customer service and quality products.","If for any reason, your purchase is not right for you, you can return or exchange it."]},{title:"Slow fashion. Affordable luxury.",desc:["We create timeless products that honor craftsmanship and sustainability.","Our designs are made to last while keeping prices accessible."]},{title:"We make scarves you'll be proud to wear",desc:["Each scarf is an art piece, crafted with care and designed to elevate your wardrobe.","Wear it with confidence, knowing it's made with integrity."]}].map((card,i)=>(
              <div key={i} className='flex flex-col gap-4 border border-gray-200 shadow-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300'>
                <h4 className='text-2xl font-semibold'>{card.title}</h4>
                {card.desc.map((d,j)=>(<p key={j} className='text-lg font-light text-gray-600'>{d}</p>))}
              </div>
            ))}
          </div>
        </div>

        {/* Related / Tabs */}
        <div className='mt-16'>
          <SingleProductTabs/>
        </div>
      </div>
    </>
  )
}

export default SingleProduct