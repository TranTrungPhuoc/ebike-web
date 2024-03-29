"use client";
import React from 'react';
import Link from "next/link";
import FormattedNumber from "../feed/formattedNumber";
import { useCart } from '../components/CartContext';
import { ORIGINAL_URL } from '../config';
import { useRouter } from 'next/navigation';
export default function Page() {
    const { cart, dispatch } = useCart();
    const updateToCart = (event: any, id: any) => { dispatch({ type: 'UPDATE_CART_ITEM', payload: { id, quantity: (event.target.value>0)?parseInt(event.target.value):1 } }); }
    const deleteToCart = (id: any) => { dispatch({ type: 'REMOVE_FROM_CART', payload: { id } }); }
    const calculateTotal = () => { return cart.reduce((total: any, item: any) => total + item.price * item.quantity, 0); };
    const calculateItemCount = () => { return cart.length; };
    const router = useRouter()
    if (calculateItemCount() == 0) { router.push('/'); return false; }
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
                                            cart &&
                                            cart.map((e: any, i: any) =>
                                                <tr key={i}>
                                                    <td className="py-2 px-4 border-b">
                                                        <button type="button" className="text-[red]" onClick={() => deleteToCart(e.id)}>
                                                            <i className="fa fa-close"></i>
                                                        </button>
                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        <img src={ORIGINAL_URL + 'uploads/product/' + e.avatar} alt="" width={200} />
                                                    </td>
                                                    <td className="py-2 px-4 border-b text-xs md:text-sm">
                                                        <Link href={'/' + e.slug + '.html'} className="hover:text-[#6fa400]">{e.title}</Link>
                                                        <div className="mt-2 text-xs">
                                                            <ul>
                                                                {
                                                                    e.color && e.color.length > 0 &&
                                                                    <li>
                                                                        <span className='mr-1'>Màu sắc:</span>
                                                                        {
                                                                            e.color.map((c: any, ck: any) =>
                                                                                <span key={ck} className="text-[#6fa400]">{c + ','}</span>
                                                                            )
                                                                        }
                                                                    </li>
                                                                }
                                                                {
                                                                    e.pin && e.pin.length > 0 &&
                                                                    <li>
                                                                        <span className='mr-1'>Pin:</span>
                                                                        {
                                                                            e.pin.map((p: any, pk: any) =>
                                                                                <span key={pk} className="text-[#6fa400]">{p + ','}</span>
                                                                            )
                                                                        }
                                                                    </li>
                                                                }
                                                                <li className="md:hidden">Giá: <span className="text-[#6fa400]">{FormattedNumber(e.price)}</span></li>
                                                            </ul>
                                                        </div>
                                                    </td>
                                                    <td className="py-2 px-4 border-b hidden md:table-cell"><span className="text-[#6fa400] text-base">
                                                        {FormattedNumber(e.price)}</span> <br /><span className="text-xs">(VNĐ)</span></td>
                                                    <td className="py-2 px-4 border-b">
                                                        <input type="text" defaultValue={e.quantity} onChange={(event) => updateToCart(event, e.id)} className="border w-full px-4 py-2 rounded-3xl focus:outline-none text-[#333] text-center" />
                                                    </td>
                                                    <td className="py-2 px-4 border-b hidden md:table-cell"><span className="text-[#6fa400] text-base">
                                                        {FormattedNumber(e.price * e.quantity)} </span> <br /><span className="text-xs">(VNĐ)</span></td>
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
                                    <span className="text-right text-base"><b>{calculateItemCount()}</b></span>
                                </li>
                                <li className="grid gap-4 grid-cols-2 border-b pb-2">
                                    <span>Tổng thu (VNĐ):</span>
                                    <span className="text-right text-lg">
                                        <b>{FormattedNumber(calculateTotal())}</b>
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