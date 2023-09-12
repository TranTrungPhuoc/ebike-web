"use client";

import {
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
import Iframe from '../components/Iframe';

import React, { useState } from "react";
import Popup from '../components/Popup';

export function Attribute() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const videoSrc = 'https://www.youtube.com/embed/6dtUbKZVj5c';
  return (
    <div className="attribute">
      <div className="container mx-auto">
        <div className="grid gap-6 grid-cols-4 md:grid-cols-8 md:items-center">
          <div className="col-span-4 md:col-span-4">
            <div className="relative cursor-pointer" onClick={openPopup}>
              <Image
                src="/video.jpeg"
                alt="video.jpeg"
                width={500}
                height={500}
                layout="responsive"
                className="image rounded"
              />
              <span className="video inline-block top-1/2 left-1/2 leading-8 w-14 h-9 border absolute border-2 border-white text-center text-white bg-[#333] rounded-md">
                <i className="fa fa-play"></i>
              </span>
            </div>
          </div>
          <div className="col-span-4 md:col-span-4">
            <Swiper
              modules={[Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={20}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                768: {
                  slidesPerView: 1,
                },
                992: {
                  slidesPerView: 2,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className="text-center h-full rounded-3xl border border-2 border-[#333] px-5 py-14">
                <div className="image mb-5">
                  <Image
                    src="/speed.png"
                    alt="speed.png"
                    width={200}
                    height={200}
                    className="m-auto"
                  />
                </div>
                <h4 className="text-lg uppercase font-semibold">
                  Tốc độ vượt trội
                </h4>
                <div className="text-sm">Lên đến 50km/1h</div>
              </SwiperSlide>
              <SwiperSlide className="text-center h-full rounded-3xl border border-2 border-[#333] px-5 py-14">
                <div className="image mb-5">
                  <Image
                    src="/bike.png"
                    alt="bike.png"
                    width={200}
                    height={200}
                    className="m-auto"
                  />
                </div>
                <h4 className="text-lg uppercase font-semibold">
                  Khung nhôm đúc nguyên khối
                </h4>
                <div className="text-sm">Cho sự chắc chắn, an toàn</div>
              </SwiperSlide>
              <SwiperSlide className="text-center h-full rounded-3xl border border-2 border-[#333] px-5 py-14">
                <div className="image mb-5">
                  <Image
                    src="/speed.png"
                    alt="speed.png"
                    width={200}
                    height={200}
                    className="m-auto"
                  />
                </div>
                <h4 className="text-lg uppercase font-semibold">
                  Tốc độ vượt trội
                </h4>
                <div className="text-sm">Lên đến 50km/1h</div>
              </SwiperSlide>
              <SwiperSlide className="text-center h-full rounded-3xl border border-2 border-[#333] px-5 py-14">
                <div className="image mb-5">
                  <Image
                    src="/bike.png"
                    alt="bike.png"
                    width={200}
                    height={200}
                    className="m-auto"
                  />
                </div>
                <h4 className="text-lg uppercase font-semibold">
                  Khung nhôm đúc nguyên khối
                </h4>
                <div className="text-sm">Cho sự chắc chắn, an toàn</div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <Popup isOpen={isPopupOpen} onClose={closePopup}>
            <Iframe src={videoSrc} title="Embedded Video" />
        </Popup>
      </div>
    </div>
  );
}
