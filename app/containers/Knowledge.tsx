"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

export function Knowledge() {
    return (
        <div className="knowledge mt-12">
            <div className="container mx-auto">
                <h2 className="mb-6 border-b border-[#a1e611]">
                    <span className="bg-[#a1e611] color-[#333] uppercase p-4 rounded font-semibold">
                        Hướng dẫn lắp ráp xe đạp
                    </span>
                </h2>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                autoplay={{ delay: 7000 }}
                breakpoints={{
                    768: {
                    slidesPerView: 1,
                    },
                    992: {
                    slidesPerView: 3,
                    },
                }}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                >
                    <SwiperSlide>
                        <div className="image">
                            <Image
                                src="/cuahang.jpeg"
                                alt="cuahang.jpeg"
                                width={300}
                                height={300}
                                className="rounded-t"
                            />
                        </div>
                        <div className="text-center p-2">
                            Cửa hàng xe điện tại HCM uy tín, giá tốt
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image">
                            <Image
                                src="/cuahang.jpeg"
                                alt="cuahang.jpeg"
                                width={300}
                                height={300}
                                className="rounded-t"
                            />
                        </div>
                        <div className="text-center p-2">
                            Cửa hàng xe điện tại HCM uy tín, giá tốt
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image">
                            <Image
                                src="/cuahang.jpeg"
                                alt="cuahang.jpeg"
                                width={300}
                                height={300}
                                className="rounded-t"
                            />
                        </div>
                        <div className="text-center p-2">
                            Cửa hàng xe điện tại HCM uy tín, giá tốt
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image">
                            <Image
                                src="/cuahang.jpeg"
                                alt="cuahang.jpeg"
                                width={300}
                                height={300}
                                className="rounded-t"
                            />
                        </div>
                        <div className="text-center p-2">
                            Cửa hàng xe điện tại HCM uy tín, giá tốt
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}