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

import Link from "next/link";

export function Knowledge() {
  const postList = [
    {
      title: "Cửa hàng xe điện tại HCM uy tín, giá tốt",
      image: "cuahang.jpeg",
      view: 548,
      date: "10",
    },
    {
      title: "Cửa hàng xe điện tại HCM uy tín, giá tốt",
      image: "cuahang.jpeg",
      view: 548,
      date: "10",
    },
    {
      title: "Cửa hàng xe điện tại HCM uy tín, giá tốt",
      image: "cuahang.jpeg",
      view: 548,
      date: "10",
    },
    {
      title: "Cửa hàng xe điện tại HCM uy tín, giá tốt",
      image: "cuahang.jpeg",
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
    <div className="knowledge mt-12 mx-4 md:mx-0">
      <div className="container mx-auto">
        <h2 className="mb-6 border-b border-[#333]">
          <span className="bg-[#a1e611] color-[#333] uppercase p-4 rounded font-semibold">
            <Link href="/" className="hover:text-[#6fa400]">
              Kiến thức kinh nghiệm
            </Link>
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
        >
          {postList.map((e, i) => (
            <SwiperSlide
              key={i}
              className="border border-[#6fa400] rounded p-2 bg-[#f7ffe8] hover:border-[#333] hover:bg-white"
            >
              <Link href="/">
                <div className="image">
                  <Image
                    src={"/" + e.image}
                    alt={e.title}
                    width={300}
                    height={300}
                    className="rounded"
                  />
                </div>
                <div className="text-[#333] p-2 rounded-b">
                  <h3 className="mb-2">{e.title}</h3>
                  <div className="text-xs">
                    <i className="fa fa-eye text-[#6fa400]"></i>{" "}
                    {formattedNumber(e.view)} lượt xem • 10 tháng trước
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
