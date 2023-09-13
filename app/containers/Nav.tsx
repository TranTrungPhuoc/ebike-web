"use client";
import React, { useEffect, useState } from "react";
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
                        <a href="">The world Ebike.com</a>
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
                        <ul className="flex justify-evenly">
                            <li><a href="" className="text-white hover:text-[#a1e611] uppercase">Sản phẩm</a></li>
                            <li><a href="" className="text-white hover:text-[#a1e611] uppercase">Dịch vụ</a></li>
                            <li><a href="" className="text-white hover:text-[#a1e611] uppercase">Tin tức</a></li>
                        </ul>
                    </div>
                    <div className="col-span-1 cart">
                        <ul className="flex justify-evenly">
                            <li><a href="" className="text-[#a1e611] hover:text-white uppercase"><i className="fa-solid fa-user"></i></a></li>
                            <li><a href="" className="text-[#a1e611] hover:text-white uppercase"><i className="fa-solid fa-cart-shopping"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}