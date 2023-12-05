"use client"
import { useState } from 'react';
import Link from "next/link";
export function Store() {
    const storeList = [
        {
            dictrict: "Quận 1",
            phoe: "028.3535.2458",
            image: "xe-dap-tphcm.jpeg",
            address: "458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.",
            time: "Thứ 2 - Chủ Nhật: 9hAM - 9hPM",
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.769603124776!2d106.69836255!3d10.77517705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2zUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1701775552492!5m2!1svi!2s'
        },
        {
            dictrict: "Quận 2",
            phoe: "028.3535.2458",
            image: "xe-dap-tphcm.jpeg",
            address: "458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.",
            time: "Thứ 2 - Chủ Nhật: 9hAM - 9hPM",
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.928724927184!2d106.72051973974875!3d10.793521229698598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317526041809694b%3A0x4fd643faf3103039!2zQsOsbmggQW4sIFF14bqtbiAyLCBUaOG7pyDEkOG7qWMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1701775611711!5m2!1svi!2s'
        },
        {
            dictrict: "Quận 3",
            phoe: "028.3535.2458",
            image: "xe-dap-tphcm.jpeg",
            address: "458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.",
            time: "Thứ 2 - Chủ Nhật: 9hAM - 9hPM",
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.345605443108!2d106.66052442401127!3d10.77924731964197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed625169425%3A0x775d5068165e63b5!2zUXXhuq1uIDMsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1701775643442!5m2!1svi!2s'
        },
        {
            dictrict: "Quận 4",
            phoe: "028.3535.2458",
            image: "xe-dap-tphcm.jpeg",
            address: "458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.",
            time: "Thứ 2 - Chủ Nhật: 9hAM - 9hPM",
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.635619135497!2d106.704167!3d10.7607495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6c6e9b7e35%3A0xbe48f39ac0476895!2zUXXhuq1uIDQsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1701775738892!5m2!1svi!2s'
        },
        {
            dictrict: "Quận 5",
            phoe: "028.3535.2458",
            image: "xe-dap-tphcm.jpeg",
            address: "458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.",
            time: "Thứ 2 - Chủ Nhật: 9hAM - 9hPM",
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31357.781841570577!2d106.64819282398696!3d10.755839321049264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752efb7d184b87%3A0xab92c1d33fffeb7!2zUXXhuq1uIDUsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1701775768878!5m2!1svi!2s'
        },
        {
            dictrict: "Quận 6",
            phoe: "028.3535.2458",
            image: "xe-dap-tphcm.jpeg",
            address: "458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP. Hồ Chí Mình.",
            time: "Thứ 2 - Chủ Nhật: 9hAM - 9hPM",
            map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31358.859395960746!2d106.61747782397617!3d10.74546982167282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e7cff633fdd%3A0x85ee85db9cb263ba!2zUXXhuq1uIDYsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1701775797303!5m2!1svi!2s'
        },
    ];
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="store mt-8 md:mt-16">
            <div className="container mx-auto">
                <div className="title relative mb-4">
                    <span className="md:absolute block bg-[#333] text-[#a1e611] font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                        <Link href="/store" className="hover:text-white hover:duration-300">Hệ thống cửa hàng</Link>
                    </span>
                </div>
                <div className="grid gap-2 grid-cols-5 mx-4 md:mx-0 md:items-center md:border-t md:border-[#333] md:pt-12">
                    <div className="col-span-5 md:col-span-2 order-2 lg:order-1">
                        <div className="h-[230px] md:h-[500px] overflow-auto md:pr-4">
                            {storeList.map((e, i) => (
                                <div className="border rounded cursor-pointer mb-2 shadow-md shadow-[#ccc] hover:bg-[#f5f5f5]" onClick={() => setActiveTab(i)}>
                                    <div className="grid gap-4 grid-cols-2">
                                        <div className="col-span-1">
                                            <img src="/xe-dap-tphcm.jpeg" className="w-full rounded-tl rounded-bl" alt="" />
                                        </div>
                                        <div className="col-span-1">
                                            <h5 className="text-sm font-semibold py-2">{e.dictrict}</h5>
                                            <div className="contact">
                                                <ul className="text-[10px] md:text-xs md:leading-5">
                                                    <li><b>Tel: <span className="text-[#6fa400]">028.3535.2458</span></b></li>
                                                    <li>458 Nguyễn Thị Thập, Phường Tân Quy, Quận 7, TP.HCM</li>
                                                    <li>Thứ 2 - Chủ Nhật: 9hAM - 9hPM</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-3 order-1 lg:order-2">
                        <iframe src={storeList[activeTab].map} className="h-[230px] md:h-[500px] mb-2 md:mb-0 w-full shadow-md shadow-[#ccc] rounded" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}