import Link from "next/link";

export function Header() {
    return (
        <header>
            <div className="container mx-auto">
                <div className="grid gap-0 grid-cols-6 md:grid-cols-10 md:items-center">
                    <div className="col-span-2 bg-[rebeccapurple] md:bg-inherit  text-center md:text-left md:col-span-2 py-2 md:py-0 uppercase text-[8px] md:text-sm">
                        <Link href={'/store'} className="text-white md:text-[#333]">
                            <i className="fa fa-map-marker text-[white] md:text-[#6fa400]"></i> Tìm địa chỉ cửa hàng
                        </Link>
                    </div>
                    <div className="col-span-2 bg-[yellow] md:bg-inherit text-center md:text-left md:col-span-2 py-2 md:py-0 uppercase text-[8px] md:text-sm">
                        <a href="tel:028 6253 9118">
                            <i className="fa fa-phone text-[black] md:text-[#6fa400]"></i> Mua hàng: 028 6253 9118
                        </a>
                    </div>
                    <div className="col-span-2 bg-[darkgreen] md:bg-inherit text-center md:text-left md:col-span-2 py-2 md:py-0 uppercase text-[8px] md:text-sm">
                        <a href="tel:028 6253 9118" className="text-white md:text-[#333]">
                            <i className="fa fa-phone text-[white] md:text-[#6fa400]"></i> Bảo hành: 028 6253 9118
                        </a>
                    </div>
                    <div className="col-span-3 hidden md:block md:col-span-2 uppercase text-center text-[#333] font-bold italic bg-[#a1e611] text-xl textTwo">
                        XeDienVui.VN
                    </div>
                    <div className="col-span-3 hidden md:block md:col-span-2 uppercase text-center text-[#333] font-bold bg-[#a1e611] text-xl textThree">
                        Bảo hành 2 năm
                    </div>
                </div>
            </div>
        </header>
    );
}