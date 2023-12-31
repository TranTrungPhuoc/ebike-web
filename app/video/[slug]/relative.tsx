"use client"

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

import Link from "next/link";

export function Relative(props: any) {
    const data = props.data
    return (
        <div className="knowledge md:mt-12 mx-4 md:mx-0">
            <div className="container mx-auto">
                <h4 className="uppercase font-semibold mb-4">Bài viết liên quan</h4>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={15}
                    autoplay={{ delay: 7000 }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                    navigation
                >
                    {
                        data &&
                        data.map((e: any, i: any) => (
                            <SwiperSlide
                                key={i}
                                className="rounded hover:bg-[#f5f5f5] shadow-md shadow-[#ccc] hover:duration-300"
                            >
                                <Link href={"/video/" + e.slug + '.html'}>
                                    <div className="image relative">
                                        <img src={e.avatar} alt="" className="rounded-t" />
                                        <span className="bg-[#333] font-semibold p-2 absolute left-0.5 top-0.5 text-[#a1e611] rounded text-xs text-center opacity-90">
                                            19<br />Aug
                                        </span>
                                    </div>
                                    <div className="text-[#333] p-4 rounded-b">
                                        <h3 className="mb-2 font-semibold text-sm h-[65px]">{e.title}</h3>
                                        <div className="mb-2 text-xs text-[#919191]"><i className="fa fa-calendar"></i> { e.created.split('T')[0] + ' ' + e.created.split('T')[1].split(':')[0] + ':' + e.created.split('T')[1].split(':')[1]}</div>
                                        <p className="text-xs text-[#333]">{e.description}</p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}