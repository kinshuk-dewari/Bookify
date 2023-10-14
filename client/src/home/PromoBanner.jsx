import React from 'react'
import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <div className=' mt-16 py-12  bg-teal-100 px-4 lg:px24'>
        <div className='flex flex-col md:flex-row justify-between gap-12 items-center'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>I will diplay paid ADDs here!</h2>
                <Link to="/promo">
                    <button className=' bg-blue-700 text-base text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                        Get Promo Code 
                    </button> 
                </Link>
            </div>
            <img src="./src/assets/promotion2.png" alt="Promotion hai bhai yaha" className='rounded  h-[16rem]' />
        </div>

    </div>
  )
}

export default PromoBanner