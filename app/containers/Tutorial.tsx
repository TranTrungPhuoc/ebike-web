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

import Link from "next/link";
import { useEffect, useState } from "react";
import { postNew } from "../service/postNew";
import { ORIGINAL_URL } from "../config";

export function Tutorial() {
    const [data, setData] = useState<any>();
    const type = 'video-cate';
    useEffect(() => {
        postNew(type).then((items) => {
            setData(items.response[0]);
        });
    }, [type]);
    return (
        <div className="tutorial mt-12 mx-4 md:mx-0">
            <div className="container mx-auto">
                <h2 className="mb-6 border-b border-[#333] text-sm">
                    <span className="bg-[#a1e611] color-[#333] uppercase py-2 px-4 rounded font-semibold">
                        {
                            data &&
                            <Link href={type + data.slug} className="hover:text-[#6fa400] hover:duration-300">
                                {data.title}
                            </Link>
                        }
                    </span>
                </h2>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={15}
                    autoplay={{ delay: 5000 }}
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
                        data['Posts'].map((e: any, i: any) => (
                            <SwiperSlide
                                key={i}
                                className="rounded hover:bg-[#f5f5f5] shadow-md shadow-[#ccc] hover:duration-300"
                            >
                                <Link href={"/video/" + e.slug + ".html"}>
                                    <div className="image relative">
                                        <img src={ORIGINAL_URL + "uploads/post/" + e.avatar} alt="" className="rounded-t" />
                                        <span className="bg-white px-2 py-1 rounded-lg absolute text-[#c50000] text-center opacity-90 top-1/2 left-1/2">
                                            <i className="fa-brands fa-youtube fa-2x"></i>
                                        </span>
                                    </div>
                                    <div className="text-[#333] p-4 rounded-b">
                                        <h3 className="mb-2 font-semibold text-sm h-[65px]">{e.title}</h3>
                                        <div className="mb-2 text-xs text-[#919191]">
                                            <i className="fa fa-calendar"></i> {e.created.split('T')[0] + ' ' + e.created.split('T')[1].split(':')[0] + ':' + e.created.split('T')[1].split(':')[1]}</div>
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