import Image from 'next/image';
export function Footer() {
    return (
        <footer className="mt-7">
            <div className="p-7 bg-[#e0e0e0]">
                <div className="container mx-auto">
                    <div className="grid gap-6 grid-cols-4">
                        <div className="col-span-4 md:col-span-1">
                            <h5 className="text-[#6fa400] uppercase font-bold text-lg">Thông tin</h5>
                            <hr className="my-2 border-[#6fa400]" />
                            <ul className="leading-8">
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Tin Tức
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Tuyển dụng
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Zalo 1: <span className="font-bold text-[#333]">0911.966.944</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Zalo 2: <span className="font-bold text-[#333]">0911.966.944</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-4 md:col-span-1">
                            <h5 className="text-[#6fa400] uppercase font-bold text-lg">Chính sách</h5>
                            <hr className="my-2 border-[#6fa400]" />
                            <ul className="leading-8">
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Hướng dẫn trả góp
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Chế độ bảo hành
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Chính sách bảo hành
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Khuyến mãi
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-4 md:col-span-1">
                            <h5 className="text-[#6fa400] uppercase font-bold text-lg">Công ty</h5>
                            <hr className="my-2 border-[#6fa400]" />
                            <ul className="leading-8">
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Giới thiệu
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Hệ thống cửa hàng
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Liên hệ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-4 md:col-span-1">
                            <h5 className="text-[#6fa400] uppercase font-bold text-lg">Kết nối</h5>
                            <hr className="my-2 border-[#6fa400]" />
                            <ul className="flex">
                                <li className="mr-2">
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa-brands fa-square-facebook"></i>
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa-brands fa-square-pinterest"></i>
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa-brands fa-square-twitter"></i>
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa-brands fa-square-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-7 bg-[#333] text-white">
                <div className="container mx-auto">
                    <div className="grid gap-6 grid-cols-5">
                        <div className="col-span-5 md:col-span-1">
                            <ul className="leading-8 text-sm">
                                <li>Hotline: <span className="text-[#a1e611] text-xl">1800 8973</span></li>
                                <li>CSKH: 1800 9063 (9:00 - 17:00)</li>
                                <li>Email: info@ebike.com</li>
                            </ul>
                            <div className="mt-2">
                                <Image
                                    src="/dathongbao.png"
                                    alt="dathongbao.png"
                                    width={150}
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="col-span-5 md:col-span-2">
                            <h1 className="uppercase text-[#a1e611] text-2xl mb-3 font-semibold">Công ty cổ phần Ebike</h1>
                            <ul className="leading-8 text-sm">
                                <li>ĐKKD/MST: 0313891315 do sở KHDT TP.HCM cấp 04/07/2016</li>
                                <li>Trụ sở: 100 Hải Thượng Lãn Ông, P.10, Quận 5, TP.HCM</li>
                            </ul>
                        </div>
                        <div className="col-span-5 md:col-span-2">
                            <ul className="flex justify-evenly payment bg-white p-2 rounded-sm">
                                <li className="mr-2">
                                    <a href="">
                                        <Image
                                            src="/visa.png"
                                            alt="visa.png"
                                            width={80}
                                            height={50}
                                        />
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="">
                                        <Image
                                            src="/mastercard.png"
                                            alt="mastercard.png"
                                            width={80}
                                            height={50}
                                        />
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="">
                                        <Image
                                            src="/discover.png"
                                            alt="discover.png"
                                            width={80}
                                            height={50}
                                        />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <Image
                                            src="/american.png"
                                            alt="american.png"
                                            width={80}
                                            height={50}
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>            
        </footer>
    );
}