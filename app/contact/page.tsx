import Image from "next/image";
import Link from 'next/link'
export default function Page() {
    const storeList = [
        {
            dictrict: "Quận 7",
            phoe: "028.3535.2458",
            image: "xe-dap-tphcm.jpeg",
            address: "458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.",
            time: "Thứ 2 - Chủ Nhật: 9hAM - 9hPM",
        },
        {
            dictrict: "Quận 7",
            phoe: "028.3535.2458",
            image: "xe-dap-tphcm.jpeg",
            address: "458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.",
            time: "Thứ 2 - Chủ Nhật: 9hAM - 9hPM",
        },
        {
            dictrict: "Quận 7",
            phoe: "028.3535.2458",
            image: "xe-dap-tphcm.jpeg",
            address: "458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.",
            time: "Thứ 2 - Chủ Nhật: 9hAM - 9hPM",
        },
        {
            dictrict: "Quận 7",
            phoe: "028.3535.2458",
            image: "xe-dap-tphcm.jpeg",
            address: "458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.",
            time: "Thứ 2 - Chủ Nhật: 9hAM - 9hPM",
        }
    ];
    const iframeStyle = {
        with: '100%',
        height: '500px',
    };
    return (
        <main>
            <div className="breadcrumbs">
                <div className="container mx-auto">
                    <ul className="flex flex-wrap px-2 md:px-0 py-4 text-xs md:text-sm text-[#333] border-b border-r-slate-300">
                        <li><Link href="/"><i className="fa fa-home text-[#6fa400]"></i> Trang chủ</Link></li>
                        <li className="text-[#6fa400]">Liên hệ</li>
                    </ul>
                </div>
            </div>
            <div className="store md:mt-12 contact">
                <div className="container mx-auto">
                    <h1 className="title relative mb-4">
                        <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                            Liên hệ
                        </span>
                    </h1>
                    <div className="p-2 md:p-0 grid gap-4 grid-cols-3 mb-4 mx-4 md:mx-0 md:border-t md:border-[#333] md:pt-12">
                        <div className="col-span-4 md:col-span-2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9335213251593!2d106.70731649999999!3d10.739607099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f9b8ad93a4d%3A0x5f42a29ac7b99888!2zNDU4IE5ndXnhu4VuIFRo4buLIFRo4bqtcCwgVMOibiBRdXksIFF14bqtbiA3LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1694827875345!5m2!1svi!2s" height="500" className="w-full border border-[#333] rounded" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-span-4 md:col-span-1 text-sm">
                            <div className="mb-4">
                                <Image
                                    src="/xe-dap-tphcm.jpeg"
                                    alt="xe-dap-tphcm.jpeg"
                                    width={500}
                                    height={500}
                                    className="w-full rounded-t"
                                />
                            </div>
                            <h2 className="text-xl font-semibold text-[#333]">Trụ sở chính: 458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.</h2>
                            <h3 className="mt-4 text-slate-500">Điện Thoại: <b className="text-[red]">028.3535.2458</b></h3>
                            <h3 className="mt-4 text-slate-500">Email: <b className="text-[#6fa400]">info@ebike.com</b></h3>
                            <h3 className="mt-4 text-slate-500">Giờ mở cửa: <b className="text-[#333]">8AM – 9PM</b></h3>
                            <p className="mt-4 text-slate-500">Mở cửa từ thứ 2 đến chủ nhật (Trừ các ngày Lễ, Tết)</p>
                        </div>
                    </div>
                    <div className="p-2 md:p-0 grid gap-4 grid-cols-2 mb-4 mx-4 md:mx-0 md:pt-8">
                        <div className="col-span-2 md:col-span-1">
                            <h2 className="text-lg mb-8 uppercase font-semibold border-b border-[#e5e7eb]">
                                Liên hệ chuỗi cửa hàng Ebike
                            </h2>
                            {
                                storeList.map((e, i) => (
                                    <div key={i} className="grid gap-4 grid-cols-3 mb-4 p-2 hover:bg-[#f5f5f5] shadow-md shadow-[#ccc] hover:duration-300">
                                        <div className="col-span-1">
                                            <Image
                                                src="/xe-dap-tphcm.jpeg"
                                                alt="xe-dap-tphcm.jpeg"
                                                width={200}
                                                height={200}
                                                className="w-full rounded-t"
                                            />
                                        </div>
                                        <div className="col-span-2 text-sm">
                                            <h3 className="font-semibold text-[#333] mb-2">
                                                Địa Chỉ: 458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.
                                            </h3>
                                            <h4 className="text-slate-500"><i className="text-xs">Điện thoại:</i> <span className="font-semibold">028.3535.2458</span></h4>
                                            <h4 className="text-slate-500"><i className="text-xs">Email:</i> <span className="font-semibold">info@ebike.com</span></h4>
                                            <h4 className="text-slate-500"><i className="text-xs">Giờ mở cửa:</i> <span className="font-semibold">8AM – 9PM</span></h4>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <h2 className="text-lg mb-8 uppercase font-semibold border-b border-[#e5e7eb]">
                                Để lại thông tin
                            </h2>
                            <form action="#" method="POST">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-medium text-sm mb-2">Họ Tên <span className="text-[red]">(*)</span></label>
                                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border bg-[#f5f5f5] rounded-lg focus:outline-none focus:border-[#6fa400] focus:bg-white" placeholder="Nhập Họ Tên" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-medium text-sm mb-2">Số Điện Thoại <span className="text-[red]">(*)</span></label>
                                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border bg-[#f5f5f5] rounded-lg focus:outline-none focus:border-[#6fa400] focus:bg-white" placeholder="Nhập Số Điện Thoại" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-medium text-sm mb-2">Email <span className="text-[red]">(*)</span></label>
                                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border bg-[#f5f5f5] rounded-lg focus:outline-none focus:border-[#6fa400] focus:bg-white" placeholder="Nhập Email" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="content" className="block text-gray-700 font-medium text-sm mb-2">Nội Dung <span className="text-[red]">(*)</span></label>
                                    <textarea id="message" name="message" rows={7} className="w-full px-4 py-2 border bg-[#f5f5f5] rounded-lg focus:outline-none focus:border-[#6fa400] focus:bg-white" placeholder="Nhập Nội Dung" required></textarea>
                                </div>
                                <div className="mb-6">
                                    <button type="submit" className="w-full bg-[#6fa400] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#333] focus:outline-none">
                                        Gửi Liên Hệ
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}