"use client";
import { useParams } from "next/navigation";
import React, { useState } from 'react';
import { Category } from "./category";
function Page() {
    const params = useParams();
    let isPage = 'category';
    if (params.slug.includes('.html')) {
        isPage = 'product';
    }
    return (
        <main>
            <div className="breadcrumbs">
                <div className="container mx-auto">
                    <ul className="flex flex-wrap px-2 md:px-0 py-4 text-xs md:text-sm text-[#333] border-b border-r-slate-300">
                        <li><a href=""><i className="fa fa-home text-[#6fa400]"></i> Trang chủ</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="" >Xe đạp</a></li>
                        <li className="text-[#6fa400]">Xe thể thao đường phố</li>
                    </ul>
                </div>
            </div>
            {
                isPage == 'category' ?
                    <Category />
                    :
                    <div className="product">
                        <div className="container mx-auto">
                            product
                        </div>
                    </div>
            }
        </main>
    );
}

Page.getInitialProps = async (ctx: any) => {
    return {};
};

export default Page;