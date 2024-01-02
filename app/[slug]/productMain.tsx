import FormattedNumber from "../feed/formattedNumber";
import { PinProduct } from "./PinProduct";
import { AddToCart } from "./addToCart";
import { BuyNow } from "./buyNow";
import { ColorProduct } from "./colorProduct";
export function ProductMain(props: any) {
    const detail = props.data;
    return (
        <div className="col-span-12 md:col-span-4">
            <h1 className="text-2xl font-semibold text-[#6fa400] mb-4">
                {detail && detail.title}
            </h1>
            <div className="price text-2xl font-semibold">
                {
                    detail &&
                    detail.price != '' &&
                    FormattedNumber(detail.price)
                }
                {
                    detail &&
                    detail.price != '' &&
                    <>
                        <sup>đ</sup>
                        <span className="text-xs font-normal">(Đã bao gồm phí ship)</span>
                    </>
                }
                {detail && detail.price == '' && 'Liên Hệ'}
            </div>
            <div className="mt-4 text-sm">
                {detail && detail.color.length > 0 && <ColorProduct data={detail} />}
                {detail && detail.pin.length > 0 && <PinProduct data={detail} />}
            </div>
            <AddToCart data={detail} />
            <div className="promotion rounded-lg relative mt-8 border-2 border-[#333] pt-8 p-4">
                <span className="absolute text-white px-4 py-2 bg-[#333] top-0 text-center rounded-full uppercase  text-[10px] text-[10px] md:text-xs">
                    Khuyến mãi khi mua sản phẩm
                </span>
                <ul className="text-[#333] text-xs">
                    <li>Miễn phí giao hàng khu vực HCM.</li>
                    <li>
                        Mã khuyến mãi:
                        <span className="text-[#cecece] ml-[5px]">XDV30</span>
                        <span className="cursor-pointer ml-2 hover:text-[#6fa400]">
                            <i className="fa-solid fa-copy"></i> COPY
                        </span>
                    </li>
                </ul>
            </div>
            <BuyNow data={detail} />
            <div className="grid gap-4 grid-cols-2 mt-4">
                <div className="col-span-1 bg-[#666] shadow-md shadow-[#ccc] md:text-[12px] text-white p-2 rounded text-center">
                    <div className="text-xs uppercase font-semibold">
                        Trả góp 0%
                    </div>
                    <div className="text-xs text-[#a1e611] italic">
                        Tại cửa hàng
                    </div>
                </div>
                <div className="col-span-1 bg-[#666] shadow-md shadow-[#ccc] md:text-[12px] text-white p-2 rounded text-center">
                    <div className="text-xs uppercase font-semibold">
                        Trả góp qua thẻ
                    </div>
                    <div className="text-xs text-[#a1e611] italic">
                        Visa, Master
                    </div>
                </div>
                <div className="col-span-1 bg-[#666] shadow-md shadow-[#ccc] md:text-[12px] text-white p-2 rounded text-center">
                    <div className="text-xs uppercase font-semibold">
                        0946721565
                    </div>
                    <div className="text-xs text-[#a1e611] italic">
                        Hotline mua hàng
                    </div>
                </div>
                <div className="col-span-1 bg-[#666] shadow-md shadow-[#ccc] md:text-[12px] text-white p-2 rounded text-center">
                    <div className="text-xs uppercase font-semibold">
                        Chat Trực Tiếp
                    </div>
                    <div className="text-xs text-[#a1e611] italic">Zalo</div>
                </div>
            </div>
        </div>
    )
}