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
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [bagach, setBagach] = useState(false);

    const handleHiddenMenu = () => {setShow(false), setBagach(false)}
    const handleShowMenu = () => setShow(true)
    const handleShowBagach = () => {setBagach(true), setShow(true)}
    const handleToggleMenu = () => {setToggle(!toggle), setShow(true)}

    return (
        <>
            <div className={"fixed hiddenMenu h-full bg-[#333333a8] w-full top-0 left-0 bottom-0 right-0" + (!show ? ' hidden' : '')} onMouseOver={handleHiddenMenu}></div>
            <nav className="p-2.5 bg-[#333] sticky top-0 z-10 relative border-b-[5px] border-[#a3e611]">
                <div className="container mx-auto">
                    <div className="grid gap-2 grid-cols-12 items-center">
                        <div className="col-span-2 md:hidden text-white text-center">
                            <button type="button" onClick={handleShowBagach}>
                                <i className="fa fa-bars text-lg"></i>
                            </button>
                        </div>
                        <div className="col-span-7 text-center text-xl md:col-span-2 text-center md:text-left uppercase text-[#a1e611] md:text-3xl logo">
                            <Link href="/">
                                <img src="/logo.png" alt="" />
                            </Link>
                        </div>
                        <div className="col-span-12 order-2 lg:order-1 md:col-span-5 align-center md:pl-8">
                            <div className="input-group flex bg-white">
                                <input type="text" className="form-control block focus:outline-none text-[#333] italic text-sm" placeholder="Bạn muốn tìm gì?" />
                                <button className="btn px-4 py-2" type="submit">
                                    <i className="fa-solid fa-magnifying-glass hover:text-[#6fa400]"></i>
                                </button>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-5 order-1 lg:order-2 grid gap-2 grid-cols-5">
                            <div className={"col-span-9 fixed top-0 left-0 md:static md:block md:col-span-4 menu" + (!bagach ? ' hidden' : ' show')}>
                                <ul className="p-4 md:p-0 block w-[200px] md:w-auto md:flex h-[100vh] md:h-auto bg-white md:bg-[#333] justify-evenly text-sm">
                                    {
                                        menu.map((e, eindex) => (
                                            <li key={eindex} className="mb-4 md:mb-0 border-b md:border-none pb-4 md:pb-0">
                                                {
                                                    e.childs.length != 0 && (
                                                        <>
                                                            <Link href={'/' + e.link} className="text-black md:text-white hover:text-[#a1e611] hover:duration-300 uppercase cursor-pointer text-xs md:text-sm" onMouseOver={handleShowMenu}>{e.title}</Link>
                                                            <button type="button" className={"md:hidden fixed right-0 opacity-50 top-0 bg-[#fbfbfb] px-2 text-black" + (!show ? ' hidden' : '')} onClick={handleHiddenMenu}>
                                                                <i className="fa fa-close"></i>
                                                            </button>
                                                            <button className="toggle float-right md:hidden" onClick={handleToggleMenu}>
                                                                <i className={"fa fa-angle-" + (!toggle?'down':'up')}></i></button>
                                                            <ul className={ ((!toggle) ? 'hidden ':'') + "sub-menu bg-[#fbfbfb] mt-2 md:mt-0 md:absolute w-full md:w-11/12 md:bg-white left-0 md:grid gap-2 grid-cols-2 md:grid-cols-7 p-4 md:p-6 border border-[#333] rounded top-full" + (!show ? ' md:hidden' : '')}>
                                                                {
                                                                    e.childs.map((j, jindex) => (
                                                                        <li key={jindex} className={e.childs.length - 1 != jindex ? "md:pr-2" : ""}>
                                                                            <Link href={'/' + j.link} className="font-bold uppercase hover:text-[#6fa400] text-xs md:text-sm" onClick={handleHiddenMenu}>
                                                                                {j.title}
                                                                            </Link>
                                                                            {
                                                                                j.childs.length != 0 && (
                                                                                    <ul className="mt-2 border-t pt-2">
                                                                                        {
                                                                                            j.childs.map((k, kindex) => (
                                                                                                <li key={kindex} className="border-b pb-2 mb-2"> {/**{j.childs.length - 1 != kindex ? "border-b pb-2 mb-2" : ""} */}
                                                                                                    <Link href={'/' + k.link} className="text-[#666] hover:text-[#6fa400] text-xs md:text-sm" onClick={handleHiddenMenu}>{k.title}</Link>
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
                                                        </>
                                                    )
                                                }
                                                {
                                                    e.childs.length == 0 && (
                                                        <Link className="text-black md:text-white hover:text-[#a1e611] hover:duration-300 uppercase py-6 text-xs md:text-sm" href={'/' + e.link} onMouseOver={handleHiddenMenu}>{e.title}</Link>
                                                    )
                                                }
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="col-span-5 md:col-span-1 cart text-center md:text-left">
                                <ul className="flex justify-evenly text-sm">
                                    <li><Link href="/login" className="text-[#a1e611] hover:text-white hover:duration-300 uppercase"><i className="fa-solid fa-user"></i></Link></li>
                                    <li><Link href="/cart" className="text-[#a1e611] hover:text-white hover:duration-300 uppercase"><i className="fa-solid fa-cart-shopping"></i> <sup>(2)</sup></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    );
}