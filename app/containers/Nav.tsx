"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { menuCategory } from "../service/menuCategory";
import { libraryDetail } from "../service/libraryDetail";
export function Nav() {
    const [fix, setFix] = useState(false);
    const [menu, setMenu] = useState([]);
    const [logo, setLogo] = useState<any>();
    const setFixed = () => {
        if (window.scrollY > 150 && window.innerWidth < 1024) {
            setFix(true);
        } else {
            setFix(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", setFixed);
        menuCategory().then((items) => {
            setMenu(items.response);
        });
        libraryDetail('logoTop').then((items) => {
            setLogo(items.response.data[0]);
          });
    }, []);
    
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [bagach, setBagach] = useState(false);

    const handleHiddenMenu = () => { setShow(false), setBagach(false) }
    const handleShowMenu = () => setShow(true)
    const handleShowBagach = () => { setBagach(true), setShow(true) }
    const handleToggleMenu = () => { setToggle(!toggle), setShow(true) }

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
                                <img src={logo && logo.avatar} alt="" />
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
                                        menu &&
                                        menu.map((e: any, ie: any) => (
                                            <li key={ie} className="mb-4 md:mb-0 border-b md:border-none pb-4 md:pb-0">
                                                {
                                                    e.type == 'sanpham' && (
                                                        <>
                                                            <Link href={'/' + e.slug} className="text-black md:text-white hover:text-[#a1e611] hover:duration-300 uppercase cursor-pointer text-xs md:text-sm" onMouseOver={handleShowMenu}>{e.title}</Link>
                                                            <button type="button" className={"md:hidden fixed right-0 opacity-50 top-0 bg-[#fbfbfb] px-2 text-black" + (!show ? ' hidden' : '')} onClick={handleHiddenMenu}>
                                                                <i className="fa fa-close"></i>
                                                            </button>
                                                            <button className="toggle float-right md:hidden" onClick={handleToggleMenu}>
                                                                <i className={"fa fa-angle-" + (!toggle ? 'down' : 'up')}></i></button>
                                                            <ul className={((!toggle) ? 'hidden ' : '') + "sub-menu bg-[#fbfbfb] mt-2 md:mt-0 md:absolute w-full md:w-11/12 md:bg-white left-0 md:grid gap-2 grid-cols-2 md:grid-cols-7 p-4 md:p-6 border border-[#333] rounded top-full" + (!show ? ' md:hidden' : '')}>
                                                                {
                                                                    e.childs.map((j: any, ij: any) => (
                                                                        <li key={ij} className={e.childs.length - 1 != ij ? "md:pr-2" : ""}>
                                                                            <Link href={'/' + j.slug} className="font-bold uppercase hover:text-[#6fa400] text-xs md:text-sm" onClick={handleHiddenMenu}>
                                                                                {j.title}
                                                                            </Link>
                                                                            {
                                                                                j.childs.length != 0 && (
                                                                                    <ul className="mt-2 border-t pt-2">
                                                                                        {
                                                                                            j.childs.map((k: any, ik: any) => (
                                                                                                <li key={ik} className="border-b pb-2 mb-2">
                                                                                                    <Link href={'/' + k.slug} className="text-[#666] hover:text-[#6fa400] text-xs md:text-sm" onClick={handleHiddenMenu}>{k.title}</Link>
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
                                                    e.type != 'sanpham' && (
                                                        <Link className="text-black md:text-white hover:text-[#a1e611] hover:duration-300 uppercase py-6 text-xs md:text-sm" href={'/' + e.slug} onMouseOver={handleHiddenMenu}>{e.title}</Link>
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