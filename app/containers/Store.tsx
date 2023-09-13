import Image from "next/image";

export function Store() {
    return (
        <div className="store mt-8 md:mt-16">
            <div className="container mx-auto">
                <div className="title relative mb-4">
                    <span className="md:absolute block bg-[#333] text-[#a1e611] font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                        Hệ thống cửa hàng
                    </span>
                </div>
                <div className="grid gap-4 grid-cols-3 mx-4 md:mx-0 md:items-center md:border-t md:border-[#333] md:pt-12">
                    <div className="col-span-3 md:col-span-1 text-center">
                        <div className="border border-[#333] p-2 rounded hover:bg-[#e0e0e0]">
                            <div className="image">
                                <Image
                                    src="/xe-dap-tphcm.jpeg"
                                    alt="xe-dap-tphcm.jpeg"
                                    width={500}
                                    height={500}
                                    className="w-full rounded"
                                />
                            </div>
                            <h5 className="text-xl font-semibold mb-2 mt-2">Quận 7</h5>
                            <div className="contact">
                                <ul className="text-sm">
                                    <li className="text-center"><b>Tel: <span className="text-[red]">028.3535.2458</span></b></li>
                                    <li>458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.</li>
                                    <li>Thứ 2 - Chủ Nhật: 9hAM - 9hPM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 text-center">
                        <div className="border border-[#333] p-2 rounded hover:bg-[#e0e0e0]">
                            <div className="image">
                                <Image
                                    src="/xe-dap-tphcm.jpeg"
                                    alt="xe-dap-tphcm.jpeg"
                                    width={500}
                                    height={500}
                                    className="w-full rounded"
                                />
                            </div>
                            <h5 className="text-xl font-semibold mb-2 mt-2">Quận 7</h5>
                            <div className="contact">
                                <ul className="text-sm">
                                    <li className="text-center"><b>Tel: <span className="text-[red]">028.3535.2458</span></b></li>
                                    <li>458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.</li>
                                    <li>Thứ 2 - Chủ Nhật: 9hAM - 9hPM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 text-center">
                        <div className="border border-[#333] p-2 rounded hover:bg-[#e0e0e0]">
                            <div className="image">
                                <Image
                                    src="/xe-dap-tphcm.jpeg"
                                    alt="xe-dap-tphcm.jpeg"
                                    width={500}
                                    height={500}
                                    className="w-full rounded"
                                />
                            </div>
                            <h5 className="text-xl font-semibold mb-2 mt-2">Quận 7</h5>
                            <div className="contact">
                                <ul className="text-sm">
                                    <li className="text-center"><b>Tel: <span className="text-[red]">028.3535.2458</span></b></li>
                                    <li>458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.</li>
                                    <li>Thứ 2 - Chủ Nhật: 9hAM - 9hPM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}