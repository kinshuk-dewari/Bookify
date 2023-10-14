import React from 'react'
import { Link } from 'react-router-dom';
const FavBook = () => {
  return (
    <div className=' px-4 lg:px-25 my-24 flex flex-col md:flex-row gap-12 items-center justify-between'>
        <div className='lg:pl-24 md:w-1/2 '>
            <img src="./src/assets/favbooks.webp" alt="Fav Books" className='rounded md:w-10/12' />
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl  font-bold my-5 md:w-3/4'>
                Find Your Favourite 
                <span className='text-blue-700'> Book Here !</span>
                <p className=' text-gray-500 md:w-1/2 text-lg mb-10'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt asperiores enim facere blanditiis voluptate sequi, tempora rerum odio tempore aut!</p>
            
                <div className=' flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                    <div>
                        <h3 className='text-3xl font-bold'>30+</h3>
                        <p className='text-base'>Book Listings</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>2+</h3>
                        <p className='text-base'>Register Users</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>24+</h3>
                        <p className='text-base'>Downloads</p>
                    </div>
                </div>
                 
                <Link to="/shop">
                    <button className=' bg-blue-700 text-base text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
                        Explore 
                    </button> 
                </Link>
            </h2>

        </div>
    </div>
  )
}

export default FavBook