import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import imagen1 from '../../images/gatsby.png'
import imagen2 from '../../images/react1.png'
import imagen3 from '../../images/klaviyo.png'
import imagen4 from '../../images/zapier.png'
import imagen5 from '../../images/wwp.png'
import imagen6 from '../../images/shopify.webp'
import imagen7 from '../../images/woocommerce.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css"


// import required modules
import { Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img  width="200px" src={imagen1}></img></SwiperSlide>
        <SwiperSlide><img  width="200px" src={imagen2}></img></SwiperSlide>
        <SwiperSlide><img  width="200px" src={imagen3}></img></SwiperSlide>
        <SwiperSlide><img width="200px"  src={imagen4}></img></SwiperSlide>
        <SwiperSlide><img  width="200px" src={imagen5}></img></SwiperSlide>
        <SwiperSlide><img width="200px"  src={imagen6}></img></SwiperSlide>
        <SwiperSlide><img width="200px" src={imagen7}></img></SwiperSlide>
        
      </Swiper>
    </>
  );
}