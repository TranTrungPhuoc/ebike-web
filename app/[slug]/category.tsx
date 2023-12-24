"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { categoryDetail } from '../service/categoryDetail';
import { useParams } from 'next/navigation';
import { menuCategory } from '../service/menuCategory';
import { colorGetList } from '../service/colorGetList';
import { pinGetList } from '../service/pinGetList';
import Breadcrumbs from '../components/Bredcrumb';
import { Pending } from '../components/Pending';
export function Category() {
    const [isloading, setLoading] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [status, setStatus] = useState(false);
    const handleTabClick = () => { setStatus(!status); };
    const formattedNumber = (numberToFormat: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
        }).format(numberToFormat);
    }
    const params = useParams();
    const slug = params.slug;
    const limit = 12;
    const [data, setData] = useState<any>();
    const [asideCate, setAsideCate] = useState<any>();
    const [asideColor, setAsideColor] = useState<any>();
    const [asidePin, setAsidePin] = useState<any>();
    useEffect(() => {
        categoryDetail(slug).then((items) => {
            setData(items.response.listData);
        });
        menuCategory().then((items) => {
            setAsideCate(items.response[0].childs);
        });
        colorGetList().then((items) => {
            setAsideColor(items.response);
        });
        pinGetList().then((items) => {
            setAsidePin(items.response);
        });
        setLoading(true);
    }, [slug]);
    const handeShowClick = () => {
        setShowContent(!showContent)
    }
    return (
        <>
            {isloading === false ? (
                <Pending />
            ) : (
                <>
                    <Breadcrumbs bredcrumbs={data && data.bredcrumbs} />
                    <div className="category mt-4">
                        <div className="container mx-auto">
                            <div className="grid gap-2 md:grid-cols-12">
                                <div className={(!status ? "hidden" : "mobile") + " md:block md:col-span-3"}>
                                    <div className="border border-r-slate-300 rounded-md p-4 mb-4">
                                        <h3 className="uppercase text-[#333] font-semibold border-b border-r-slate-300 pb-2">
                                            Danh Mục Sản Phẩm
                                        </h3>
                                        <div className="mt-4 bg-[#f6f6f6] rounded p-2 h-[300px] overflow-auto">
                                            <ul className="text-[#333] text-xs leading-8">
                                                {
                                                    asideCate &&
                                                    asideCate.map((a: any, ai: any) =>
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
                                                    asideColor &&
                                                    asideColor.map((a: any, ai: any) =>
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
                                                    asidePin &&
                                                    asidePin.map((a: any, ai: any) =>
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
                                <div className="md:col-span-9">
                                    <div className="md:flex flex-row">
                                        <h1 className="basis-3/4 text-2xl pl-4 pt-0 pb-4 font-semibold text-[#333]">
                                            {data && data.title}
                                        </h1>
                                        <div className="basis-1/4 mx-4 md:mx-0 flex flex-row">
                                            <form action="" className="basis-4/5 text-sm">
                                                <select name="sort" id="sort" className="bg-[#e0e0e0] p-2 rounded">
                                                    <option value="0">Theo thứ tự phổ biến</option>
                                                    <option value="1">Giá: Từ A - Z</option>
                                                </select>
                                            </form>
                                            <div className={(!status ? "bg-[#a1e611] text-[#333]" : "bg-[#333] text-[#fff]") + " md:hidden p-2 basis-1/5 text-center rounded"} onClick={() => handleTabClick()}>
                                                <i className={!status ? "fa-solid fa-bars" : "fa fa-close"}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-4 md:mt-0" />
                                    <div className="grid gap-0 grid-cols-4 md:grid-cols-3 md:items-center">
                                        {
                                            data &&
                                            data.Products.map((e: any, i: any) => (
                                                <div key={i} className={i == 2 || i == 5 || i == 8 || i == 11 ? "col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-white" : "col-span-2 md:col-span-1 text-center border-b border-b-slate-300 border-r border-r-slate-300"}>
                                                    <div className="products p-4">
                                                        <Link href={"/" + e.slug + ".html"} className="text-[#333]">
                                                            <div className="image">
                                                                <img src={e.avatar} alt="" width={500} />
                                                            </div>
                                                            <h3 className="text-sm mb-2 font-semibold text-[#626262]">{e.title}</h3>
                                                            <p className="text-xs mb-4">{e.description}</p>
                                                            <div className="price font-bold mb-7 text-xl">{formattedNumber(e.price)}</div>
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
                                    </div>
                                    {/* <div className="mt-4">
                            <ul className="flex flex-row space-x-1 justify-center">
                                <li>
                                    <a className="w-9 h-9 p-2 block bg-[#333] rounded-[50%] flex items-center justify-center border border-black cursor-pointer hover:bg-[#a1e611] hover:text-[#333] text-center text-white" href="#">
                                        <i className="fa fa-light fa-angle-left"></i>
                                    </a>
                                </li>
                                <li className='active'>
                                    <a className="w-9 h-9 p-2 block bg-[#333] rounded-[50%] flex items-center justify-center border border-black cursor-pointer hover:bg-[#a1e611] hover:text-[#333] text-center text-white" href="#">
                                        1
                                    </a>
                                </li>
                                <li>
                                    <a className="w-9 h-9 p-2 block bg-[#333] rounded-[50%] flex items-center justify-center border border-black cursor-pointer hover:bg-[#a1e611] hover:text-[#333] text-center text-white" href="#">
                                        2
                                    </a>
                                </li>
                                <li>
                                    <a className="w-9 h-9 p-2 block bg-[#333] rounded-[50%] flex items-center justify-center border border-black cursor-pointer hover:bg-[#a1e611] hover:text-[#333] text-center text-white" href="#">
                                        3
                                    </a>
                                </li>
                                <li>
                                    <a className="w-9 h-9 p-2 block bg-[#333] rounded-[50%] flex items-center justify-center border border-black cursor-pointer hover:bg-[#a1e611] hover:text-[#333] text-center text-white" href="#">
                                        <i className="fa fa-light fa-angle-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                                    {
                                        data &&
                                        data.Products.length > limit &&
                                        <div className="text-center mt-4">
                                            <button type="button" className="border py-2 px-8 rounded hover:bg-[#6fa400] hover:text-white">Xem Thêm</button>
                                        </div>
                                    }
                                    {
                                        data &&
                                        data.content != '' &&
                                        <>
                                            <div className="mt-12 md:relative text-center md:text-left">
                                                <h2 className="mb-6 border-b border-[#333]">
                                                    <span className="bg-[#333] text-[#a1e611] italic font-semibold text-xl uppercase p-4 rounded font-semibold">
                                                        Mua xe là phải vui
                                                    </span>
                                                </h2>
                                                <span className="md:absolute right-0 top-0 font-semibold italic">
                                                    Luôn làm hài lòng khách hàng
                                                </span>
                                            </div>
                                            <div className={"content mt-10 text-[#666] px-4 leading-6 text-justify" + (!showContent ? ' h-[500px] overflow-hidden' : '')} dangerouslySetInnerHTML={{ __html: data.content }}></div>
                                            <div className={"text-center relative" + (!showContent ? ' readmore' : '')}>
                                                <button type='button' className='border py-2 px-8 rounded hover:bg-[#6fa400] hover:text-white' onClick={() => handeShowClick()}>
                                                    {(!showContent ? 'Xem Thêm' : 'Rút Gọn')}
                                                </button>
                                            </div>
                                            {/* <div className="border-y py-4 my-5 flex gap-2">
                                    <div className="basis-2/12 md:basis-1/12">
                                        <img src="/user.webp" alt="" width={100} className="rounded-full" />
                                    </div>
                                    <div className="basis-10/12 md:basis-11/12 text-[#666]">
                                        <div className="font-semibold">admin@gmail.com</div>
                                        <p className="text-xs italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    </div>
                                </div> */}
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }
        </>
    )
}