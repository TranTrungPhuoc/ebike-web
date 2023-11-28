// import Image from "next/image";
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
    ];
    return (
        <main>
            <div className="breadcrumbs">
                <div className="container mx-auto">
                    <ul className="flex flex-wrap px-2 md:px-0 py-4 text-xs md:text-sm text-[#333] border-b border-r-slate-300">
                        <li><Link href="/"><i className="fa fa-home text-[#6fa400]"></i> Trang chủ</Link></li>
                        <li className="text-[#6fa400]">Hệ thống cửa hàng</li>
                    </ul>
                </div>
            </div>
            <div className="store md:mt-12">
                <div className="container mx-auto">
                    <h1 className="title relative mb-4">
                        <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                            Hệ thống cửa hàng
                        </span>
                    </h1>
                    <div className="grid gap-4 grid-cols-6 mx-4 md:mx-0 md:items-center md:border-t md:border-[#333] md:pt-12">
                        {storeList.map((e, i) => (
                            <div key={i} className="col-span-3 md:col-span-2 text-center">
                                <div className="rounded hover:bg-[#f5f5f5] shadow-md shadow-[#ccc] hover:duration-300">
                                    <div className="image">
                                        <img src="/xe-dap-tphcm.jpeg" alt="" width={500} className="w-full rounded-t" />
                                    </div>
                                    <h5 className="text-xl font-semibold mt-2">Quận 7</h5>
                                    <div className="contact p-2">
                                        <ul className="text-sm">
                                            <li className="text-center"><b>Tel: <span className="text-[red]">028.3535.2458</span></b></li>
                                            <li className='text-xs'>458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. HCM</li>
                                            <li>Thứ 2 - Chủ Nhật: 9hAM - 9hPM</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}