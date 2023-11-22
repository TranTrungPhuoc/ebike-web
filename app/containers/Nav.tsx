"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
export function Nav() {
    const [fix, setFix] = useState(false);
    const setFixed = () => {
        if (window.scrollY > 150 && window.innerWidth < 1024) {
            setFix(true);
        } else {
            setFix(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", setFixed);
    }, []);
    const menu = [
        {
            title: 'Sản phẩm',
            link: 'category',
            childs: [
                {
                    title: 'Xe đạp điện',
                    link: 'category',
                    childs: [
                        {
                            title: 'Xe đạp điện trợ lực',
                            link: 'category',
                        },
                        {
                            title: 'Xe đạp điện thể thao',
                            link: 'category',
                        }
                    ]
                },
                {
                    title: 'Xe cân bằng',
                    link: 'category',
                    childs: [
                        {
                            title: 'Xe cân bằng 6.5 inch',
                            link: 'category',
                        },
                        {
                            title: 'Xe cân bằng 8 inch',
                            link: 'category',
                        },
                        {
                            title: 'Xe cân bằng 10 inch',
                            link: 'category',
                        }
                    ]
                },
                {
                    title: 'Vali điện',
                    link: 'category',
                    childs: []
                },
                {
                    title: 'Scooter điện',
                    link: 'category',
                    childs: [
                        {
                            title: 'Scooter điện 6.5 inch',
                            link: 'category',
                        },
                        {
                            title: 'Scooter điện 8 inch',
                            link: 'category',
                        },
                        {
                            title: 'Scooter điện 10 inch',
                            link: 'category',
                        }
                    ]
                },
                {
                    title: 'Ván điện',
                    link: 'category',
                    childs: []
                },
                {
                    title: 'Phụ kiện xe đạp',
                    link: 'category',
                    childs: [
                        {
                            title: 'Baga – chắn bùn',
                            link: 'category',
                        },
                        {
                            title: 'Chân chống',
                            link: 'category',
                        },
                        {
                            title: 'Chuông – Còi',
                            link: 'category',
                        },
                        {
                            title: 'Dây quấn – tay nắm',
                            link: 'category',
                        },
                        {
                            title: 'Đèn',
                            link: 'category',
                        },
                        {
                            title: 'Giá đỡ phụ kiện',
                            link: 'category',
                        },
                        {
                            title: 'Gọng nước – Bình nước',
                            link: 'category',
                        },
                        {
                            title: 'Ghế trẻ em',
                            link: 'category',
                        },
                        {
                            title: 'Khóa',
                            link: 'category',
                        },
                        {
                            title: 'Ống bơm – Phụ kiện bơm',
                            link: 'category',
                        }
                    ]
                },
                {
                    title: 'Phụ tùng xe đạp',
                    link: 'category',
                    childs: [
                        {
                            title: 'Bàn đạp',
                            link: 'category',
                        },
                        {
                            title: 'Bánh – Niềng xe',
                            link: 'category',
                        },
                        {
                            title: 'Chén cổ',
                            link: 'category',
                        },
                        {
                            title: 'Cùi đề',
                            link: 'category',
                        },
                        {
                            title: 'Sản phẩm bảo dưỡng',
                            link: 'category',
                        },
                        {
                            title: 'Gôm thắng',
                            link: 'category',
                        },
                        {
                            title: 'Ghi đông – Pô tăng',
                            link: 'category',
                        },
                        {
                            title: 'Sên',
                            link: 'category',
                        },
                        {
                            title: 'Vỏ – Ruột xe',
                            link: 'category',
                        },
                    ]
                }
            ]
        },
        {
            title: 'Dịch vụ',
            link: 'video/category',
            childs: []
        },
        {
            title: 'Tin tức',
            link: 'blog/category',
            childs: []
        },
        {
            title: 'Liên hệ',
            link: 'contact',
            childs: []
        }
    ]
    return (
        <nav className="p-2.5 bg-[#333] sticky top-0 z-10 relative">
            <div className="container mx-auto">
                <div className="grid gap-2 grid-cols-12 items-center">
                    <div className="col-span-4 md:col-span-4 text-center md:text-left md:italic uppercase text-[#a1e611] md:text-3xl logo">
                        <Link href="/">The world Ebike.com</Link>
                    </div>
                    <div className="col-span-8 md:col-span-3 align-center">
                        <div className="input-group flex bg-white">
                            <input type="text" className="form-control block focus:outline-none text-[#333]" placeholder="Tìm kiếm" />
                            <button className="btn px-4 py-2" type="submit">
                                <i className="fa-solid fa-magnifying-glass hover:text-[#6fa400]"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-9 md:col-span-4 menu">
                        <ul className="flex justify-evenly text-sm">
                            {
                                menu.map((e, eindex) => (
                                    <li key={eindex}>
                                        <Link className="text-white hover:text-[#a1e611] hover:duration-300 uppercase py-6" href={'/' + e.link}>{e.title}</Link>
                                        {
                                            e.childs.length != 0 && (
                                                <ul className={"sub-menu absolute w-11/12 bg-white left-0 grid gap-2 grid-cols-7 p-6 border border-[#333] rounded top-full hidden"}>
                                                    {
                                                        e.childs.map((j, jindex)=>(
                                                            <li key={jindex} className={e.childs.length-1 != jindex?"pr-2": ""}>
                                                                <Link href={'/' + j.link} className="font-bold uppercase hover:text-[#6fa400]">
                                                                    {j.title}
                                                                </Link>
                                                                {
                                                                    j.childs.length != 0 && (
                                                                        <ul className="mt-2 border-t pt-2">
                                                                            {
                                                                                j.childs.map((k, kindex)=>(
                                                                                    <li key={kindex} className={j.childs.length-1 != kindex ? "border-b pb-2 mb-2": ""}>
                                                                                        <Link href={'/'+k.link} className="text-[#666] hover:text-[#6fa400]">{k.title}</Link>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    )
                                                                }
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-span-3 md:col-span-1 cart">
                        <ul className="flex justify-evenly">
                            <li><Link href="/user" className="text-[#a1e611] hover:text-white hover:duration-300 uppercase"><i className="fa-solid fa-user"></i></Link></li>
                            <li><Link href="/cart" className="text-[#a1e611] hover:text-white hover:duration-300 uppercase"><i className="fa-solid fa-cart-shopping"></i> <sup>(0)</sup></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}