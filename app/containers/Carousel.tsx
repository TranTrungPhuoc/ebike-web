"use client"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Carousel() {
    const array = ['banner.jpg','banner.jpg','banner.jpg']
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
        >
            {
                array.map((e, i)=>(
                    <SwiperSlide key={i}>
                        <img src="/banner.jpg" alt="" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}