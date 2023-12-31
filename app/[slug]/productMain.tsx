export function ProductMain(props: any) {
    const detail = props.data;

    const formattedNumber = (numberToFormat: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 0,
        }).format(numberToFormat);
    };

    return (
        <div className="col-span-12 md:col-span-4">
            <h1 className="text-2xl font-semibold text-[#6fa400] mb-4">
                {detail && detail.title}
            </h1>
            <div className="price text-2xl font-semibold">
                {
                    detail &&
                    detail.price != '' &&
                    formattedNumber(detail.price)
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
                {
                    detail &&
                    detail.color.length > 0 &&
                    <div className="mb-4 items-center border p-1 bg-[whitesmoke] rounded">
                        <div className="text-[#919191] mb-2 text-xs font-bold">
                            Màu sắc:
                        </div>
                        <div className="grid gap-1 grid-cols-7">
                            {
                                detail.color.map((c: any, ci: any) =>
                                    <div key={ci} className={"bg-[#fff] hover:bg-[#fff] text-[#919191] p-2 rounded hover:text-[#000] cursor-pointer text-[12px] " + (c.title.split(' ').length > 2 ? "col-span-3" : "col-span-2")}>
                                        <input type="checkbox" name="color" id={"color_" + ci} />
                                        <label htmlFor={"color_" + ci} className="ml-1">{c.title}</label>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }
                {
                    detail &&
                    detail.pin.length > 0 &&
                    <div className="items-center border p-1 bg-[whitesmoke] rounded">
                        <div className="text-[#919191] mb-2 text-xs font-bold">
                            Pin:
                        </div>
                        <div className="grid gap-1 grid-cols-3">
                            {
                                detail.pin.map((p: any, pi: any) =>
                                    <div key={pi} className="col-span-1 bg-[#fff] hover:bg-[#fff] text-[#919191] p-2 rounded hover:text-[#000] cursor-pointer text-[12px]">
                                        <input type="checkbox" name="color" id={"pin_" + pi} />
                                        <label htmlFor={"pin_" + pi} className="ml-1">{p.title}</label>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                }
            </div>
            <div className="addToCart flex mt-4 items-center">
                <span>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        defaultValue={1}
                        className="mr-2 md:p-1 border border-gray-300 hover:bg-white text-center rounded focus:ring focus:ring-blue-200 focus:border-blue-500 w-24"
                    />
                </span>
                <span>
                    <button
                        type="button"
                        className="bg-[#6fa400] hover:bg-[#5a8600] px-6 py-2 text-white rounded text-xs md:text-base"
                    >
                        THÊM VÀO GIỎ <i className="fa fa-shopping-cart"></i>
                    </button>
                </span>
            </div>
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
            <div className="buyNow mt-4 text-center">
                <button className="w-full bg-[#6fa400] hover:bg-[#5a8600] p-2 font-semibold text-xl text-white rounded text-xs md:text-lg">
                    MUA NGAY
                </button>
            </div>
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