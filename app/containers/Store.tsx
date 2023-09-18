import Image from "next/image";
import Link from "next/link";
export function Store() {
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
    ];
    return (
        <div className="store mt-8 md:mt-16">
            <div className="container mx-auto">
                <div className="title relative mb-4">
                    <span className="md:absolute block bg-[#333] text-[#a1e611] font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                        <Link href="/store" className="hover:text-white hover:duration-300">Hệ thống cửa hàng</Link>
                    </span>
                </div>
                <div className="grid gap-4 grid-cols-3 mx-4 md:mx-0 md:items-center md:border-t md:border-[#333] md:pt-12">
                    {storeList.map((e, i) => (
                        <div key={i} className="col-span-3 md:col-span-1 text-center">
                            <div className="rounded hover:bg-[#f5f5f5] shadow-md shadow-[#ccc] hover:duration-300">
                                <div className="image">
                                    <img src="/xe-dap-tphcm.jpeg" width={500} alt="" className="w-full rounded-t" />
                                    {/* <Image
                                        src="/xe-dap-tphcm.jpeg"
                                        alt="xe-dap-tphcm.jpeg"
                                        width={500}
                                        height={500}
                                        className="w-full rounded-t"
                                    /> */}
                                </div>
                                <h5 className="text-xl font-semibold mt-2">Quận 7</h5>
                                <div className="contact p-2">
                                    <ul className="text-sm">
                                        <li className="text-center"><b>Tel: <span className="text-[red]">028.3535.2458</span></b></li>
                                        <li>458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.</li>
                                        <li>Thứ 2 - Chủ Nhật: 9hAM - 9hPM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}