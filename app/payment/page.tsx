import Link from "next/link";

export default function Page() {
    return (
        <main>
            <div className="breadcrumbs">
                <div className="container mx-auto">
                    <ul className="flex flex-wrap px-2 md:px-0 py-4 text-xs md:text-sm text-[#333] border-b border-r-slate-300">
                        <li><Link href="/"><i className="fa fa-home text-[#6fa400]"></i> Trang chủ</Link></li>
                        <li className="text-[#6fa400]">Thanh toán</li>
                    </ul>
                </div>
            </div>
            <div className="store md:mt-12">
                <div className="container mx-auto">
                    <h1 className="title relative mb-4">
                        <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                            Thanh toán
                        </span>
                    </h1>
                    <div className="md:grid gap-4 grid-cols-2 mx-4 md:mx-0 md:items-center md:border-t md:border-[#333] md:pt-12">
                        <div className="col-span-1 text-sm">
                            <h2 className="text-xl uppercase">Địa chỉ nhận hàng</h2>
                            <hr className="mt-4" />
                            <div className="mt-4">
                                <label htmlFor="fullname" className="w-full">Họ và tên <span className="text-[red]">*</span></label>
                                <input type="text" className="border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white" placeholder="Nguyễn Văn A" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="address" className="w-full">Địa chỉ Email <span className="text-[red]">*</span></label>
                                <input type="text" className="border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white" placeholder="info@ebike.com" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="address" className="w-full">Số điện thoại <span className="text-[red]">*</span></label>
                                <input type="text" className="border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white" placeholder="0385556667" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="fullname" className="w-full">Quốc gia <span className="text-[red]">*</span></label>
                                <select className="border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white">
                                    <option value="">-Chọn-</option>
                                    <option value="vn" selected>Việt Nam</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="fullname" className="w-full">Tỉnh / Thành phố <span className="text-[red]">*</span></label>
                                <select className="border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white">
                                    <option value="">-Chọn-</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="fullname" className="w-full">Quận / Huyện <span className="text-[red]">*</span></label>
                                <select className="border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white">
                                    <option value="">-Chọn-</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="fullname" className="w-full">Phường / Xã <span className="text-[red]">*</span></label>
                                <select className="border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white">
                                    <option value="">-Chọn-</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="address" className="w-full">Địa chỉ <span className="text-[red]">*</span></label>
                                <input type="text" className="border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white" placeholder="100 Hải Thượng Lãn Ông" />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="address" className="w-full">Ghi chú đơn hàng</label>
                                <textarea className="border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white" name="" id="" rows={3}></textarea>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="mt-8 md:mt-0 border border-2 border-slate-700 rounded p-8">
                                <h2 className="text-xl uppercase">Đơn hàng của bạn</h2>
                                <table className="min-w-full bg-white border border-gray-300 mt-4 text-sm">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border-b text-left text-[#bdbdbd]">SẢN PHẨM</th>
                                            <th className="py-2 px-4 border-b text-[#bdbdbd]">TỔNG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-2 px-4 border-b text-xs md:text-sm">
                                                <Link href={'/product.html'} className="hover:text-[#6fa400]">
                                                    Xe Đạp Đường Phố Touring GIANT Fastroad 1 - Phanh Đĩa, Bánh 700C - 2024
                                                </Link>
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                <span className="text-[#6fa400] text-base">
                                                    26.990.000</span> <br /><span className="text-xs">(VNĐ)
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b text-xs md:text-sm">
                                                <Link href={'/product.html'} className="hover:text-[#6fa400]">
                                                    Xe Đạp Đường Phố Touring GIANT Fastroad 1 - Phanh Đĩa, Bánh 700C - 2024
                                                </Link>
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                <span className="text-[#6fa400] text-base">
                                                    26.990.000</span> <br /><span className="text-xs">(VNĐ)
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b text-xs md:text-sm">
                                                Tổng thu (VNĐ)
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                <span className="text-[#333] text-lg">
                                                    <b>53.980.000</b>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h2 className="md:text-xl uppercase mt-4">Phương thức giao hàng</h2>
                                <div className="mt-4">
                                    <ul className="text-sm px-4">
                                        <li className="mb-4"><input type="radio" name="ptgh" id="ptgh1" checked /> <label htmlFor="ptgh1">Giao hàng miễn phí (Bán kính dưới 15km)</label></li>
                                        <li><input type="radio" name="ptgh" id="ptgh2" /> <label htmlFor="ptgh2">Click and Collect (Nhận hàng tại cửa hàng)</label></li>
                                    </ul>
                                    <div className="text-sm mt-4">
                                        Tổng thu:
                                        <span className="text-[#333] text-lg ml-2">
                                            <b>53.980.000</b> <small>(VNĐ)</small>
                                        </span>
                                    </div>
                                </div>
                                <hr className="mt-4" />
                                <h2 className="md:text-xl uppercase mt-4">Phương thức thanh toán</h2>
                                <div className="mt-4">
                                    <ul className="text-sm px-4">
                                        <li className="mb-4"><input type="radio" name="pttt" id="pttt1" checked /> <label htmlFor="pttt1">Thanh toán tại cửa hàng</label></li>
                                        <li><input type="radio" name="pttt" id="pttt2" /> <label htmlFor="pttt2">Chuyển khoản ngân hàng</label></li>
                                    </ul>
                                </div>
                                <hr className="mt-4" />
                                <div className="md:grid gap-4 grid-cols-2">
                                    <Link href={'/complete'} className="text-white text-center uppercase py-4 px-8 block mt-8 bg-[#6fa400] hover:opacity-90 rounded">
                                        Thanh Toán
                                    </Link>
                                    <Link href={'/cart'} className="bg-[#f8f8f8] hover:text-[#6fa400] text-center uppercase py-4 px-8 block mt-8 hover:opacity-90 rounded">
                                        Giỏ hàng
                                    </Link>
                                </div>
                                <p className="mt-4 text-sm text-[#a4a4a4] text-justify leading-7">
                                    Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng của bạn, hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này và cho các mục đích khác được mô tả trong <span className="text-[#333]">chính sách riêng tư</span> của chúng tôi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}