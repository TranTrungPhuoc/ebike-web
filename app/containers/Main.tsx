import Link from 'next/link'
import { productHome } from '../service/productHome';
export async function Main() {
    const productList = await productHome();
    const formattedNumber = (numberToFormat: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            minimumFractionDigits: 0,
        }).format(numberToFormat);
    }
    return (
        <div className="main mt-7 mb-7">
            <div className="container mx-auto">
                <div className="grid gap-0 grid-cols-4 md:grid-cols-5 md:items-center">
                    {
                        productList.response && 
                        productList.response.map((e:any, i:any)=>(
                            <div key={i} className={"col-span-2 md:col-span-1 text-center border-r border-r-slate-300 border-b border-b-slate-300" + (i==4 || i==9 || i==14 || i==19 ? " md:border-r md:border-r-white": "")}>
                                <div className="products p-4">
                                    <Link href={"/" + e.slug + ".html"} className="text-[#333]">
                                        <div className="image">
                                            <img src={e.avatar} alt="" />
                                        </div>
                                        <h3 className="text-sm mb-2 font-semibold text-[#626262] h-[50px]">{e.title}</h3>
                                        <p className="text-xs mb-4">{e.description}</p>
                                        <div className="price font-bold mb-7 text-lg">{e.price!=0?formattedNumber(e.price):'Liên Hệ'}</div>
                                        <div className="mt-2 grid gap-2 grid-cols-2 text-[10px] md:text-xs">
                                            <div className="col-span-1 text-[#6fa400] text-left">
                                                <span>4.3</span>
                                                <span className="ml-[5px]"><i className='fa fa-star'></i></span>
                                                <span className="ml-[5px] text-[#999]">(316)</span>
                                            </div>
                                            <div className="col-span-1 text-[#999] text-right">
                                                21 đã bán
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="more text-center mt-7 py-2.5">
                    <Link href="/category" className="hover:text-white hover:bg-[#6fa400] delay-0 duration-300 border border-[#ccc] hover:border-[#6fa400] px-10 py-2.5 no-underline rounded-xl uppercase">
                        Xem thêm
                    </Link>
                </div>
            </div>
        </div>
    )
}
