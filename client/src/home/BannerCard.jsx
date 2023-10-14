import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import './BannerCard.css';



const BannerCard = () => {
  return (
    <div className='banner'>
        <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
        >
            <SwiperSlide/>
            <SwiperSlide/>
            <SwiperSlide/>
            <SwiperSlide/>
            <SwiperSlide/>
            <SwiperSlide/>
            <SwiperSlide/>
            <SwiperSlide/>            
        </Swiper>
    </div>
  )
}

export default BannerCard