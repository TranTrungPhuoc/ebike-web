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

export function Product() {
  const params = useParams();
  const slug = params.slug.toString().replace(".html", "");

  const [data, setData] = useState<any>();
  const [value, setValue] = useState(2000000);
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
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
  }, [slug]);

  const detail = {
    title: "Xe đạp thể thao đường phố",
    content:
      '<h2 id="haaland">Haaland thắng giải Cầu thủ hay nhất của UEFA</h2><p>Tiền đạo Erling Haaland, người ghi 52 bàn qua 53 trận giúp Man City đoạt cú ăn ba mùa 2022-2023, vượt mặt Lionel Messi để giành giải Cầu thủ hay nhất của UEFA.</p><h3 id="haaland-thang">1. Haaland thắng giải Cầu thủ hay nhất của UEFA</h3><p>Theo công bố của Liên đoàn <a href="/">Bóng đá châu Âu</a>, trong lễ bốc thăm Champions League mùa 2023-2024 tối 31/8, Haaland đạt 352 điểm, đứng trên Messi (227 điểm) và <b>Kevin De Bruyne</b> (225 điểm).</p><p><img src="/centent.png" alt="" /></p><h3 id="neyma">2. <strong>Neymar</strong> gia nhập <i>Al-Hilal</i></h3><p>Sau khi thông báo rời PSG, Neymar chính thức ký hợp đồng với Al-Hilal (trong ảnh) và trở thành cầu thủ có lương cao thứ hai thế giới.</p><p><img src="/neyma.webp" alt="" /></p><p>Ý định của Neymar khi quyết định chia tay PSG là trở lại Barcelona. Tuy nhiên, Xavi Hernandez không chào đón anh vì không muốn thay đổi dự án được xây dựng hơn một năm qua, ngay cả khi Ousmane Dembele bất ngờ đến PSG. Thế nên, cầu thủ người Brazil quyết định đến với bóng đá Saudi Arabia để khoác áo Al-Hilal.</p><p>Theo L’Equipe, Al-Hilal chấp nhận trả cho PSG mức phí chuyển nhượng cố định gần 100 triệu USD (90 triệu euro) để có Neymar. Ngoài ra, nhà vô địch bóng đá Pháp có thể nhận thêm số tiền nhất định dựa theo số trận và bàn thắng của Neymar trong tương lai.</p><p>Chiêu mộ Neymar, Al-Hilal trở thành CLB chi tiêu nhiều thứ hai thế giới trong mùa hè năm nay, lên đến 293 triệu USD. Chelsea dẫn đầu với 353 triệu USD.</p><p>Neymar đã ký vào hợp đồng có thời hạn hai năm với Al-Hilal mà không có tùy chọn gia hạn. Cầu thủ 31 tuổi này không đơn độc ở Saudi Arabia. Anh đến Vịnh Ba Tư theo bước các cầu thủ nổi tiếng khác như Cristiano Ronaldo, Karim Benzema, N’Golo Kante, Riyad Mahrez hay Sadio Mane - những cầu thủ quyết định rời nền bóng đá đỉnh cao châu Âu để đến giải đấu thấp hơn và đổi lại là khoản lương khổng lồ.</p><p>Hợp đồng trọn gói của Neymar là 300 triệu USD trong hai năm. Chỉ có Ronaldo, người nhận 200 triệu USD mỗi năm từ Al-Nassr là có lương cao hơn. Tổng thu nhập cho đến 2025 của Neymar có thể lên đến 400 triệu USD, dựa theo các điều khoản đi kèm cùng với những hợp đồng thương mại.</p><h4 id="2009">a. 2009: Mùa giải ra mắt</h4><p>Neymar ra mắt chuyên nghiệp vào ngày 7 tháng 3 năm 2009, mặc dù mới 17 tuổi. Anh ấy được tung vào sân trong 30 phút cuối cùng, trong chiến thắng 2–1 trước Oeste.</p><h4 id="2010">b. 2010: Thành công tại Campeonato Paulista</h4><p>Neymar tiếp tục thăng hoa trong năm 2010, và vào ngày 15 tháng 4 năm 2010, anh ghi 5 bàn cho Santos trong trận thắng 8-1 trước Guarani ở vòng loại Cúp bóng đá Brasil.</p><figure class="image"><img alt="" src="https://en.coin-turk.com/wp-content/uploads/2023/07/altcoin-news-0003-1.jpg" width="1200"> <figcaption>Đốt cháy 100 triệu đô la! Sự sụt giảm nguồn cung lớn đối với các loại tiền thay thế phổ biến!</figcaption> </figure><p>Ở Al-Hilal, Neymar trở thành đồng đội của một số cầu thủ vừa đến từ châu Âu như Kalidou Koulibaly, Ruben Neves, Sergej Milinkovic-Savic. Al-Hilal là một trong những CLB lớn nhất Saudi Pro League, có 75% cổ phần thuộc sở hữu của Quỹ đầu tư công có chủ quyền Saudi Arabia (PIF).</p>',
  };
  const postList = [
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
      description:
        "Thoát vị đĩa đệm là một căn bệnh khá nghiêm trọng, có thể để lại nhiều biến chứng nguy hiểm…",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
  ];
  const postSeeMore = [
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
    {
      title: "Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt",
      link: "",
      image: "blog.jpeg",
    },
  ];
  // const htmlContent = detail.content;
  let libraries = [];
  if (data) {
    libraries = data["library"].split(",");
    // for (let index = 0; index < libraries.length; index++) {
    //     const element = libraries[index];
    //     tabsData.push({
    //         label: element,
    //         content: element,
    //     })
    // }
  }

  const tabsDataContent = [
    {
      label: "Mô tả sản phẩm",
      content:
        '<h2>Haaland thắng giải Cầu thủ hay nhất của UEFA</h2><p>Tiền đạo Erling Haaland, người ghi 52 bàn qua 53 trận giúp Man City đoạt cú ăn ba mùa 2022-2023, vượt mặt Lionel Messi để giành giải Cầu thủ hay nhất của UEFA.</p><h3>1. Haaland thắng giải Cầu thủ hay nhất của UEFA</h3><p>Theo công bố của Liên đoàn <a href="/">Bóng đá châu Âu</a>, trong lễ bốc thăm Champions League mùa 2023-2024 tối 31/8, Haaland đạt 352 điểm, đứng trên Messi (227 điểm) và <b>Kevin De Bruyne</b> (225 điểm).</p><p><img src="/centent.png" alt="" /></p><h3>2. <strong>Neymar</strong> gia nhập <i>Al-Hilal</i></h3><p>Sau khi thông báo rời PSG, Neymar chính thức ký hợp đồng với Al-Hilal (trong ảnh) và trở thành cầu thủ có lương cao thứ hai thế giới.</p><p><img src="/neyma.webp" alt="" /></p><p>Ý định của Neymar khi quyết định chia tay PSG là trở lại Barcelona. Tuy nhiên, Xavi Hernandez không chào đón anh vì không muốn thay đổi dự án được xây dựng hơn một năm qua, ngay cả khi Ousmane Dembele bất ngờ đến PSG. Thế nên, cầu thủ người Brazil quyết định đến với bóng đá Saudi Arabia để khoác áo Al-Hilal.</p><p>Theo L’Equipe, Al-Hilal chấp nhận trả cho PSG mức phí chuyển nhượng cố định gần 100 triệu USD (90 triệu euro) để có Neymar. Ngoài ra, nhà vô địch bóng đá Pháp có thể nhận thêm số tiền nhất định dựa theo số trận và bàn thắng của Neymar trong tương lai.</p><p>Chiêu mộ Neymar, Al-Hilal trở thành CLB chi tiêu nhiều thứ hai thế giới trong mùa hè năm nay, lên đến 293 triệu USD. Chelsea dẫn đầu với 353 triệu USD.</p><p>Neymar đã ký vào hợp đồng có thời hạn hai năm với Al-Hilal mà không có tùy chọn gia hạn. Cầu thủ 31 tuổi này không đơn độc ở Saudi Arabia. Anh đến Vịnh Ba Tư theo bước các cầu thủ nổi tiếng khác như Cristiano Ronaldo, Karim Benzema, N’Golo Kante, Riyad Mahrez hay Sadio Mane - những cầu thủ quyết định rời nền bóng đá đỉnh cao châu Âu để đến giải đấu thấp hơn và đổi lại là khoản lương khổng lồ.</p><p>Hợp đồng trọn gói của Neymar là 300 triệu USD trong hai năm. Chỉ có Ronaldo, người nhận 200 triệu USD mỗi năm từ Al-Nassr là có lương cao hơn. Tổng thu nhập cho đến 2025 của Neymar có thể lên đến 400 triệu USD, dựa theo các điều khoản đi kèm cùng với những hợp đồng thương mại.</p><h4>a. 2009: Mùa giải ra mắt</h4><p>Neymar ra mắt chuyên nghiệp vào ngày 7 tháng 3 năm 2009, mặc dù mới 17 tuổi. Anh ấy được tung vào sân trong 30 phút cuối cùng, trong chiến thắng 2–1 trước Oeste.</p><h4>b. 2010: Thành công tại Campeonato Paulista</h4><p>Neymar tiếp tục thăng hoa trong năm 2010, và vào ngày 15 tháng 4 năm 2010, anh ghi 5 bàn cho Santos trong trận thắng 8-1 trước Guarani ở vòng loại Cúp bóng đá Brasil.</p><figure class="image"><img alt="" src="https://en.coin-turk.com/wp-content/uploads/2023/07/altcoin-news-0003-1.jpg" width="1200"> <figcaption>Đốt cháy 100 triệu đô la! Sự sụt giảm nguồn cung lớn đối với các loại tiền thay thế phổ biến!</figcaption> </figure><p>Ở Al-Hilal, Neymar trở thành đồng đội của một số cầu thủ vừa đến từ châu Âu như Kalidou Koulibaly, Ruben Neves, Sergej Milinkovic-Savic. Al-Hilal là một trong những CLB lớn nhất Saudi Pro League, có 75% cổ phần thuộc sở hữu của Quỹ đầu tư công có chủ quyền Saudi Arabia (PIF).</p>',
    },
    {
      label: "Video",
      content:
        '<p><iframe width="100%" height="500" src="https://www.youtube.com/embed/VbAyLxGC42o?si=VG-6DgOLZ-LoDygd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe> </p> <p> <iframe width="100%" height="500" src="https://www.youtube.com/embed/VSTBflOCODg?si=XRFjiHUNnpZFpTzu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe> </p><p> <iframe width="100%" height="500" src="https://www.youtube.com/embed/VSTBflOCODg?si=XRFjiHUNnpZFpTzu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe> </p>',
    },
    {
      label: "Hình ảnh",
      content:
        '<table class="min-w-full divide-y divide-gray-200""><tbody class="bg-white divide-y divide-gray-200"><tr><td class="px-6 py-4 whitespace-no-wrap"><img src="/p1.jpeg" /></td><td class="px-6 py-4 whitespace-no-wrap"><img src="/p2.jpeg" /></td></tr><tr><td class="px-6 py-4 whitespace-no-wrap"><img src="/p1.jpeg" /></td><td class="px-6 py-4 whitespace-no-wrap"><img src="/p2.jpeg" /></td></tr><tr><td class="px-6 py-4 whitespace-no-wrap"><img src="/p1.jpeg" /></td><td class="px-6 py-4 whitespace-no-wrap"><img src="/p2.jpeg" /></td></tr></tbody></table>',
    },
  ];
  const relativeList = [
    {
      title: "Xe đạp thể thao C24",
      image: "cuahang.jpeg",
      view: 548,
      date: "10",
    },
    {
      title: "Xe đạp thể thao C24",
      image: "cuahang.jpeg",
      view: 548,
      date: "10",
    },
    {
      title: "Xe đạp thể thao C24",
      image: "cuahang.jpeg",
      view: 548,
      date: "10",
    },
    {
      title: "Xe đạp thể thao C24",
      image: "cuahang.jpeg",
      view: 548,
      date: "10",
    },
    {
      title: "Xe đạp thể thao C24",
      image: "cuahang.jpeg",
      view: 548,
      date: "10",
    },
    {
      title: "Xe đạp thể thao C24",
      image: "cuahang.jpeg",
      view: 548,
      date: "10",
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
              {data && formattedNumber(data["price"])}
              <sup>đ</sup>{" "}
              <span className="text-xs font-normal">(Đã bao gồm phí ship)</span>
            </div>
            <div className="mt-4 text-sm">
              <div className="flex mb-4 gap-2 items-center">
                <span className="text-[#919191]">Màu sắc:</span>
                <span className="border border-[#919191] text-[#919191] p-2 rounded hover:border-[#6fa400] hover:text-[#6fa400] cursor-pointer text-xs">
                  Vàng
                </span>
                <span className="border border-[#919191] text-[#919191] p-2 rounded hover:border-[#6fa400] hover:text-[#6fa400] cursor-pointer text-xs">
                  Trắng
                </span>
                <span className="border border-[#919191] text-[#919191] p-2 rounded hover:border-[#6fa400] hover:text-[#6fa400] cursor-pointer text-xs">
                  Đỏ
                </span>
                <span className="border border-[#919191] text-[#919191] p-2 rounded hover:border-[#6fa400] hover:text-[#6fa400] cursor-pointer text-xs">
                  Xanh
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-[#919191]">Pin:</span>
                <span className="border border-[#919191] text-[#919191] p-2 rounded hover:border-[#6fa400] hover:text-[#6fa400] cursor-pointer text-xs">
                  10 mAh
                </span>
                <span className="border border-[#919191] text-[#919191] p-2 rounded hover:border-[#6fa400] hover:text-[#6fa400] cursor-pointer text-xs">
                  20 mAh
                </span>
                <span className="border border-[#919191] text-[#919191] p-2 rounded hover:border-[#6fa400] hover:text-[#6fa400] cursor-pointer text-xs">
                  30 mAh
                </span>
                <span className="border border-[#919191] text-[#919191] p-2 rounded hover:border-[#6fa400] hover:text-[#6fa400] cursor-pointer text-xs">
                  40 mAh
                </span>
              </div>
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
        <div className="p-2 md:p-0 border-t-2 border-gray-300 grid gap-4 grid-cols-12 mb-4 mx-4 md:mx-0">
          <div className="col-span-12 order-2 lg:order-1 md:col-span-8">
            <TabContents tabs={tabsDataContent} />
            <div className="border-y py-4 my-5 flex gap-2">
              <div className="basis-2/12 md:basis-1/12">
                <img
                  src="/user.webp"
                  alt=""
                  width={100}
                  className="rounded-full"
                />
              </div>
              <div className="basis-10/12 md:basis-11/12 text-[#666]">
                <div className="font-semibold">admin@gmail.com</div>
                <p className="text-xs italic">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 order-1 lg:order-2 md:col-span-4">
            <div className="border-2 border-[#6fa400] rounded-3xl py-8 px-4 mt-8 mb-2 md:mb-0 md:mt-12 relative sticky top-20">
              <h3 className="bg-[#333] text-[#a1e611] absolute rounded-lg px-4 py-2 uppercase specifications text-center font-semibold">
                Thông số kỹ thuật
              </h3>
              <table className="table">
                <tbody className="text-sm">
                  <tr>
                    <td className="text-[#919191] w-6/12 py-2">
                      Kích cỡ / Size
                    </td>
                    <td>S, M</td>
                  </tr>
                  <tr>
                    <td className="text-[#919191] w-6/12 py-2">
                      Màu sắc / Color
                    </td>
                    <td>Helios Orange</td>
                  </tr>
                  <tr>
                    <td className="text-[#919191] w-6/12 py-2">
                      Chất liệu khung / Frame
                    </td>
                    <td className="py-2">Advanced-Grade Composute, disc</td>
                  </tr>
                  <tr>
                    <td className="text-[#919191] w-6/12 py-2">Phuộc / Fork</td>
                    <td className="py-2">
                      Advanced-Grade Composute, alloy OverDrive steerer, disc
                    </td>
                  </tr>
                  <tr>
                    <td className="text-[#919191] w-6/12 py-2">
                      Giảm xóc / Shock
                    </td>
                    <td className="py-2">N/A</td>
                  </tr>
                  <tr>
                    <td className="text-[#919191] w-6/12 py-2">
                      Vành xe / Rims
                    </td>
                    <td className="py-2">Giant SR2 Disc Wheelset</td>
                  </tr>
                  <tr>
                    <td className="text-[#919191] w-6/12 py-2">Đùm / Hubs</td>
                    <td className="py-2">Giant SR2 Disc Wheelset</td>
                  </tr>
                  <tr>
                    <td className="text-[#919191] w-6/12 py-2">Căm / Spokes</td>
                    <td className="py-2">
                      Giant Gavia Fondo 2, tubeless, 700x32c
                    </td>
                  </tr>
                  <tr>
                    <td className="text-[#919191] w-6/12 py-2">
                      Ghi đông / Handlebar
                    </td>
                    <td className="py-2">
                      Giant Connect, flat (XS:58cm, S:58cm, M:58cm, M/L:62cm,
                      L:62cm, XL:62cm)
                    </td>
                  </tr>
                </tbody>
              </table>
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
        </div>
        <div className="mt-8 px-4 md:px-4">
          <h4 className="uppercase font-semibold mb-4">Sản phẩm liên quan</h4>
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
              {relativeList.map((e, i) => (
                <SwiperSlide
                  key={i}
                  className="rounded hover:bg-[#f5f5f5] shadow-md shadow-[#ccc] hover:duration-300"
                >
                  <Link href="/product.html">
                    <div className="image">
                      <img src={"/p5.jpeg"} alt="" className="rounded-t" />
                    </div>
                    <div className="text-[#333] p-4 rounded-b">
                      <h3 className="mb-2 font-semibold text-sm">{e.title}</h3>
                      <p className="text-xs text-[#333]">
                        Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng
                        EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li
                        trên bề mặt dốc…
                      </p>
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
              {relativeList.map((e, i) => (
                <SwiperSlide
                  key={i}
                  className="rounded hover:bg-[#f5f5f5] shadow-md shadow-[#ccc] hover:duration-300"
                >
                  <Link href="/product.html">
                    <div className="image">
                      <img src={"/p5.jpeg"} alt="" className="rounded-t" />
                    </div>
                    <div className="text-[#333] p-4 rounded-b">
                      <h3 className="mb-2 font-semibold text-sm">{e.title}</h3>
                      <p className="text-xs text-[#333]">
                        Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng
                        EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li
                        trên bề mặt dốc…
                      </p>
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
      </div>
    </div>
  );
}
