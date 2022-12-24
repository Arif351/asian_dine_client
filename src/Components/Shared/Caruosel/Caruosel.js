import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import c1 from "../../../Resturant/Carusel/c1.jpg"
import c2 from "../../../Resturant/Carusel/c2.jpg"
import c3 from "../../../Resturant/Carusel/c3.jpg"
import c4 from "../../../Resturant/Carusel/c4.jpg"
import c5 from "../../../Resturant/Carusel/c5.jpg"
import c6 from "../../../Resturant/Carusel/c6.jpg"
import c7 from "../../../Resturant/Carusel/c7.jpg"
import c8 from "../../../Resturant/Carusel/c8.jpg"
import c9 from "../../../Resturant/Carusel/c9.jpg"

const Caruosel = () => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper swiper-slide swiper"
            >
                <SwiperSlide> <img src={c1} alt="" className='brightness-50' /></SwiperSlide>
                <SwiperSlide> <img src={c2} alt="" className='brightness-50' /> </SwiperSlide>
                <SwiperSlide> <img src={c3} alt="" className='brightness-50' /> </SwiperSlide>
                <SwiperSlide> <img src={c4} alt="" className='brightness-50' /> </SwiperSlide>
                <SwiperSlide> <img src={c5} alt="" className='brightness-50' /> </SwiperSlide>
                <SwiperSlide> <img src={c6} alt="" className='brightness-50' /> </SwiperSlide>
                <SwiperSlide> <img src={c7} alt="" className='brightness-50' /> </SwiperSlide>
                <SwiperSlide> <img src={c8} alt="" className='brightness-50' /> </SwiperSlide>
                <SwiperSlide> <img src={c9} alt="" className='brightness-50' /> </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Caruosel;