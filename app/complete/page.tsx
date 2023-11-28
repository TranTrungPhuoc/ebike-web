import Link from "next/link";

export default function Page() {
    return (
        <main>
            <div className="breadcrumbs">
                <div className="container mx-auto">
                    <ul className="flex flex-wrap px-2 md:px-0 py-4 text-xs md:text-sm text-[#333] border-b border-r-slate-300">
                        <li><Link href="/"><i className="fa fa-home text-[#6fa400]"></i> Trang chủ</Link></li>
                        <li className="text-[#6fa400]">Đặt hàng thành công</li>
                    </ul>
                </div>
            </div>
            <div className="store md:mt-12">
                <div className="container mx-auto">
                    <h1 className="title relative mb-4">
                        <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                            Đặt hàng thành công
                        </span>
                    </h1>
                    <div className="grid gap-4 grid-cols-5 mx-4 md:mx-0 md:items-center md:border-t md:border-[#333] md:pt-12">
                        <div className="col-span-5 md:col-span-1"></div>
                        <div className="col-span-5 md:col-span-3 text-sm">
                            <div className="text-center">
                                <img src="/complete.png" className="w-1/3 m-auto" alt="" />
                                <h3 className="text-2xl text-[#6fa400]">Cảm ơn bạn. Đơn hàng của bạn đã được nhận.</h3>
                                <div className="mt-4">
                                    <table className="min-w-full bg-white border border-gray-300 mt-4 text-sm">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border-b">
                                                    Mã đơn: <b>14132</b>
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    Ngày: <b>29/11/2023</b>
                                                </td>
                                                <td className="py-2 px-4 border-b">
                                                    Tổng: <b>9.890.000VND</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3} className="py-2 px-4 border-b">
                                                    Phương thức thanh toán: <b>Thanh toán tại cửa hàng</b>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="mt-4">
                                        <Link href={'/'} className="bg-[#f8f8f8] hover:text-[#6fa400] text-center uppercase py-4 px-8 block mt-8 hover:opacity-90 rounded">
                                            Trở về trang chủ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5 md:col-span-1"></div>
                    </div>
                </div>
            </div>
        </main>
    );
}