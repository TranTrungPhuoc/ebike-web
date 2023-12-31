"use client";
import React, { useState } from 'react';
import { categoryDetail } from '../service/categoryDetail';
import Link from 'next/link';
import FormattedNumber from '../feed/formattedNumber';
export function MoreProductCate(props: any) {
    const slug = props.slug;
    const [data, setData] = useState<any>([]);
    const [check, setCheck] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    let [number, setNumber] = useState(2);
    const handleClick = async () => {
        setIsLoading(false);
        const _categoryDetail = await categoryDetail(slug, number);
        const products = _categoryDetail.response.listData.Products;
        setData((e: any) => [...e, ...products]);
        setNumber(number + 1);
        setIsLoading(true); 
        if (products.length > 0 && products.length < props.limit){ setCheck(false); }
    }
    return (
        <>
            {
                data && data.length > 0 && data.map((e: any, i: any) => (
                    <div key={i} className={i == 2 || i == 5 || i == 8 || i == 11 ? "col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-white" : "col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-slate-300"}>
                        <div className="products p-4">
                            <Link href={"/" + e.slug + ".html"} className="text-[#333]">
                                <div className="image">
                                    <img src={e.avatar} alt="" width={500} />
                                </div>
                                <h3 className="text-sm mb-2 font-semibold text-[#626262]">{e.title}</h3>
                                <p className="text-xs mb-4">{e.description}</p>
                                <div className="price font-bold mb-7 text-xl">{FormattedNumber(e.price)}</div>
                                <div className="mt-2 grid gap-2 grid-cols-2 text-[10px] md:text-xs">
                                    <div className="col-span-1 text-[#6fa400] text-left">
                                        <span>4.3</span>
                                        <span className="ml-[5px]"><i className='fa fa-star'></i></span>
                                        <span className="ml-[5px] text-[#999]">(316)</span>
                                    </div>
                                    <div className="col-span-1 text-[#999] text-right">
                                        21 đã bán
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))
            }
            {
                check &&
                <div className="text-center mt-4 col-span-3">
                    <button type="button" onClick={handleClick} className="border py-2 px-8 rounded hover:bg-[#6fa400] hover:border-[#6fa400] hover:text-white">
                        { isLoading ? 'Xem Thêm': 'Đang Tải...' } 
                    </button>
                </div>
            }
        </>
    )
}