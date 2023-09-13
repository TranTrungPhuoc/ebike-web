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

export function Tutorial() {
    return (
        <div className="tutorial mt-12 mx-4 md:mx-0">
            <div className="container mx-auto">
                <h2 className="mb-6 border-b border-[#333]">
                    <span className="bg-[#a1e611] color-[#333] uppercase p-4 rounded font-semibold">
                        <a href="" className="hover:text-[#6fa400]">Hướng dẫn lắp ráp xe đạp</a>
                    </span>
                </h2>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={20}
                autoplay={{ delay: 5000 }}
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
                    <SwiperSlide className="border border-[#6fa400] rounded p-2 bg-[#f7ffe8] hover:border-[#333] hover:bg-white">
                        <a href="">
                            <div className="image">
                                <Image
                                    src="/huong-dan.jpeg"
                                    alt="huong-dan.jpeg"
                                    width={300}
                                    height={300}
                                    className="rounded"
                                />
                            </div>
                            <div className="text-[#333] p-2 rounded-b">
                                <h3 className="mb-2">Hướng dẫn sử dụng bộ truyền động xe địa hình</h3>
                                <div className="text-xs">
                                    <i className="fa fa-eye text-[#6fa400]"></i> 10 Tr lượt xem • 10 tháng trước
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="border border-[#6fa400] rounded p-2 bg-[#f7ffe8] hover:border-[#333] hover:bg-white">
                        <a href="">
                            <div className="image">
                                <Image
                                    src="/huong-dan.jpeg"
                                    alt="huong-dan.jpeg"
                                    width={300}
                                    height={300}
                                    className="rounded"
                                />
                            </div>
                            <div className="text-[#333] p-2 rounded-b">
                                <h3 className="mb-2">Hướng dẫn sử dụng bộ truyền động xe địa hình</h3>
                                <div className="text-xs">
                                    <i className="fa fa-eye text-[#6fa400]"></i> 10 Tr lượt xem • 10 tháng trước
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="border border-[#6fa400] rounded p-2 bg-[#f7ffe8] hover:border-[#333] hover:bg-white">
                        <a href="">
                            <div className="image">
                                <Image
                                    src="/huong-dan.jpeg"
                                    alt="huong-dan.jpeg"
                                    width={300}
                                    height={300}
                                    className="rounded"
                                />
                            </div>
                            <div className="text-[#333] p-2 rounded-b">
                                <h3 className="mb-2">Hướng dẫn sử dụng bộ truyền động xe địa hình</h3>
                                <div className="text-xs">
                                    <i className="fa fa-eye text-[#6fa400]"></i> 10 Tr lượt xem • 10 tháng trước
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide className="border border-[#6fa400] rounded p-2 bg-[#f7ffe8] hover:border-[#333] hover:bg-white">
                        <a href="">
                            <div className="image">
                                <Image
                                    src="/huong-dan.jpeg"
                                    alt="huong-dan.jpeg"
                                    width={300}
                                    height={300}
                                    className="rounded"
                                />
                            </div>
                            <div className="text-[#333] p-2 rounded-b">
                                <h3 className="mb-2">Hướng dẫn sử dụng bộ truyền động xe địa hình</h3>
                                <div className="text-xs">
                                    <i className="fa fa-eye text-[#6fa400]"></i> 10 Tr lượt xem • 10 tháng trước
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}