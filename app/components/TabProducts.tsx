"use client";

import { useState } from 'react';
import { PopupCarousel } from '../components/PopupCarousel';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const TabProducts = (props: any) => {
    const detail = props.data;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    const openPopup = () => { setIsPopupOpen(true); };
    const closePopup = () => { setIsPopupOpen(false); };

    const [thumbsSwiper, setThumbsSwiper] = useState<any>();

    let libraries = detail["library"].split(",");

    return (
        <div className="col-span-12 md:col-span-5">
            <div className="max-w-lg mx-auto mainProduct">
                <div className="bg-white rounded mb-2 cursor-pointer">
                    <Swiper
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                    >
                        {
                            libraries.map((e: any, i: any) => (
                                <SwiperSlide key={i}>
                                    <img src={e} alt="" onClick={openPopup} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                <div className="product-library">
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {
                            libraries.map((e: any, i: any) => (
                                <SwiperSlide key={i}>
                                    <img src={e} alt="" />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
                {isPopupOpen && <PopupCarousel images={libraries && libraries} onClose={closePopup} />}
            </div>
        </div>
    );
};

export default TabProducts;




