"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import TabProducts from "../components/TabProducts";
import TabContents from "../components/TabContents";

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
import { productDetail } from "../service/productDetail";
import { useParams } from "next/navigation";
import { productRelative } from "../service/productRelative";

export function Product() {
  const params = useParams();
  const slug = params.slug.toString().replace(".html", "");
  const [data, setData] = useState<any>();
  const [relativeList, setRelative] = useState<any>();
  // const [value, setValue] = useState(2000000);
  // const handleChange = (e: any) => {
  //   setValue(e.target.value);
  // };
  const formattedNumber = (numberToFormat: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "decimal",
      minimumFractionDigits: 0,
    }).format(numberToFormat);
  };
  useEffect(() => {
    productDetail(slug).then((items) => {
      setData(items.response[0]);
    });
    productRelative(slug).then((items) => {
      setRelative(items.response[0].Products);
    });
  }, [slug]);
  let libraries = [];
  if (data) { libraries = data["library"].split(","); }
  const tabsDataContent = [
    {
      label: "Mô tả sản phẩm",
      content: data ? data['content'] : '',
    },
    {
      label: "Video",
      content: data ? data['video'] : '',
    },
    {
      label: "Hình ảnh",
      content: data ? data['realImage'] : '',
    },
  ];
  return (
    <div className="mt-4">
      <div className="container mx-auto">
        <div className="p-2 md:p-0 grid gap-4 grid-cols-12 mb-4 mx-4 md:mx-0">
          <div className="col-span-12 md:col-span-5">
            <TabProducts tabs={data && libraries} />
          </div>
          <div className="col-span-12 md:col-span-4">
            <h1 className="text-3xl font-semibold text-[#6fa400] mb-4">
              {data && data["title"]}
            </h1>
            <div className="price text-2xl font-semibold">
              {
                data &&
                data["price"] != '' &&
                formattedNumber(data["price"])
              }
              {
                data &&
                data["price"] != '' &&
                <>
                  <sup>đ</sup>
                  <span className="text-xs font-normal">(Đã bao gồm phí ship)</span>
                </>
              }
              {data && data["price"] == '' && 'Liên Hệ'}
            </div>
            <div className="mt-4 text-sm">
              {
                data &&
                data.color.length > 0 &&
                <div className="flex mb-4 gap-2 items-center">
                  <span className="text-[#919191]">Màu sắc:</span>
                  {
                    data.color.map((c: any, ci: any) =>
                      <span key={ci} className="border border-[#919191] text-[#919191] p-2 rounded hover:border-[#6fa400] hover:text-[#6fa400] cursor-pointer text-xs">
                        {c.title}
                      </span>
                    )
                  }
                </div>
              }
              {
                data &&
                data.pin.length > 0 &&
                <div className="flex gap-2 items-center">
                  <span className="text-[#919191]">Pin:</span>
                  {
                    data.pin.map((p: any, pi: any) =>
                      <span key={pi} className="border border-[#919191] text-[#919191] p-2 rounded hover:border-[#6fa400] hover:text-[#6fa400] cursor-pointer text-xs">
                        {p.title}
                      </span>
                    )
                  }
                </div>
              }
            </div>
            <div className="addToCart flex mt-4 items-center">
              <span>
                <input
                  type="number"
                  min="1"
                  max="100"
                  defaultValue={1}
                  className="mr-2 md:p-2 border border-gray-300 bg-gray-100 hover:bg-white text-center rounded focus:ring focus:ring-blue-200 focus:border-blue-500 w-24"
                />
              </span>
              <span>
                <button
                  type="button"
                  className="bg-[#6fa400] hover:bg-[#5a8600] px-6 py-2 text-white rounded text-xs md:text-base"
                >
                  THÊM VÀO GIỎ <i className="fa fa-shopping-cart"></i>
                </button>
              </span>
            </div>
            <div className="promotion rounded-lg relative mt-8 border-2 border-[#333] pt-8 p-4">
              <span className="absolute text-white px-4 py-2 bg-[#333] top-0 text-center rounded-full uppercase  text-[10px] text-[10px] md:text-xs">
                Khuyến mãi khi mua sản phẩm
              </span>
              <ul className="text-[#333] text-xs">
                <li>Miễn phí giao hàng khu vực HCM.</li>
                <li>
                  Mã khuyến mãi:
                  <span className="text-[#cecece] ml-[5px]">XDV30</span>
                  <span className="cursor-pointer ml-2 hover:text-[#6fa400]">
                    <i className="fa-solid fa-copy"></i> COPY
                  </span>
                </li>
              </ul>
            </div>
            <div className="buyNow mt-4 text-center">
              <button className="w-full bg-[#6fa400] hover:bg-[#5a8600] p-2 font-semibold text-xl text-white rounded text-xs md:text-lg">
                MUA NGAY
              </button>
            </div>
            <div className="grid gap-4 grid-cols-2 mt-4">
              <div className="col-span-1 bg-[#666] shadow-md shadow-[#ccc] md:text-[12px] text-white p-2 rounded text-center">
                <div className="text-xs uppercase font-semibold">
                  Trả góp 0%
                </div>
                <div className="text-xs text-[#a1e611] italic">
                  Tại cửa hàng
                </div>
              </div>
              <div className="col-span-1 bg-[#666] shadow-md shadow-[#ccc] md:text-[12px] text-white p-2 rounded text-center">
                <div className="text-xs uppercase font-semibold">
                  Trả góp qua thẻ
                </div>
                <div className="text-xs text-[#a1e611] italic">
                  Visa, Master
                </div>
              </div>
              <div className="col-span-1 bg-[#666] shadow-md shadow-[#ccc] md:text-[12px] text-white p-2 rounded text-center">
                <div className="text-xs uppercase font-semibold">
                  0946721565
                </div>
                <div className="text-xs text-[#a1e611] italic">
                  Hotline mua hàng
                </div>
              </div>
              <div className="col-span-1 bg-[#666] shadow-md shadow-[#ccc] md:text-[12px] text-white p-2 rounded text-center">
                <div className="text-xs uppercase font-semibold">
                  Chat Trực Tiếp
                </div>
                <div className="text-xs text-[#a1e611] italic">Zalo</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="mb-2">
              <Link href={"/blog/post.html"}>
                <img
                  src="/quangcao.jpeg"
                  alt=""
                  width={300}
                  className="rounded w-full"
                />
              </Link>
            </div>
            <div>
              <Link href={"/blog/post.html"}>
                <img
                  src="/mau-banner-quang-cao-3.jpeg"
                  alt=""
                  width={300}
                  className="rounded w-full"
                />
              </Link>
            </div>
          </div>
        </div>
        {
          data &&
          tabsDataContent[0].content &&
          <div className="p-2 md:p-0 border-t-2 border-gray-300 grid gap-4 grid-cols-12 mb-4 mx-4 md:mx-0">
            <div className="col-span-12 order-2 lg:order-1 md:col-span-8">
              <TabContents tabs={tabsDataContent} />
              {/* <div className="border-y py-4 my-5 flex gap-2">
                <div className="basis-2/12 md:basis-1/12">
                  <img
                    src="/user.webp"
                    alt=""
                    width={100}
                    className="rounded-full"
                  />
                </div>
                <div className="basis-10/12 md:basis-11/12 text-[#666]">
                  <div className="font-semibold">{data && data.user[0].email}</div>
                  <p className="text-xs italic">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div> */}
            </div>
            {
              data && data.specifications &&
              <div className="col-span-12 order-1 lg:order-2 md:col-span-4 addSpecifications">
                <div className="border-2 border-[#6fa400] rounded-3xl py-8 px-4 mt-8 mb-2 md:mb-0 md:mt-12 relative sticky top-20">
                  <h3 className="bg-[#333] text-[#a1e611] absolute rounded-lg px-4 py-2 uppercase specifications text-center font-semibold">
                    Thông số kỹ thuật
                  </h3>
                  <div className="h-[500px] overflow-auto" dangerouslySetInnerHTML={{ __html: data && data.specifications }}></div>
                  <div className="text-center mt-4">
                    <a
                      href=""
                      className="bg-[#333] text-white hover:text-[#a1e611] py-2 px-4 rounded"
                    >
                      Xem thêm
                    </a>
                  </div>
                </div>
              </div>
            }
          </div>
        }
        <div className="mt-8 px-4 md:px-4">
          <h4 className="uppercase font-semibold mb-4">Sản phẩm liên quan</h4>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={15}
              autoplay={{ delay: 3000 }}
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
                relativeList &&
                relativeList.map((e: any, i: any) => (
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
                        <p className="text-xs text-[#333]">{e.description} </p>
                        <div className="font-bold text-base mt-2 price">
                          21,000,000<sup>đ</sup>
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
                relativeList &&
                relativeList.map((e: any, i: any) => (
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
      </div>
    </div>
  );
}
