"use client"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function PopupCarousel(props:any) {
    return (
        <div className="popup-carousel">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    props.images.map((e:any, i:any)=>(
                        <SwiperSlide key={i}>
                            <img src={'/' + e} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <button className="close-button" onClick={props.onClose}>
                <i className='fa fa-close'></i>
            </button>
            <div className='bg' onClick={props.onClose}></div>
        </div>
    );
}
