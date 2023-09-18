"use client"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// import Image from 'next/image';

export function Carousel() {
    const array = ['2.jpeg','2.jpeg','2.jpeg']
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                array.map((e, i)=>(
                    <SwiperSlide key={i}>
                        <img src="/2.jpeg" alt="" />
                        {/* <Image
                            src="/2.jpeg"
                            alt="2.jpeg"
                            width={500}
                            height={300}
                            layout="responsive"
                            className="image"
                        /> */}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}