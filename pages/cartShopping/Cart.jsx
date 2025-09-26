import React from 'react'
import banner from '../../src/assets/about-banner.webp'
import fire from '../../src/assets/icon-fire.png'
import cartimg from '../../src/assets/product-cart.webp'

function Cart() {
    return (
        <>
            <div className='container-fluid mx-auto'>
                <div
                    className="md:pt-30 pt-10 md:pb-20 pb-10 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${banner})` }}
                >
                    <div className=" text-center w-full">

                        <div className="flex flex-col bg-[#ffffffca] justify-center items-center gap-4 md:p-10 p-2 rounded-md md:w-2xl w-[300px] mx-auto">
                            <h3 className="md:text-4xl text-lg font-semibold text-[#454444]  text-balance md:leading-10 leading-6">Cart</h3>
                            <span className="md:text-lg text-sm text-gray-500">Homepage / Cart</span>

                        </div>
                    </div>
                </div>

            </div>

            {/**  main cart section*/}
            <div className='container mx-auto py-10 px-2'>
                <div className='grid grid-cols-12'>
                    {/** Left side cart*/}
                    <div className=' col-span-8'>
                        <div className='flex justify-center items-center'>
                            <div className='flex justify-center items-center p-2 bg-[#f5f5f5] gap-3 rounded-md text-lg'><img src={fire} alt="" className='h-7 animate-pulse' /> Your cart will expire in Time's up! minutes! Please checkout now before your items sell out!</div>
                        </div>
                        <div>
                            <table class=" table-auto text-left w-full">
                                <thead className='border-b '>
                                    <tr >
                                        <th className='p-2'>Products</th>
                                        <th className='p-2'>Price</th>
                                        <th className='p-2'>Quantity</th>
                                        <th className='p-2'>Total</th>
                                    </tr>
                                </thead>
                                <tbody className=''>
                                    <tr className=''>
                                        <td>
                                            <div className='flex gap-3 justify-start items-center'>
                                                <img src={cartimg} alt="" className='h-50' />
                                                <h5>Campo de' Fiori - Long Silk Scarf - Coral</h5>
                                                </div>
                                            </td>
                                        <td>$125.00</td>
                                        <td>1961</td>
                                        <td>$125.00</td>
                                    </tr>
                                    <tr>
                                        <td>Witchy Woman</td>
                                        <td>The Eagles</td>
                                        <td>1972</td>
                                    </tr>
                                    <tr>
                                        <td>Shining Star</td>
                                        <td>Earth, Wind, and Fire</td>
                                        <td>1975</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className=' col-span-4'></div>
                </div>


            </div>
        </>
    )
}

export default Cart
