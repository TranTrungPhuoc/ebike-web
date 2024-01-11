"use client";
import { useEffect, useState } from 'react';
import Link from "next/link";
import FormattedNumber from '../feed/formattedNumber';
import { useRouter } from 'next/navigation';
import { Delivery } from '../service/delivery';
import { Payment } from '../service/payment';
import { Province } from '../service/province';
import { District } from '../service/district';
import { Wards } from '../service/wards';
import { Customer } from '../service/customer';
import { Order } from '../service/order';
import { useCart } from '../components/CartContext';
export default function Page() {
    const { cart } = useCart();
    const calculateItemCount = () => { return cart.length; };
    const calculateTotal = () => { return cart.reduce((total: any, item: any) => total + item.price * item.quantity, 0); };
    const router = useRouter()
    if (calculateItemCount() == 0) { router.push('/'); return false; }
    const [delivery, setDelivery] = useState<any>();
    const [payment, setPayment] = useState<any>();
    const [province, setProvince] = useState<any>();
    const [district, setDistrict] = useState<any>();
    const [wards, setWards] = useState<any>();
    const [valDelivery, setValDelivery] = useState('');
    const [valPayment, setValPayment] = useState('');
    const handleDelivery = (event: any) => { setValDelivery(event.target.value); }
    const handlePayment = (event: any) => { setValPayment(event.target.value); }
    const handleAreaChange = async (event: any) => {
        const name = event.target.name
        const value = event.target.value
        if (name == 'province') {
            const _district = await District(value);
            setDistrict(_district.response);
        }
        else if (name == 'district') {
            const _wards = await Wards(value);
            setWards(_wards.response);
        }
    }
    useEffect(() => {
        Delivery().then((data: any) => { setDelivery(data.response) })
        Payment().then((data: any) => { setPayment(data.response) })
        Province().then((data: any) => { setProvince(data.response) })
    }, [])
    const [formData, setFormData] = useState({
        fullname: '', email: '', phone: '', nation: 'vn',
        province: '', district: '', wards: '', address: '', note: '',
    });
    const isFormValid = () => {
        return formData.fullname.trim() !== '' && formData.email.trim() !== '' &&
            formData.phone.trim() !== '' &&
            formData.nation.trim() !== '' &&
            formData.province.trim() !== '' &&
            formData.district.trim() !== '' &&
            formData.wards.trim() !== '' &&
            formData.address.trim() !== '' &&
            valDelivery.trim() !== '' &&
            valPayment.trim() !== '';
    };
    const isValidEmail = (email:string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const isValidPhone = (phone:string) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
      };
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const { fullname, email, phone, nation, province, district, wards, address, note } = formData;
        if (
            fullname != '' &&
            email != '' &&
            phone != '' &&
            nation != '' &&
            province != '' &&
            district != '' &&
            wards != '' &&
            address != ''
        ) {
            if (!isValidEmail(email)) {
                alert('Email không đúng định dạng');
                return false;
            }
            if (!isValidPhone(phone)) {
                alert('Số Điện Thoại không đúng định dạng');
                return false;
            }
            const obj = { fullname, email, phone, nation, province, district, wards, address };
            const customer = await Customer(obj);
            const obj_Order = {
                customer: customer.response._id,
                note,
                total: calculateTotal(),
                detail: cart,
                payment: valPayment,
                delivery: valDelivery
            }
            const order = await Order(obj_Order);
            router.push('/complete');
        }
    };
    return (
        <main>
            <div className="breadcrumbs">
                <div className="container mx-auto">
                    <ul className="flex flex-wrap px-2 md:px-0 py-4 text-xs md:text-sm text-[#333] border-b border-r-slate-300">
                        <li><Link href="/"><i className="fa fa-home text-[#6fa400]"></i> Trang chủ</Link></li>
                        <li className="text-[#6fa400]">Thanh toán</li>
                    </ul>
                </div>
            </div>
            <div className="store md:mt-12">
                <form onSubmit={handleSubmit}>
                    <div className="container mx-auto">
                        <h1 className="title relative mb-4">
                            <span className="md:absolute block bg-[#333] text-white font-semibold px-7 py-2.5 text-center uppercase md:top-0 md:left-2/4 mb-2 md:mb-0 md:rounded-3xl">
                                Thanh toán
                            </span>
                        </h1>
                        <div className="md:grid gap-4 grid-cols-2 mx-4 md:mx-0 md:items-center md:border-t md:border-[#333] md:pt-12">
                            <div className="col-span-1 text-sm">
                                <h2 className="text-xl uppercase">Địa chỉ nhận hàng</h2>
                                <div className="p-4 mb-4 mt-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                                    <h6 className='mb-2'><b>Ghi chú:</b></h6>
                                    <ul className='text-xs'>
                                        <li><span className="text-[red]">(*)</span> Yêu cầu bắt buộc nhập.</li>
                                        <li>Vui lòng nhập đầy đủ thông tin bên dưới</li>
                                    </ul>
                                </div>
                                <hr className="mt-4" />
                                <div className="mt-4">
                                    <label htmlFor="fullname" className="w-full">Họ & Tên <span className="text-[red]">(*)</span></label>
                                    <input type="text" name="fullname" defaultValue={formData.fullname} onChange={handleInputChange} id="fullname" className={"border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white"} placeholder="Xe Điện Vui" />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="email" className="w-full">Địa chỉ Email <span className="text-[red]">(*)</span></label>
                                    <input type="text" name="email" defaultValue={formData.email} onChange={handleInputChange} className={"border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white"} placeholder="xedienvui@gmail.com" />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="phone" className="w-full">Số điện thoại <span className="text-[red]">(*)</span></label>
                                    <input type="text" name="phone" defaultValue={formData.phone} onChange={handleInputChange} className={"border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white"} placeholder="0946721565" />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="nation" className="w-full">Quốc gia <span className="text-[red]">(*)</span></label>
                                    <select name="nation" defaultValue={'vn'} onChange={handleInputChange} className={"border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white"}>
                                        <option value="vn">Việt Nam</option>
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="province" className="w-full">Tỉnh / Thành phố <span className="text-[red]">(*)</span></label>
                                    <select name="province" onChange={(event: any) => { handleInputChange(event), handleAreaChange(event) }} className={"border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white"}>
                                        <option value="">-Chọn-</option>
                                        {
                                            province &&
                                            province.map((e: any, pi:any) =>
                                                <option key={pi} value={e.citycode}>{e.cityname}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="district" className="w-full">Quận / Huyện <span className="text-[red]">(*)</span></label>
                                    <select name="district" onChange={(event: any) => { handleInputChange(event), handleAreaChange(event) }} className={"border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white"}>
                                        <option value="">-Chọn-</option>
                                        {
                                            district &&
                                            district.map((e: any, di:any) =>
                                                <option key={di} value={e.districtcode}>{e.districtname}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="wards" className="w-full">Phường / Xã <span className="text-[red]">(*)</span></label>
                                    <select name="wards" onChange={handleInputChange} className={"border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white"}>
                                        <option value="">-Chọn-</option>
                                        {
                                            wards &&
                                            wards.map((e: any, wi:any) =>
                                                <option key={wi} value={e.wardcode}>{e.wardname}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="address" className="w-full">Địa chỉ <span className="text-[red]">(*)</span></label>
                                    <input type="text" name="address" defaultValue={formData.address} onChange={handleInputChange} className={"border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white"} placeholder="413/46 Lê Văn Quới" />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="address" className="w-full">Ghi chú đơn hàng</label>
                                    <textarea className="border p-4 w-full mt-2 focus:outline-none rounded bg-[#f8f8f8] focus:bg-white" onChange={handleInputChange} name="note" id="note" rows={3}></textarea>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="mt-8 md:mt-0 border border-2 border-slate-700 rounded p-8">
                                    <h2 className="text-xl uppercase">Đơn hàng của bạn</h2>
                                    <table className="min-w-full bg-white border border-gray-300 mt-4 text-sm">
                                        <thead>
                                            <tr>
                                                <th className="py-2 px-4 border-b text-left text-[#bdbdbd]">SẢN PHẨM</th>
                                                <th className="py-2 px-4 border-b text-[#bdbdbd] text-right">TỔNG</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cart && cart.map((e: any, i: any) =>
                                                    <tr key={i}>
                                                        <td className="py-2 px-4 border-b text-xs md:text-sm">
                                                            <Link href={'/' + e.slug + '.html'} className="hover:text-[#6fa400]">{e.title}</Link>
                                                        </td>
                                                        <td className="py-2 px-4 border-b text-right">
                                                            <span className="text-[#6fa400] text-base">
                                                                {FormattedNumber(e.price)}</span> <br /><span className="text-xs">(VNĐ)
                                                            </span>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                            <tr>
                                                <td className="py-2 px-4 border-b text-xs md:text-sm">
                                                    Tổng thu (VNĐ)
                                                </td>
                                                <td className="py-2 px-4 border-b text-right">
                                                    <span className="text-[#333] text-lg">
                                                        <b>{FormattedNumber(calculateTotal())}</b>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h2 className="md:text-xl uppercase mt-4">Phương thức giao hàng</h2>
                                    <div className="mt-4">
                                        <ul className="text-sm px-4">
                                            {
                                                delivery &&
                                                delivery.map((e: any, i: any) =>
                                                    <li key={i} className={(i + 1) != delivery.length ? "mb-4" : ""}><input type="radio" name="ptgh" id={"ptgh" + i} defaultValue={e._id} onChange={handleDelivery} /> <label htmlFor={"ptgh" + i}>{e.title}</label></li>
                                                )
                                            }
                                        </ul>
                                        <div className="text-sm mt-4">
                                            Tổng thu:
                                            <span className="text-[#333] text-lg ml-2">
                                                <b>{FormattedNumber(calculateTotal())}</b> <small>(VNĐ)</small>
                                            </span>
                                        </div>
                                    </div>
                                    <hr className="mt-4" />
                                    <h2 className="md:text-xl uppercase mt-4">Phương thức thanh toán</h2>
                                    <div className="mt-4">
                                        <ul className="text-sm px-4">
                                            {
                                                payment &&
                                                payment.map((e: any, i: any) =>
                                                    <li key={i} className={(i + 1) != payment.length ? "mb-4" : ""}><input type="radio" name="pttt" id={"pttt" + i} defaultValue={e._id} onChange={handlePayment} /> <label htmlFor={"pttt" + i}>{e.title}</label></li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <hr className="mt-4" />
                                    <div className="md:grid gap-4 grid-cols-2">
                                        <button type="submit" disabled={!isFormValid()} className={"text-white text-center uppercase py-4 px-8 block mt-8 bg-[#6fa400] rounded" + (!isFormValid() ? ' opacity-50' : ' hover:opacity-90')}>
                                            Thanh Toán
                                        </button>
                                        <Link href={'/cart'} className="bg-[#f8f8f8] hover:text-[#6fa400] text-center uppercase py-4 px-8 block mt-8 hover:opacity-90 rounded">
                                            Giỏ hàng
                                        </Link>
                                    </div>
                                    <p className="mt-4 text-sm text-[#a4a4a4] text-justify leading-7">
                                        Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn đặt hàng của bạn, hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này và cho các mục đích khác được mô tả trong <span className="text-[#333]">chính sách riêng tư</span> của chúng tôi.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}