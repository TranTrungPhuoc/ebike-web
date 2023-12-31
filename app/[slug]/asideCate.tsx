"use client";
import React, { useEffect, useState } from 'react';

export function AsideCate(props: any) {
    const [status, setStatus] = useState(false);

    const asideCate = props.asideCate
    const asideColor = props.asideColor
    const asidePin = props.asidePin

    return (
        <div className={(!status ? "hidden" : "mobile") + " md:block md:col-span-3"}>
            <div className="border border-r-slate-300 rounded-md p-4 mb-4">
                <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
                    Danh Mục Sản Phẩm
                </h3>
                <div className="mt-4 bg-[#f6f6f6] rounded p-2 h-[300px] overflow-auto">
                    <ul className="text-[#333] text-xs leading-8">
                        {
                            asideCate&&asideCate.map((a: any, ai: any) =>
                                <li key={ai} className={(asideCate.length != (ai + 1) ? 'mb-2' : '')}>
                                    <span className='flex'>
                                        <input type="checkbox" name="input_category" id={"input_category_" + ai} />
                                        <label htmlFor={"input_category_" + ai} className="uppercase cursor-pointer ml-1 hover:text-[#6fa400]">
                                            {a.title}
                                            {/* <sup>(7)</sup> */}
                                        </label>
                                    </span>
                                    {
                                        a.childs.length > 0 &&
                                        <ul className='ml-4 mt-2 text-xs'>
                                            {
                                                a.childs.map((c: any, ci: any) =>
                                                    <li key={ci} className={"flex mb-2" + (a.childs.length != (ci + 1) ? ' pb-2' : '')}>
                                                        <input type="checkbox" name="input_category" id={"input_category_" + ci + ai} />
                                                        <label htmlFor={"input_category_" + ci + ai} className="uppercase cursor-pointer ml-1 hover:text-[#6fa400]">
                                                            {c.title}
                                                            {/* <sup>(7)</sup> */}
                                                        </label>
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    }
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="border border-r-slate-300 rounded-md p-4 mb-4">
                <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
                    Màu sắc
                </h3>
                <div className="mt-4">
                    <ul className="text-[#333] grid gap-1 grid-cols-2 text-[10px] leading-8">
                        {
                            asideColor && asideColor.map((a: any, ai: any) =>
                                <li key={ai} className='bg-[#f6f6f6] rounded py-1 px-2 hover:bg-[#DFDFDF]'>
                                    <span className='flex'>
                                        <input type="checkbox" name="color" id={"color" + ai} />
                                        <label htmlFor={"color" + ai} className="uppercase cursor-pointer ml-1 hover:text-[#6fa400]">
                                            {a.title}
                                            {/* <sup>(7)</sup> */}
                                        </label>
                                    </span>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="border border-r-slate-300 rounded-md p-4">
                <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
                    Pin
                </h3>
                <div className="mt-4">
                    <ul className="text-[#333] grid gap-1 grid-cols-2 text-[10px] leading-8">
                        {
                            asidePin && asidePin.map((a: any, ai: any) =>
                                <li key={ai} className='bg-[#f6f6f6] rounded py-1 px-2 hover:bg-[#DFDFDF]'>
                                    <span className='flex'>
                                        <input type="checkbox" name="color" id={"color" + ai} />
                                        <label htmlFor={"color" + ai} className="uppercase cursor-pointer ml-1 hover:text-[#6fa400]">
                                            {a.title}
                                            {/* <sup>(7)</sup> */}
                                        </label>
                                    </span>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            {/* <div className="border border-r-slate-300 rounded-md p-4 mt-4">
    <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
        Thương Hiệu
    </h3>
    <div className="mt-6">
        <ul>
            {
                brands.map((e, i) => (
                    <li key={i} className="flex border-b border-b-slate-300 pb-4 mb-4">
                        <input type="checkbox" id="th1" />
                        <label htmlFor="th1" className="uppercase cursor-pointer ml-4 hover:text-[#6fa400]">
                            <img src={'/' + e} alt="" width={100} />
                        </label>
                    </li>
                ))
            }
        </ul>
    </div>
</div>
<div className="border border-r-slate-300 rounded-md p-4 mt-4">
    <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
        Màu Sắc
    </h3>
    <div className="mt-4">
        <div className="grid gap-4 grid-cols-4">
            <div className="col-span-1">
                <input type="hidden" id="black" />
                <label htmlFor="black" className="w-9 h-9 block bg-black rounded-[50%] border border-black cursor-pointer hover:opacity-70"></label>
            </div>
            <div className="col-span-1">
                <input type="hidden" id="red" />
                <label htmlFor="red" className="w-9 h-9 block bg-[red] rounded-[50%] border border-[red] cursor-pointer hover:opacity-70"></label>
            </div>
            <div className="col-span-1">
                <input type="hidden" id="blue" />
                <label htmlFor="blue" className="w-9 h-9 block bg-[blue] rounded-[50%] border border-[blue] cursor-pointer hover:opacity-70"></label>
            </div>
            <div className="col-span-1">
                <input type="hidden" id="orange" />
                <label htmlFor="orange" className="w-9 h-9 block bg-[orange] rounded-[50%] border border-[orange] cursor-pointer hover:opacity-70"></label>
            </div>
            <div className="col-span-1">
                <input type="hidden" id="green" />
                <label htmlFor="green" className="w-9 h-9 block bg-[green] rounded-[50%] border border-[green] cursor-pointer hover:opacity-70"></label>
            </div>
            <div className="col-span-1">
                <input type="hidden" id="peru" />
                <label htmlFor="peru" className="w-9 h-9 block bg-[peru] rounded-[50%] border border-[peru] cursor-pointer hover:opacity-70"></label>
            </div>
            <div className="col-span-1">
                <input type="hidden" id="white" />
                <label htmlFor="white" className="w-9 h-9 block bg-white rounded-[50%] border border-slate-300 cursor-pointer hover:opacity-70"></label>
            </div>
            <div className="col-span-1">
                <input type="hidden" id="yellow" />
                <label htmlFor="yellow" className="w-9 h-9 block bg-[yellow] rounded-[50%] border border-[yellow] cursor-pointer hover:opacity-70"></label>
            </div>
            <div className="col-span-1">
                <input type="hidden" id="purple" />
                <label htmlFor="purple" className="w-9 h-9 block bg-[purple] rounded-[50%] border border-[purple] cursor-pointer hover:opacity-70"></label>
            </div>
        </div>
    </div>
</div>
<div className="border border-r-slate-300 rounded-md p-4 mt-4">
    <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
        Giá
    </h3>
    <div className="mt-4">
        <div>
            <input
                type="range"
                id="rangeInput"
                min="0"
                max="10000000"
                value={value}
                onChange={handleChange}
                className="w-full"
            />
            <div className="text-sm text-[#333]">Price: <span className="font-bold text-[#bdbdbd]">{formattedNumber(value)} <u>đ</u></span></div>
        </div>
    </div>
</div> */}
            {/* <div className="border border-r-slate-300 rounded-md p-2 mt-4 sticky top-16">
                <div className="bg-[#333] rounded-lg text-lg text-center p-2">
        <img src="/logo.png" style={{width: '70%', margin: 'auto'}} alt="" />
    </div>
                <div className="border py-2 border-r-slate-300 bg-[#e0e0e0] rounded-lg text-lg text-center font-bold uppercase mt-2">
                    <a href="tel:0946721565">
                        <div className="text-xl text-[red] rounded-lg">0946721565</div>
                        <div className="">Hotline mua hàng</div>
                    </a>
                </div>
                <div className="bg-[#333] rounded-lg text-center p-2 font-bold uppercase mt-2">
                    <a href="">
                        <span className="text-white text-sm">
                            Chat trực tiếp <span className="text-xl text-[#a1e611]">Zalo</span>
                        </span>
                    </a>
                </div>
            </div> */}
        </div>
    )
}