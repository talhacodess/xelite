import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import banner from '../src/assets/about-banner.webp'
import team1 from '../src/assets/blog-grid-1.jpg'
import team2 from '../src/assets/blog-grid-2.jpg'
import team3 from '../src/assets/blog-grid-3.jpg'
import team4 from '../src/assets/blog-grid-4.jpg'

function Blog() {
    const teams = [
        { title: 'How Technology is Transforming the Industry', image: team1, excerpt: 'Maria founded the company in 2004 with a vision to bring authentic Italian craftsmanship to the world.' },
        { title: 'The Future of Fashion How Technology Transforms the Industry', image: team2, excerpt: 'Francesca joined the team in 2020, bringing fresh ideas and a modern touch to our classic designs.' },
        { title: 'From Concept to Closet The Journey of Sustainable Fashion', image: team3, excerpt: 'Luca oversees our production process, ensuring every piece meets our high standards of quality.' },
        { title: 'Unlocking Style Potential Personalization in Fashion Retail', image: team4, excerpt: 'Giulia manages our marketing efforts, connecting us with customers around the globe.' },
    ];
    return (
        <>
            <div className='container-fluid mx-auto'>
                <div
                    className="md:pt-30 pt-10 md:pb-20 pb-10 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${banner})` }}
                >
                    <div className=" text-center w-full">

                        <div className="flex flex-col bg-[#ffffffca] justify-center items-center gap-4 md:p-10 p-2 rounded-md md:w-2xl w-[300px] mx-auto">
                            <h3 className="md:text-4xl text-lg font-semibold text-[#454444]  text-balance md:leading-10 leading-6">Blog</h3>
                            <span className="md:text-lg text-sm text-gray-500">Homepage / Blog</span>

                        </div>
                    </div>
                </div>

            </div>
            <div className='container mx-auto py-10 px-2'>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
                    {teams.map((member, index) => (
                        <div key={index} className="flex flex-col justify-center items-start gap-2 p-5 group  shadow rounded-2xl hover:shadow-lg transition-shadow duration-300 ">
                            <img src={member.image} alt={member.name} className="w-full object-cover rounded-lg shadow-lg" />
                            <div className='w-full flex justify-between items-center mt-5'>
                                <div className='flex justify-between items-center gap-2 text-sm'><span><CiCalendar size={20} /></span>February 28, 2024</div>
                                <div className='flex justify-between items-center gap-2 text-sm'><span><CiUser size={20} />
                                </span>Admin</div>
                            </div>

                            <h4
                                className="mt-3 font-semibold md:text-2xl text-xl relative inline-block 
                               after:content-[''] after:absolute after:left-0 after:bottom-0
                               after:h-[2px] after:w-0 after:bg-black
                               after:transition-all after:duration-300 
                               after:ease-[cubic-bezier(0.215,0.61,0.355,1)]
                               group-hover:after:w-full group-hover:text-[#c5a980] cursor-pointer text-pretty"
                            >
                                {member.title}
                            </h4>


                            <p className="text-start md:text-lg text-sm text-pretty text-[#4d4e4f]">{member.excerpt}</p>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog
