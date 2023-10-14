import React from 'react'
import BannerCard from '../home/BannerCard'
const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='gap-12 py-40 flex w-full flex-col md:flex-row justify-between items-center'>
            {/* left side */}
            <div className='space-y-8 md:w-1/2 h-full '>
                <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books with <span className='text-blue-700'>Bookify</span></h2>
                <p className='md:w-4/5 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio aliquam autem provident, incidunt dignissimos necessitatibus ad quia excepturi nostrum sequi!</p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search a book' className='p-2 rounded-l-lg outline-none' />
                    <button className='bg-blue-700 px-6 py-2 rounded-r-lg text-white font-medium hover:bg-black transition-all ease-in duration-300'>Search</button>
                </div>
            </div>
            {/* right side  */}
            <div className='lg:pr-10 xl:pr-28'>
                <BannerCard/>
                <p className='text-center uppercase text-blue-400'>turn these pages</p>
            </div>
        </div>
    </div>
  )
}

export default Banner