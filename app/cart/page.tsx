"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { getLocalStorageItem, setLocalStorageItem } from '../feed/localStorage';
import FormattedNumber from "../feed/formattedNumber";
export default function Page() {
    const [cartItems, setCartItems] = useState(getLocalStorageItem('carts'));
    const router = useRouter();
    if(!cartItems || cartItems.length==0){ router.push('/'); return false }
    const removeProductFromCart = (productId: any) => {
        const updatedCart = cartItems.filter((item: any) => item.id !== productId);
        setCartItems(updatedCart);
        setLocalStorageItem('carts', updatedCart);
    };
    const updateQuantity = (event: any, productId: any) => {
        const newQuantity = event.target.value;
        if (parseInt(newQuantity) > 0 && parseInt(newQuantity) < 1000) {
            const updatedCart = cartItems.map((item: any) =>
                item.id === productId ? { ...item, qty: parseInt(newQuantity) } : item
            );
            setCartItems(updatedCart);
            setLocalStorageItem('carts', updatedCart);
        }
    };
    let total = 0;
    if (cartItems) {
        for (let index = 0; index < cartItems.length; index++) {
            const element = cartItems[index];
            if (element.price) total += element.price * element.qty;
        }
    }
    return (
        <main>
            <div className="breadcrumbs">
                <div className="container mx-auto">
                    <ul className="flex flex-wrap px-2 md:px-0 py-4 text-xs md:text-sm text-[#333] border-b border-r-slate-300">
                        <li><Link href="/"><i className="fa fa-home text-[#6fa400]"></i> Trang chủ</Link></li>
                        <li className="text-[#6fa400]">Giỏ hàng</li>
                    </ul>
                </div>
            </div>
            <div className="store md:mt-12">
                <div className="container mx-auto">
                    <h1 className="title relative mb-4">
                        <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                            Giỏ hàng
                        </span>
                    </h1>
                    <div className="grid gap-4 grid-cols-3 mx-4 md:mx-0 md:items-center md:border-t md:border-[#333] md:pt-12">
                        <div className="col-span-3 md:col-span-2 text-sm">
                            <div className="overflow-auto">
                                <table className="min-w-full bg-white border border-gray-300">
                                    <thead>
                                        <tr>
                                            <th className="py-2 px-4 border-b" colSpan={3}>SẢN PHẨM</th>
                                            <th className="py-2 px-4 border-b">GIÁ</th>
                                            <th className="py-2 px-4 border-b hidden md:table-cell">SỐ LƯỢNG</th>
                                            <th className="py-2 px-4 border-b hidden md:table-cell">TỔNG</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cartItems &&
                                            cartItems.map((e: any, i: any) =>
                                                <tr key={i}>
                                                    <td className="py-2 px-4 border-b">
                                                        <button type="button" className="text-[red]" onClick={() => removeProductFromCart(e.id)}>
                                                            <i className="fa fa-close"></i>
                                                        </button>
                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        <img src={e.avatar} alt="" width={200} />
                                                    </td>
                                                    <td className="py-2 px-4 border-b text-xs md:text-sm">
                                                        <Link href={'/' + e.slug + '.html'} className="hover:text-[#6fa400]">{e.title}</Link>
                                                        <div className="mt-2 text-xs">
                                                            <ul>
                                                                <li>Màu sắc: <span className="text-[#6fa400]">Sea Sparkle</span></li>
                                                                <li>Kích thước: <span className="text-[#6fa400]">S</span></li>
                                                                <li className="md:hidden">Giá: <span className="text-[#6fa400]">{FormattedNumber(e.price)}</span></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 px-4 border-b hidden md:table-cell"><span className="text-[#6fa400] text-base">
                                                        {FormattedNumber(e.price)}</span> <br /><span className="text-xs">(VNĐ)</span></td>
                                                    <td className="py-2 px-4 border-b">
                                                        <input type="number" defaultValue={e.qty} onChange={(event) => updateQuantity(event, e.id)} className="border w-full px-4 py-2 rounded-3xl focus:outline-none text-[#333]" />
                                                    </td>
                                                    <td className="py-2 px-4 border-b hidden md:table-cell"><span className="text-[#6fa400] text-base">
                                                        {FormattedNumber(e.price * e.qty)} </span> <br /><span className="text-xs">(VNĐ)</span></td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="md:grid gap-4 grid-cols-2">
                                <div className="mt-4">
                                    <Link href={'/san-pham'} className="text-center py-2 block px-8 border border-[#6fa400] hover:bg-[#6fa400] uppercase hover:text-white rounded-full">
                                        ← Tiếp tục xem sản phẩm
                                    </Link>
                                </div>
                                <div className="text-right mt-4">
                                    {/* <button type="button" className="py-2 px-8 border border-[orange] hover:bg-[orange] uppercase rounded-full">
                                                Cập nhật giỏ hàng
                                            </button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-3 md:col-span-1">
                            <ul className="text-sm">
                                <li className="grid gap-4 grid-cols-2 border-b pb-2 mb-4">
                                    <span>Số lượng:</span>
                                    <span className="text-right text-base"><b>{cartItems&&cartItems.length}</b></span>
                                </li>
                                <li className="grid gap-4 grid-cols-2 border-b pb-2">
                                    <span>Tổng thu (VNĐ):</span>
                                    <span className="text-right text-lg">
                                        <b>{FormattedNumber(total)}</b>
                                    </span>
                                </li>
                            </ul>
                            <Link href={'/payment'} className="text-white text-center uppercase p-4 block mt-8 bg-[#6fa400] hover:opacity-90 rounded">
                                Tiến Hành Thanh Toán
                            </Link>

                            <div className="mt-8 text-[#bdbdbd]">
                                <i className="fa fa-tag"></i> Phiếu ưu đãi
                            </div>

                            <div className="mt-2">
                                <input type="text" className="border form-control focus:outline-none bg-[#f8f8f8] text-[#333] rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}