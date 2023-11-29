"use client";
import React, { useState } from 'react';
// import Image from 'next/image';
import Link from 'next/link'
export function Category() {
    const [showContent, setShowContent] = useState(false);
    const [value, setValue] = useState(2000000);
    const handleChange = (e: any) => {
        setValue(e.target.value);
    };
    const handeShowClick = () => {
        setShowContent(!showContent)
    }
    const formattedNumber = (numberToFormat: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
        }).format(numberToFormat);
    }
    const detail = {title: 'Xe đạp thể thao đường phố', content: '<h2>Haaland thắng giải Cầu thủ hay nhất của UEFA</h2><p>Tiền đạo Erling Haaland, người ghi 52 bàn qua 53 trận giúp Man City đoạt cú ăn ba mùa 2022-2023, vượt mặt Lionel Messi để giành giải Cầu thủ hay nhất của UEFA.</p><h3>1. Haaland thắng giải Cầu thủ hay nhất của UEFA</h3><p>Theo công bố của Liên đoàn <a href="/">Bóng đá châu Âu</a>, trong lễ bốc thăm Champions League mùa 2023-2024 tối 31/8, Haaland đạt 352 điểm, đứng trên Messi (227 điểm) và <b>Kevin De Bruyne</b> (225 điểm).</p><p><img src="/centent.png" alt="" /></p><h3>2. <strong>Neymar</strong> gia nhập <i>Al-Hilal</i></h3><p>Sau khi thông báo rời PSG, Neymar chính thức ký hợp đồng với Al-Hilal (trong ảnh) và trở thành cầu thủ có lương cao thứ hai thế giới.</p><p><img src="/neyma.webp" alt="" /></p><p>Ý định của Neymar khi quyết định chia tay PSG là trở lại Barcelona. Tuy nhiên, Xavi Hernandez không chào đón anh vì không muốn thay đổi dự án được xây dựng hơn một năm qua, ngay cả khi Ousmane Dembele bất ngờ đến PSG. Thế nên, cầu thủ người Brazil quyết định đến với bóng đá Saudi Arabia để khoác áo Al-Hilal.</p><p>Theo L’Equipe, Al-Hilal chấp nhận trả cho PSG mức phí chuyển nhượng cố định gần 100 triệu USD (90 triệu euro) để có Neymar. Ngoài ra, nhà vô địch bóng đá Pháp có thể nhận thêm số tiền nhất định dựa theo số trận và bàn thắng của Neymar trong tương lai.</p><p>Chiêu mộ Neymar, Al-Hilal trở thành CLB chi tiêu nhiều thứ hai thế giới trong mùa hè năm nay, lên đến 293 triệu USD. Chelsea dẫn đầu với 353 triệu USD.</p><p>Neymar đã ký vào hợp đồng có thời hạn hai năm với Al-Hilal mà không có tùy chọn gia hạn. Cầu thủ 31 tuổi này không đơn độc ở Saudi Arabia. Anh đến Vịnh Ba Tư theo bước các cầu thủ nổi tiếng khác như Cristiano Ronaldo, Karim Benzema, N’Golo Kante, Riyad Mahrez hay Sadio Mane - những cầu thủ quyết định rời nền bóng đá đỉnh cao châu Âu để đến giải đấu thấp hơn và đổi lại là khoản lương khổng lồ.</p><p>Hợp đồng trọn gói của Neymar là 300 triệu USD trong hai năm. Chỉ có Ronaldo, người nhận 200 triệu USD mỗi năm từ Al-Nassr là có lương cao hơn. Tổng thu nhập cho đến 2025 của Neymar có thể lên đến 400 triệu USD, dựa theo các điều khoản đi kèm cùng với những hợp đồng thương mại.</p><h4>a. 2009: Mùa giải ra mắt</h4><p>Neymar ra mắt chuyên nghiệp vào ngày 7 tháng 3 năm 2009, mặc dù mới 17 tuổi. Anh ấy được tung vào sân trong 30 phút cuối cùng, trong chiến thắng 2–1 trước Oeste.</p><h4>b. 2010: Thành công tại Campeonato Paulista</h4><p>Neymar tiếp tục thăng hoa trong năm 2010, và vào ngày 15 tháng 4 năm 2010, anh ghi 5 bàn cho Santos trong trận thắng 8-1 trước Guarani ở vòng loại Cúp bóng đá Brasil.</p><figure class="image"><img alt="" src="https://en.coin-turk.com/wp-content/uploads/2023/07/altcoin-news-0003-1.jpg" width="1200"> <figcaption>Đốt cháy 100 triệu đô la! Sự sụt giảm nguồn cung lớn đối với các loại tiền thay thế phổ biến!</figcaption> </figure><p>Ở Al-Hilal, Neymar trở thành đồng đội của một số cầu thủ vừa đến từ châu Âu như Kalidou Koulibaly, Ruben Neves, Sergej Milinkovic-Savic. Al-Hilal là một trong những CLB lớn nhất Saudi Pro League, có 75% cổ phần thuộc sở hữu của Quỹ đầu tư công có chủ quyền Saudi Arabia (PIF).</p>'}
    const postList = [
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg', description: 'Thoát vị đĩa đệm là một căn bệnh khá nghiêm trọng, có thể để lại nhiều biến chứng nguy hiểm…' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
    ]
    const postSeeMore = [
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
    ]
    const htmlContent = detail.content;
    return (
        <div className="video store mt-4">
            <div className="container mx-auto">
                <h1 className="title md:mt-12 relative">
                    <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                        {detail.title}
                    </span>
                </h1>
                <div className="p-2 md:p-0 grid gap-4 md:grid-cols-4 md:border-t md:border-[#333] md:pt-12">
                    <div className="md:col-span-3">
                        <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                            {
                                postList.map((e, i) => (
                                    <div key={i} className="col-span-1">
                                        <div className="post rounded border border-[#333] bg-[#f5f5f5] hover:duration-300">
                                            <Link href="/video/post.html">
                                                <div className="image relative">
                                                    <img src="/blog.jpeg" alt="" width={700} className="rounded-t" />
                                                    <span className="bg-white border border-[#333] px-2.5 py-1 rounded-lg absolute text-[#c50000] text-center opacity-90 top-1/2 left-1/2">
                                                        <i className="fa-brands fa-youtube fa-2x"></i>
                                                    </span>
                                                </div>
                                                <div className="text-[#333] p-4 rounded-b">
                                                    <h3 className="mb-2 font-semibold">Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt</h3>
                                                    <div className="mb-2 text-xs text-[#919191]"><i className="fa fa-calendar"></i> 26/09/2023 09:53</div>
                                                    <p className="text-xs text-[#333] text-justify">Thoát vị đĩa đệm là một căn bệnh khá nghiêm trọng, có thể để lại nhiều biến chứng nguy hiểm…</p>
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
                        <div className={"content mt-10 text-[#666] px-4 leading-6 text-justify" + (!showContent?' h-[500px] overflow-hidden': '')} dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                        <div className={"text-center relative" + (!showContent?' readmore': '')}>
                            <button type='button' className='border py-2 px-8 rounded hover:bg-[#6fa400] hover:text-white' onClick={() => handeShowClick()}>
                                { (!showContent?'Xem Thêm': 'Rút Gọn') }
                            </button>
                        </div>
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
                    <div className="md:col-span-1 postSidebar">
                        <div className="sticky top-16">
                            <h2 className="font-semibold text-xl text-[#333]">Bài viết xem nhiều</h2>
                            {
                                postSeeMore.map((e, i) => (
                                    <div key={i} className="mb-2">
                                        <Link href='/video/post.html'>
                                            <div key={i} className="flex flex-row">
                                                <div className="basis-1/3">
                                                    <img src="/blog.jpeg" alt="" width={200} className="rounded" />
                                                </div>
                                                <div className="basis-2/3 ml-2">
                                                    <h3 className="text-[12.5px] font-semibold hover:text-[#6fa400]">
                                                        Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt
                                                    </h3>
                                                    <div className="text-[10px] text-[#919191]">
                                                        <i className="fa fa-eye text-[#6fa400]"></i>{" "}
                                                        {formattedNumber(439)} lượt xem
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}