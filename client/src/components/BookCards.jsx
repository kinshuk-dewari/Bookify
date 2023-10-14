import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaCartShopping} from 'react-icons/fa6';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const BookCards = ({books,headline}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold my-5 text-black'>{headline}</h2>
        {/* cards  */}
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
        {
            books.map(books => 
            <SwiperSlide key={books._id}>
                <Link to={`/book/${books._id}`} >
                    <div className='py-10 px-10  md:px-0' >
                        <img className='rounded-tl-lg h-96 w-screen' src={books.imageURL} alt={books.bookTitle} />
                        <div className='bg-blue-600  items-center justify-between flex flex-row hover:bg-green-600 p-2 rounded-br-lg'>
                            <FaCartShopping className='w-4 h-4 text-white' />
                            <p className=' text-white'>₹ Free</p>
                        </div>
                    </div>
                    {/* <div>
                        <h3>{books.bookTitle}</h3>
                        <p>{books.authorName}</p>
                    </div>                     */}
                </Link>
            </SwiperSlide>)
        }
      </Swiper>
        </div>
    </div>
  )
}

export default BookCards