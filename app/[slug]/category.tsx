"use client";
import React, { useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link'
export function Category() {
    const [value, setValue] = useState(2000000);
    const handleChange = (e: any) => { setValue(e.target.value); };
    const [status, setStatus] = useState(false);
    const handleTabClick = () => { setStatus(!status); };
    const formattedNumber = (numberToFormat: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
        }).format(numberToFormat);
    }
    const detail = {title: 'Xe đạp thể thao đường phố', content: '<h2>Haaland thắng giải Cầu thủ hay nhất của UEFA</h2><p>Tiền đạo Erling Haaland, người ghi 52 bàn qua 53 trận giúp Man City đoạt cú ăn ba mùa 2022-2023, vượt mặt Lionel Messi để giành giải Cầu thủ hay nhất của UEFA.</p><h3>1. Haaland thắng giải Cầu thủ hay nhất của UEFA</h3><p>Theo công bố của Liên đoàn <a href="/">Bóng đá châu Âu</a>, trong lễ bốc thăm Champions League mùa 2023-2024 tối 31/8, Haaland đạt 352 điểm, đứng trên Messi (227 điểm) và <b>Kevin De Bruyne</b> (225 điểm).</p><p><img src="/centent.png" alt="" /></p><h3>2. <strong>Neymar</strong> gia nhập <i>Al-Hilal</i></h3><p>Sau khi thông báo rời PSG, Neymar chính thức ký hợp đồng với Al-Hilal (trong ảnh) và trở thành cầu thủ có lương cao thứ hai thế giới.</p><p><img src="/neyma.webp" alt="" /></p><p>Ý định của Neymar khi quyết định chia tay PSG là trở lại Barcelona. Tuy nhiên, Xavi Hernandez không chào đón anh vì không muốn thay đổi dự án được xây dựng hơn một năm qua, ngay cả khi Ousmane Dembele bất ngờ đến PSG. Thế nên, cầu thủ người Brazil quyết định đến với bóng đá Saudi Arabia để khoác áo Al-Hilal.</p><p>Theo L’Equipe, Al-Hilal chấp nhận trả cho PSG mức phí chuyển nhượng cố định gần 100 triệu USD (90 triệu euro) để có Neymar. Ngoài ra, nhà vô địch bóng đá Pháp có thể nhận thêm số tiền nhất định dựa theo số trận và bàn thắng của Neymar trong tương lai.</p><p>Chiêu mộ Neymar, Al-Hilal trở thành CLB chi tiêu nhiều thứ hai thế giới trong mùa hè năm nay, lên đến 293 triệu USD. Chelsea dẫn đầu với 353 triệu USD.</p><p>Neymar đã ký vào hợp đồng có thời hạn hai năm với Al-Hilal mà không có tùy chọn gia hạn. Cầu thủ 31 tuổi này không đơn độc ở Saudi Arabia. Anh đến Vịnh Ba Tư theo bước các cầu thủ nổi tiếng khác như Cristiano Ronaldo, Karim Benzema, N’Golo Kante, Riyad Mahrez hay Sadio Mane - những cầu thủ quyết định rời nền bóng đá đỉnh cao châu Âu để đến giải đấu thấp hơn và đổi lại là khoản lương khổng lồ.</p><p>Hợp đồng trọn gói của Neymar là 300 triệu USD trong hai năm. Chỉ có Ronaldo, người nhận 200 triệu USD mỗi năm từ Al-Nassr là có lương cao hơn. Tổng thu nhập cho đến 2025 của Neymar có thể lên đến 400 triệu USD, dựa theo các điều khoản đi kèm cùng với những hợp đồng thương mại.</p><h4>a. 2009: Mùa giải ra mắt</h4><p>Neymar ra mắt chuyên nghiệp vào ngày 7 tháng 3 năm 2009, mặc dù mới 17 tuổi. Anh ấy được tung vào sân trong 30 phút cuối cùng, trong chiến thắng 2–1 trước Oeste.</p><h4>b. 2010: Thành công tại Campeonato Paulista</h4><p>Neymar tiếp tục thăng hoa trong năm 2010, và vào ngày 15 tháng 4 năm 2010, anh ghi 5 bàn cho Santos trong trận thắng 8-1 trước Guarani ở vòng loại Cúp bóng đá Brasil.</p><figure class="image"><img alt="" src="https://en.coin-turk.com/wp-content/uploads/2023/07/altcoin-news-0003-1.jpg" width="1200"> <figcaption>Đốt cháy 100 triệu đô la! Sự sụt giảm nguồn cung lớn đối với các loại tiền thay thế phổ biến!</figcaption> </figure><p>Ở Al-Hilal, Neymar trở thành đồng đội của một số cầu thủ vừa đến từ châu Âu như Kalidou Koulibaly, Ruben Neves, Sergej Milinkovic-Savic. Al-Hilal là một trong những CLB lớn nhất Saudi Pro League, có 75% cổ phần thuộc sở hữu của Quỹ đầu tư công có chủ quyền Saudi Arabia (PIF).</p>'}
    const productList = [
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'},
        {title: 'Airwheel SE3S', link: '', image: '4.webp', price: 21000000, selled: 21, inventory: 30, description: 'Cấu trúc FLAT-MAX™ 20/80 tối ưu sức chứa. Hệ thống dừng EASY BRAKE™ cố định bánh xe, không gây trượt ngã va li trên bề mặt dốc.'}
    ]
    const htmlContent = detail.content;
    const brands = ['dk-bike-200-2.png','Hitasa-200-2.png','jvc-eco-2.png','LOGO-XE-DIEN-06.png','nijia-logo-200.png']
    return (
        <div className="category mt-4">
            <div className="container mx-auto">
                <div className="grid gap-2 md:grid-cols-12">
                    <div className={(!status ? "hidden" : "mobile") + " md:block md:col-span-3"}>
                        <div className="border border-r-slate-300 rounded-md p-4">
                            <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
                                Danh Mục Sản Phẩm
                            </h3>
                            <div className="mt-4">
                                <ul className="text-[#333] text-sm leading-8">
                                    <li className="flex border-b border-b-slate-300 pb-2 mb-2">
                                        <input type="checkbox" id="xdn" />
                                        <label htmlFor="xdn" className="uppercase cursor-pointer ml-4 hover:text-[#6fa400]">
                                            Xe đạp cho nam <sup>(7)</sup>
                                        </label>
                                    </li>
                                    <li className="flex">
                                        <input type="checkbox" id="xdu" />
                                        <label htmlFor="xdu" className="uppercase cursor-pointer ml-4 hover:text-[#6fa400]">
                                            Xe đạp Unisex <sup>(2)</sup>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border border-r-slate-300 rounded-md p-4 mt-4">
                            <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
                                Thương Hiệu
                            </h3>
                            <div className="mt-6">
                                <ul>
                                    {
                                        brands.map((e,i)=>(
                                            <li key={i} className="flex border-b border-b-slate-300 pb-4 mb-4">
                                                <input type="checkbox" id="th1" />
                                                <label htmlFor="th1" className="uppercase cursor-pointer ml-4 hover:text-[#6fa400]">
                                                    <img src={'/' + e} alt="" width={100} />
                                                    {/* <Image
                                                        src="/dk-bike-200-2.png"
                                                        alt="dk-bike-200-2.png"
                                                        width={100}
                                                        height={100}
                                                    /> */}
                                                </label>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="border border-r-slate-300 rounded-md p-4 mt-4">
                            <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
                                Màu Sắc
                            </h3>
                            <div className="mt-4">
                                <div className="grid gap-4 grid-cols-4">
                                    <div className="col-span-1">
                                        <input type="hidden" id="black" />
                                        <label htmlFor="black" className="w-9 h-9 block bg-black rounded-[50%] border border-black cursor-pointer hover:opacity-70"></label>
                                    </div>
                                    <div className="col-span-1">
                                        <input type="hidden" id="red" />
                                        <label htmlFor="red" className="w-9 h-9 block bg-[red] rounded-[50%] border border-[red] cursor-pointer hover:opacity-70"></label>
                                    </div>
                                    <div className="col-span-1">
                                        <input type="hidden" id="blue" />
                                        <label htmlFor="blue" className="w-9 h-9 block bg-[blue] rounded-[50%] border border-[blue] cursor-pointer hover:opacity-70"></label>
                                    </div>
                                    <div className="col-span-1">
                                        <input type="hidden" id="orange" />
                                        <label htmlFor="orange" className="w-9 h-9 block bg-[orange] rounded-[50%] border border-[orange] cursor-pointer hover:opacity-70"></label>
                                    </div>
                                    <div className="col-span-1">
                                        <input type="hidden" id="green" />
                                        <label htmlFor="green" className="w-9 h-9 block bg-[green] rounded-[50%] border border-[green] cursor-pointer hover:opacity-70"></label>
                                    </div>
                                    <div className="col-span-1">
                                        <input type="hidden" id="peru" />
                                        <label htmlFor="peru" className="w-9 h-9 block bg-[peru] rounded-[50%] border border-[peru] cursor-pointer hover:opacity-70"></label>
                                    </div>
                                    <div className="col-span-1">
                                        <input type="hidden" id="white" />
                                        <label htmlFor="white" className="w-9 h-9 block bg-white rounded-[50%] border border-slate-300 cursor-pointer hover:opacity-70"></label>
                                    </div>
                                    <div className="col-span-1">
                                        <input type="hidden" id="yellow" />
                                        <label htmlFor="yellow" className="w-9 h-9 block bg-[yellow] rounded-[50%] border border-[yellow] cursor-pointer hover:opacity-70"></label>
                                    </div>
                                    <div className="col-span-1">
                                        <input type="hidden" id="purple" />
                                        <label htmlFor="purple" className="w-9 h-9 block bg-[purple] rounded-[50%] border border-[purple] cursor-pointer hover:opacity-70"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-r-slate-300 rounded-md p-4 mt-4">
                            <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
                                Giá
                            </h3>
                            <div className="mt-4">
                                <div>
                                    <input
                                        type="range"
                                        id="rangeInput"
                                        min="0"
                                        max="10000000"
                                        value={value}
                                        onChange={handleChange}
                                        className="w-full"
                                    />
                                    <div className="text-sm text-[#333]">Price: <span className="font-bold text-[#bdbdbd]">{formattedNumber(value)} <u>đ</u></span></div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-r-slate-300 rounded-md p-2 mt-4 sticky top-16">
                            <div className="bg-[#333] text-[#a1e611] rounded-lg text-lg text-center p-2 font-bold uppercase italic">
                                The world ebike.com
                            </div>
                            <div className="border py-2 border-r-slate-300 bg-[#e0e0e0] rounded-lg text-lg text-center font-bold uppercase mt-2">
                                <a href="tel:0946721565">
                                    <div className="text-2xl text-[red] rounded-lg">0946721565</div>
                                    <div className="">Hotline mua hàng</div>
                                </a>
                            </div>
                            <div className="bg-[#333] rounded-lg text-lg text-center p-2 font-bold uppercase mt-2">
                                <a href="">
                                    <span className="text-white text-sm">
                                        Chat trực tiếp <span className="text-2xl text-[#a1e611]">Zalo</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-9">
                        <div className="md:flex flex-row">
                            <h1 className="basis-3/4 text-2xl pl-4 pt-0 pb-4 font-semibold text-[#333]">{detail.title}</h1>
                            <div className="basis-1/4 mx-4 md:mx-0 flex flex-row">
                                <form action="" className="basis-4/5">
                                    <select name="sort" id="sort" className="bg-[#e0e0e0] p-2 rounded">
                                        <option value="0">Theo thứ tự phổ biến</option>
                                        <option value="1">Giá: Từ A - Z</option>
                                    </select>
                                </form>
                                <div className={(!status ? "bg-[#a1e611] text-[#333]" : "bg-[#333] text-[#fff]") + " md:hidden p-2 basis-1/5 text-center rounded"} onClick={() => handleTabClick()}>
                                    <i className={!status ? "fa-solid fa-bars": "fa fa-close"}></i>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-4 md:mt-0"/>
                        <div className="grid gap-0 grid-cols-4 md:grid-cols-3 md:items-center">
                            {
                                productList.map((e, i)=>(
                                    <div key={i} className={i==2 || i==5 || i==8 || i==11 ? "col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-white": "col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-slate-300"}>
                                        <div className="products p-4">
                                            <Link href="/product.html" className="text-[#333]">
                                                <div className="image">
                                                    <img src={'/' + e.image} alt="" width={500} />
                                                </div>
                                                <h3 className="text-sm mb-2 font-semibold text-[#626262]">{e.title}</h3>
                                                <p className="text-xs mb-4">{e.description}</p>
                                                <div className="price font-bold mb-7 text-xl">{formattedNumber(e.price)}</div>
                                                <div className="selled">
                                                    <span className="bg-[#333] text-[#a1e611] rounded text-xs relative">
                                                        <img src="/fire.webp" alt="" width={40} />
                                                        Đã bán {e.selled + '/' + e.inventory}
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mt-4">
                            <ul className="flex flex-row space-x-1 justify-center">
                                <li>
                                    <a className="w-9 h-9 p-2 block bg-[#333] rounded-[50%] flex items-center justify-center border border-black cursor-pointer hover:bg-[#a1e611] hover:text-[#333] text-center text-white" href="#">
                                        <i className="fa fa-light fa-angle-left"></i>
                                    </a>
                                </li>
                                <li className='active'>
                                    <a className="w-9 h-9 p-2 block bg-[#333] rounded-[50%] flex items-center justify-center border border-black cursor-pointer hover:bg-[#a1e611] hover:text-[#333] text-center text-white" href="#">
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a className="w-9 h-9 p-2 block bg-[#333] rounded-[50%] flex items-center justify-center border border-black cursor-pointer hover:bg-[#a1e611] hover:text-[#333] text-center text-white" href="#">
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a className="w-9 h-9 p-2 block bg-[#333] rounded-[50%] flex items-center justify-center border border-black cursor-pointer hover:bg-[#a1e611] hover:text-[#333] text-center text-white" href="#">
                                        3
                                    </a>
                                </li>
                                <li>
                                    <a className="w-9 h-9 p-2 block bg-[#333] rounded-[50%] flex items-center justify-center border border-black cursor-pointer hover:bg-[#a1e611] hover:text-[#333] text-center text-white" href="#">
                                        <i className="fa fa-light fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12 md:relative text-center md:text-left">
                            <h2 className="mb-6 border-b border-[#333]">
                                <span className="bg-[#333] text-[#a1e611] italic font-semibold text-xl uppercase p-4 rounded font-semibold">
                                    Xedienvui.vn
                                </span>
                            </h2>
                            <span className="md:absolute right-0 top-0 font-semibold italic">
                                Luôn làm hài lòng khách hàng
                            </span>
                        </div>
                        <div className="content mt-10 text-[#666] px-4 leading-6 text-justify" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                        <div className="border-y py-4 my-5 flex gap-2">
                            <div className="basis-2/12 md:basis-1/12">
                                <img src="/user.webp" alt="" width={100} className="rounded-full" />
                            </div>
                            <div className="basis-10/12 md:basis-11/12 text-[#666]">
                                <div className="font-semibold">admin@gmail.com</div>
                                <p className="text-xs italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}