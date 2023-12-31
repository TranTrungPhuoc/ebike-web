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

export function ViewMore(props: any) {
  const data = props.data;
  const formattedNumber = (numberToFormat: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(numberToFormat);
  };
  return (
    <div className="mt-8 px-4 md:px-4">
      <h4 className="uppercase font-semibold mb-4">Sản phẩm bạn đã xem</h4>
      <div className="relative">
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
                <Link href={"/" + e.slug + ".html"}>
                  <div className="image">
                    <img src={e.avatar} alt="" className="rounded-t" />
                  </div>
                  <div className="text-[#333] p-4 rounded-b">
                    <h3 className="mb-2 font-semibold text-sm">{e.title}</h3>
                    <p className="text-xs text-[#333]">{e.description}</p>
                    <div className="font-bold text-base mt-2 price">
                      {formattedNumber(e.price)}
                    </div>
                    <div className="mt-2 grid gap-2 grid-cols-2 text-xs">
                      <div className="col-span-1 text-[#6fa400]">
                        <span>4.3</span>
                        <span className="ml-2">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="ml-2 text-[#999]">(316)</span>
                      </div>
                      <div className="col-span-1 text-[#999] text-right">
                        21 đã bán
                      </div>
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