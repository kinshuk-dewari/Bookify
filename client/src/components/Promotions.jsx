import React from 'react'

const Promotions = () => {
  return (
    
    <div className='flex flex-col items-center justify-center mt-16 py-12 bg-teal-100 px-4 lg:px24'>
       
      <div className='md:w-1/2'>
          <h2 className=' uppercase text-4xl font-bold mb-6 leading-snug'>This is a paid promotion</h2>
          <img src="./src/assets/promotion1.png" alt="Promotion hai bhai yaha" className='rounded md:w-10/12' />
      </div>               
          <h2 className=' uppercase text-2xl text-green-700 font-bold mb-6 leading-snug'>$ 99.99</h2>

    </div>
  )
}

export default Promotions