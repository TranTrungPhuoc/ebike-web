"use client"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';

export function Carousel() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <Image
                    src="/2.jpeg"
                    alt="2.jpeg"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="image"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/2.jpeg"
                    alt="2.jpeg"
                    width={500}
                    height={300}
                    layout="responsive"
                    className="image"
                />
            </SwiperSlide>
        </Swiper>
    );
}