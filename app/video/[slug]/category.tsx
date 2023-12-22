"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link'
import { categoryDetailPost } from '../../service/categoryDetailPost';
import { Pending } from '../../components/Pending';
import Breadcrumbs from '../../components/Bredcrumb';
import { menuCategory } from '../../service/menuCategory';
export function Category() {
    const [isloading, setLoading] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const handeShowClick = () => {
        setShowContent(!showContent)
    }
    const formattedNumber = (numberToFormat: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
        }).format(numberToFormat);
    }

    const postSeeMore = [
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
        { title: 'Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt', link: '', image: 'blog.jpeg' },
    ]
    const params = useParams();
    const slug = params.slug;
    const limit = 12;
    const [data, setData] = useState<any>();
    const [asideCate, setAsideCate] = useState<any>();
    useEffect(() => {
        categoryDetailPost(slug).then((items) => {
            setData(items.response.listData);
        });
        menuCategory().then((items) => {
            setAsideCate(items.response[2]);
        });
        setLoading(true);
    }, [slug]);

    return (
        <>
            {isloading === false ? (
                <Pending />
            ) : (
                <>
                    <Breadcrumbs bredcrumbs={data && data.bredcrumbs} />
                    <div className="video store mt-4">
                        <div className="container mx-auto">
                            <h1 className="title md:mt-12 relative">
                                <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                                    {data && data.title}
                                </span>
                            </h1>
                            <div className="p-2 md:p-0 grid gap-4 md:grid-cols-4 md:border-t md:border-[#333] md:pt-12">
                                <div className="md:col-span-3">
                                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                                        {
                                            data &&
                                            data.Posts.map((e: any, i: any) => (
                                                <div key={i} className="col-span-1">
                                                    <div className="post rounded border border-[#333] bg-[#f5f5f5] hover:duration-300">
                                                        <Link href={"/video/" + e.slug + ".html"}>
                                                            <div className="image relative">
                                                                <img src={e.avatar} alt="" width={700} className="rounded-t" />
                                                                <span className="bg-white border border-[#333] px-2.5 py-1 rounded-lg absolute text-[#c50000] text-center opacity-90 top-1/2 left-1/2">
                                                                    <i className="fa-brands fa-youtube fa-2x"></i>
                                                                </span>
                                                            </div>
                                                            <div className="text-[#333] p-4 rounded-b">
                                                                <h3 className="mb-2 font-semibold">{e.title}</h3>
                                                                <div className="mb-2 text-xs text-[#919191]"><i className="fa fa-calendar"></i> 26/09/2023 09:53</div>
                                                                <p className="text-xs text-[#333] text-justify">{e.description}</p>
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
                                        data.Posts.length > limit &&
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
                                                    <span className="bg-[#333] text-[#a1e611] font-semibold text-xl uppercase p-4 rounded font-semibold">
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
                                <div className="md:col-span-1 postSidebar">
                                    {
                                        asideCate &&
                                        <div className="mb-4 sticky top-16 bg-white">
                                            <h2 className="font-semibold text-xl text-[#333]">Danh mục</h2>
                                            <ul className="border p-4 rounded text-sm leading-7 bg-[#f6f6f6]">
                                                <li>
                                                    <Link className="hover:text-[#6fa400]" href={"/" + asideCate.slug}>- {asideCate.title}</Link>
                                                    <ul className="ml-4">
                                                        {
                                                            asideCate.childs.map((a: any, ai: any) =>
                                                                <li key={ai}><Link className="hover:text-[#6fa400]" href={"/" + a.slug}>+ {a.title}</Link></li>
                                                            )
                                                        }
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                    {
                                        postSeeMore &&
                                        <div className="">
                                            <h2 className="font-semibold text-xl text-[#333]">Bài viết xem nhiều</h2>
                                            {
                                                postSeeMore.map((e, i) => (
                                                    <div key={i} className="mb-2">
                                                        <Link href='/'>
                                                            <div className="flex flex-row">
                                                                <div className="basis-1/3">
                                                                    <img src="/blog.jpeg" alt="" width={200} className="rounded" />
                                                                </div>
                                                                <div className="basis-2/3 ml-2">
                                                                    <h3 className="text-[12.5px] font-semibold hover:text-[#6fa400]">
                                                                        Cửa hàng xe đạp thể thao tại Hội An uy tín, giá tốt
                                                                    </h3>
                                                                    <div className="text-[10px] text-[#919191]">
                                                                        <i className="fa fa-eye text-[#6fa400]"></i>{" "}
                                                                        {formattedNumber(439)} lượt xem
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
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