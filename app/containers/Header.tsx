import Link from "next/link";
export function Header(props:any) {
    const data = props.data;
    return (
        <header>
            <div className="container mx-auto">
                <div className="grid gap-0 grid-cols-6 md:grid-cols-10 md:items-center">
                    <div className="col-span-2 bg-[rebeccapurple] md:bg-inherit font-semibold text-center md:text-left md:col-span-2 py-2 md:py-0 uppercase text-[8px] md:text-sm">
                        <Link href={data.linkAddressHeader} className="text-white md:text-[#333]">
                            <i className={data.iconAddressHeader + " text-[white] md:text-[#6fa400]"}></i> {data.titleAddressHeader}
                        </Link>
                    </div>
                    <div className="col-span-2 bg-[yellow] md:bg-inherit font-semibold text-center md:text-left md:col-span-2 py-2 md:py-0 uppercase text-[8px] md:text-sm">
                        <a href={data.linkPurchaseHeader}>
                            <i className={data.iconPurchaseHeader + " text-[black] md:text-[#6fa400]"}></i> {data.titlePurchaseHeader}
                        </a>
                    </div>
                    <div className="col-span-2 bg-[darkgreen] md:bg-inherit font-semibold text-center md:text-left md:col-span-2 py-2 md:py-0 uppercase text-[8px] md:text-sm">
                        <a href={data.titlePhoneHeader} className="text-white md:text-[#333]">
                            <i className={data.iconPhoneHeader + " text-[black] md:text-[#6fa400]"}></i> {data.titlePhoneHeader}
                        </a>
                    </div>
                    <div className="col-span-3 hidden md:block md:col-span-2 uppercase text-center text-[#333] font-bold italic bg-[#a1e611] text-lg textTwo">
                        <i className={data.iconFreeshipHeader}></i> {data.titleFreeshipHeader}
                    </div>
                    <div className="col-span-3 hidden md:block md:col-span-2 uppercase text-center text-[#333] font-bold italic bg-[#a1e611] text-lg textThree">
                        <i className={data.iconGuaranteeHeader}></i> {data.titleGuaranteeHeader}
                    </div>
                </div>
            </div>
        </header>
    );
}