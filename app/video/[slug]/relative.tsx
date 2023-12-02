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

// import Image from "next/image";
import Link from "next/link";

export function Relative() {
    const postList = [
        {
            title: "Hướng dẫn sử dụng bộ truyền động xe địa hình",
            image: "huong-dan.jpeg",
            view: 548,
            date: "10",
        },
        {
            title: "Hướng dẫn sử dụng bộ truyền động xe địa hình",
            image: "huong-dan.jpeg",
            view: 548,
            date: "10",
        },
        {
            title: "Hướng dẫn sử dụng bộ truyền động xe địa hình",
            image: "huong-dan.jpeg",
            view: 548,
            date: "10",
        },
        {
            title: "Hướng dẫn sử dụng bộ truyền động xe địa hình",
            image: "huong-dan.jpeg",
            view: 548,
            date: "10",
        },
        {
            title: "Hướng dẫn sử dụng bộ truyền động xe địa hình",
            image: "huong-dan.jpeg",
            view: 548,
            date: "10",
        },
        {
            title: "Hướng dẫn sử dụng bộ truyền động xe địa hình",
            image: "huong-dan.jpeg",
            view: 548,
            date: "10",
        },
    ];
    const formattedNumber = (numberToFormat: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 0,
        }).format(numberToFormat);
    };
    return (
        <div className="tutorial md:mt-12 mx-4 md:mx-0">
            <div className="container mx-auto">
                <h4 className="uppercase font-semibold mb-4">Bài viết liên quan</h4>
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
                    {postList.map((e, i) => (
                        <SwiperSlide
                            key={i}
                            className="rounded hover:bg-[#f5f5f5] shadow-md shadow-[#ccc] hover:duration-300"
                        >
                            <Link href="/video/post.html">
                                <div className="image relative">
                                    <img src={"/" + e.image} alt="" className="rounded-t" />
                                    <span className="bg-white border border-[#333] px-2.5 py-1 rounded-lg absolute text-[#c50000] text-center opacity-90 top-1/2 left-1/2">
                                        <i className="fa-brands fa-youtube fa-2x"></i>
                                    </span>
                                </div>
                                <div className="text-[#333] p-4 rounded-b">
                                    <h3 className="mb-2 font-semibold text-sm">{e.title}</h3>
                                    <div className="mb-2 text-xs text-[#919191]"><i className="fa fa-calendar"></i> 26/09/2023 09:53</div>
                                    <p className="text-xs text-[#333]">Thoát vị đĩa đệm là một căn bệnh khá nghiêm trọng, có thể để lại nhiều biến chứng nguy hiểm…</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}