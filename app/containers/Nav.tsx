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
    return (
        <nav className="p-2.5 bg-[#333] sticky top-0 z-10">
            <div className="container mx-auto">
                <div className="grid gap-2 md:grid-cols-12 items-center">
                    <div className="col-span-4 text-center md:text-left italic uppercase text-[#a1e611] text-2xl md:text-3xl logo">
                        <Link href="/">The world Ebike.com</Link>
                    </div>
                    <div className="col-span-4">
                        <div className="input-group flex bg-white">
                            <input type="text" className="form-control block focus:outline-none text-[#333]" placeholder="Tìm kiếm" />
                            <button className="btn px-4 py-2" type="submit">
                                <i className="fa-solid fa-magnifying-glass hover:text-[#6fa400]"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-span-3 menu">
                        <ul className="flex justify-evenly text-sm">
                            <li><Link className="text-white hover:text-[#a1e611] hover:duration-300 uppercase" href="/category">Sản phẩm</Link></li>
                            <li><Link className="text-white hover:text-[#a1e611] hover:duration-300 uppercase" href="/video/category">Dịch vụ</Link></li>
                            <li><Link className="text-white hover:text-[#a1e611] hover:duration-300 uppercase" href="/blog/category">Tin tức</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 cart">
                        <ul className="flex justify-evenly">
                            <li><a href="" className="text-[#a1e611] hover:text-white hover:duration-300 uppercase"><i className="fa-solid fa-user"></i></a></li>
                            <li><a href="" className="text-[#a1e611] hover:text-white hover:duration-300 uppercase"><i className="fa-solid fa-cart-shopping"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}