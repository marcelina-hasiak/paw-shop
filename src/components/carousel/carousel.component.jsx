import React from 'react';


import SwiperCore, { Navigation} from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import './carousel.scss';

import bowls from '../../assets/images/bowls.png'
import food from '../../assets/images/food.png'
import leashes from '../../assets/images/leashes.png'
import beddings from '../../assets/images/beddings.png'
import toys from '../../assets/images/toys.png'


// install Swiper modules
SwiperCore.use([Navigation]);

function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={ bowls } className="carousel-image" alt=""></img></SwiperSlide>
        <SwiperSlide><img src={ food } className="carousel-image" alt=""></img></SwiperSlide>
        <SwiperSlide><img src={ leashes } className="carousel-image" alt=""></img></SwiperSlide>
        <SwiperSlide><img src={ beddings } className="carousel-image" alt=""></img></SwiperSlide>
        <SwiperSlide><img src={ toys } className="carousel-image" alt=""></img></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel