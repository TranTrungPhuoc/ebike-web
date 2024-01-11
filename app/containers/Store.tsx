"use client"
import { useState, useEffect } from 'react';
import Link from "next/link";
import { StoreList } from '../service/storeList';
export function Store() {
    const [data, setData] = useState<any>([])
    useEffect(() => {
        StoreList().then((data: any) => { setData(data.response) })
    }, [])
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="store mt-8 md:mt-16">
            <div className="container mx-auto">
                <div className="title relative mb-4">
                    <span className="md:absolute block bg-[#333] text-[#a1e611] font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                        <Link href="/store" className="hover:text-white hover:duration-300">Hệ thống cửa hàng</Link>
                    </span>
                </div>
                <div className="grid gap-4 grid-cols-5 mx-4 md:mx-0 md:items-center md:border-t md:border-[#333] md:pt-12">
                    <div className="col-span-5 md:col-span-2 order-2 lg:order-1">
                        <div className="h-[230px] md:h-[500px] overflow-auto bg-[#e0e0e0] rounded-lg">
                            {data&&data.map((e:any, i:any) => (
                                <div key={i} className={"p-2 bg-[#333] cursor-pointer hover:bg-[#232323]" + (data[activeTab]._id==e._id?' active':'')} onClick={() => setActiveTab(i)}>
                                    <div className="grid gap-2 grid-cols-2">
                                        <div className="col-span-1">
                                            <img src={e.avatar} className="w-full rounded-tl rounded-bl" alt={e.title} />
                                        </div>
                                        <div className="col-span-1 text-[#ccc]">
                                            <h5 className="font-semibold py-2 text-[#a3e611] uppercase"><i className='fa fa-location'></i> {e.title}</h5>
                                            <hr className='mb-2 border-[#555]'/>
                                            <div className="contact">
                                                <ul className="text-[10px] md:text-xs md:leading-5">
                                                    <li><b><span className="text-[#a3e611]"> <i className='fa fa-phone'></i> {e.phone}</span></b></li>
                                                    <li><i className='fa fa-location-dot'></i> {e.address}</li>
                                                    <li><i className='fa fa-clock'></i> {e.time}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-3 order-1 lg:order-2">
                        <iframe src={data&&data[activeTab]&&data[activeTab].map} className="h-[230px] md:h-[500px] mb-2 md:mb-0 w-full shadow-md shadow-[#ccc] rounded-lg" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}