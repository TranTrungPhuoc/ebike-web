// import Image from 'next/image';
import Link from "next/link";
export function Footer() {
    const payments = ['visa.png','mastercard.png','discover.png','american.png']
    return (
        <footer className="mt-7">
            <div className="p-7 bg-[#e0e0e0]">
                <div className="container mx-auto">
                    <div className="grid gap-6 grid-cols-4 text-sm">
                        <div className="col-span-4 md:col-span-1">
                            <h5 className="text-[#6fa400] uppercase font-semibold text-lg">Thông tin</h5>
                            <hr className="my-2 border-[#6fa400]" />
                            <ul className="leading-6">
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
                            <h5 className="text-[#6fa400] uppercase font-semibold text-lg">Chính sách</h5>
                            <hr className="my-2 border-[#6fa400]" />
                            <ul className="leading-6">
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
                            <h5 className="text-[#6fa400] uppercase font-semibold text-lg">Công ty</h5>
                            <hr className="my-2 border-[#6fa400]" />
                            <ul className="leading-6">
                                <li>
                                    <a href="" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Giới thiệu
                                    </a>
                                </li>
                                <li>
                                    <Link href="/store" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Hệ thống cửa hàng
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-[#6fa400]">
                                        <i className="fa fa-caret-right text-xs text-[#6fa400]"></i> Liên hệ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-4 md:col-span-1">
                            <h5 className="text-[#6fa400] uppercase font-semibold text-lg">Kết nối</h5>
                            <hr className="my-2 border-[#6fa400]" />
                            <p className="mb-2">Chia sẻ thông tin qua các kệnh mạng xã hội:</p>
                            <ul className="flex">
                                <li className="mr-2">
                                    <a href="" className="hover:text-[#3b5998]">
                                        <i className="fa-brands fa-square-facebook text-base"></i>
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="" className="hover:text-[#E60023]">
                                        <i className="fa-brands fa-square-pinterest text-base"></i>
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="" className="hover:text-[#1DA1F2]">
                                        <i className="fa-brands fa-square-twitter text-base"></i>
                                    </a>
                                </li>
                                <li className="mr-2">
                                    <a href="" className="hover:text-[#0077B5]">
                                        <i className="fa-brands fa-linkedin text-base"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className="hover:text-[#E4405F]">
                                        <i className="fa-brands fa-square-instagram text-base"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-7 pt-7 pb-24 md:p-7 bg-[#333] text-white">
                <div className="container mx-auto">
                    <div className="grid gap-6 grid-cols-4">
                        <div className="col-span-5 md:col-span-1">
                            <ul className="text-xs md:text-sm">
                                <li>Hotline: <span className="text-[#a1e611] text-xl">1800 8973</span></li>
                                <li>CSKH: 1800 9063 (9:00 - 17:00)</li>
                                <li>Email: info@ebike.com</li>
                            </ul>
                            <div className="mt-2">
                                <img src="/dathongbao.png" alt="" width={150} height={50} />
                                {/* <Image
                                    src="/dathongbao.png"
                                    alt="dathongbao.png"
                                    width={150}
                                    height={50}
                                /> */}
                            </div>
                        </div>
                        <div className="col-span-5 md:col-span-2">
                            <h1 className="uppercase text-[#a1e611] text-xl md:text-2xl mb-3 font-semibold">Công ty cổ phần Ebike</h1>
                            <ul className="text-xs md:text-sm">
                                <li>ĐKKD/MST: 0313891315 do sở KHDT TP.HCM cấp 04/07/2016</li>
                                <li>Trụ sở: 100 Hải Thượng Lãn Ông, P.10, Quận 5, TP.HCM</li>
                            </ul>
                        </div>
                        <div className="col-span-5 md:col-span-1">
                            <div className="grid gap-2 grid-cols-4 payment">
                                {
                                    payments.map((e,i)=>(
                                        <div key={i} className="col-span-1 bg-white p-2 rounded">
                                            <a href="">
                                                <img src={'/' + e} alt="" width={80} height={50} className="hover:opacity-70" />
                                                {/* <Image
                                                    src="/visa.png"
                                                    alt="visa.png"
                                                    width={80}
                                                    height={50}
                                                    className="hover:opacity-70"
                                                /> */}
                                            </a>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </footer>
    );
}